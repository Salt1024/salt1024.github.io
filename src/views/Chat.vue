<script lang="ts" setup>
import {
  NInput,
  NButton,
  NInputGroup,
  NRadioGroup,
  NRadioButton,
  NCard,
  NSkeleton,
  NSpace,
  NIcon,
} from 'naive-ui'
import { Ollama } from 'ollama/browser'
import { reactive, ref, watch, computed } from 'vue'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import { useElementSize, useScroll, useFileDialog } from '@vueuse/core'
import ImageOutline from '@vicons/ionicons5/ImageOutline'
import TrashOutline from '@vicons/ionicons5/TrashOutline'
import { $message } from '@/utils'

interface Message {
  role: string;
  content: string;
  images?: Uint8Array[];
}

enum ServerConnectStatus {
  Ready,
  Connecting,
  Connected,
  Disconnected,
}

let ollama: Ollama | null = null

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
)

const server = reactive({
  url: 'http://127.0.0.1:11434',
  status: ServerConnectStatus.Ready,
})

async function serverConnect () {
  server.status = ServerConnectStatus.Ready
  ollama = new Ollama({ host: server.url })
  try {
    await modelListGet()
    server.status = ServerConnectStatus.Connected
  } catch (e: any) {
    server.status = ServerConnectStatus.Disconnected
    $message.error(e.message)
  }
}

const model = reactive({
  list: [],
  active: null,
  loading: false,
})

async function modelListGet () {
  try {
    model.loading = true
    model.list = []
    const res = await ollama.list()
    model.list = res.models
    if (model.list.length > 0) {
      model.active = model.list[0].model
    }
  } catch (e) {
    throw e
  } finally {
    model.loading = false
  }
}

const chat = reactive({
  question: '',
  answer: '',
  messages: [],
  lastKey: '',
})

async function chatMessageSend () {
  if (!ollama || server.status !== ServerConnectStatus.Connected) {
    $message.info('请稍等')
    return
  }
  try {
    chat.answer = ''
    ollama.abort()
    const requestKey = Math.random().toString()
    chat.lastKey = requestKey
    const message: Message = { role: 'user', content: chat.question }
    if (fileList.value.length > 0) {
      const images = []
      for (let i = 0; i < fileList.value.length; i++) {
        const file = fileList.value[i]
        images.push(new Uint8Array(await file.arrayBuffer()))
      }
      message.images = images
    }
    chat.question = ''
    chat.messages.push(message)
    const response = await ollama.chat({
      model: model.active,
      messages: chat.messages,
      stream: true,
    })

    chat.messages.push({
      'role': 'assistant',
      'content': '',
    })

    for await (const part of response) {
      if (chat.lastKey === requestKey) {
        const lastIndex = chat.messages.length - 1
        chat.messages[lastIndex].content += part.message.content
      }
    }
  } catch (error) {
    $message.error('服务器已关闭，请联系客服')
  }
}

const messageScroller = ref<HTMLElement | null>(null)
const { y } = useScroll(messageScroller, { behavior: 'smooth' })

const messageWrapper = ref<HTMLElement | null>(null)
const wrapperSize = useElementSize(messageWrapper)
const scrollerSize = useElementSize(messageScroller)

watch(wrapperSize.height, () => {
  y.value = wrapperSize.height.value - scrollerSize.height.value + 70
})

const { open, reset, onChange } = useFileDialog({
  accept: 'image/*',
})
const fileList = ref([])
const filePreviewList = computed(() => {
  return fileList.value ? fileList.value.map((file) => {
    return URL.createObjectURL(file)
  }) : []
})

onChange((_files) => {
  if (_files) {
    fileList.value = Array.from(_files)
  }
})

function selectFile () {
  reset()
  open()
}

function removeFile (index: number) {
  fileList.value.splice(index, 1)
}
</script>

<template>
  <div class="chat">
    <NSpace vertical>
      <NCard class="model-select" content-style="padding: 12px;" embedded>
        <NInputGroup>
          <NInput v-model:value="server.url" placeholder="服务器地址" />
          <NButton
            :disabled="server.status === ServerConnectStatus.Connecting"
            type="primary"
            @click="serverConnect"
          >
            {{ server.status === ServerConnectStatus.Connecting ? '连接中' : '连接' }}
          </NButton>
        </NInputGroup>
      </NCard>

      <NCard
        v-if="server.status === ServerConnectStatus.Connected"
        class="model-select"
        content-style="padding: 12px;"
        embedded
      >
        <template v-if="model.loading">
          <NSpace>
            <NSkeleton :sharp="false" :width="146" size="medium" />
            <NSkeleton :sharp="false" :width="146" size="medium" />
          </NSpace>
        </template>
        <NRadioGroup v-else v-model:value="model.active" name="radiobuttongroup1">
          <NRadioButton
            v-for="item in model.list"
            :key="item.model"
            :label="item.name"
            :value="item.model"
          />
        </NRadioGroup>
      </NCard>
    </NSpace>

    <div ref="messageScroller" class="message-area">
      <div ref="messageWrapper" class="message-wrapper">
        <template v-for="item of chat.messages">
          <div v-if="item.role === 'user'" class="question">{{ item.content }}</div>
          <div v-else class="answer" v-html="marked.parse(item.content)"></div>
        </template>
      </div>
    </div>

    <div class="preview-area">
      <div v-for="(file, index) in filePreviewList" :key="file" class="image-preview">
        <img :src="file" alt="Preview" class="preview-image" />
        <NButton class="preview-remove" text @click.stop="removeFile(index)">
          <NIcon :component="TrashOutline" size="20" />
        </NButton>
      </div>
    </div>

    <div v-if="model.active" class="input-bar">
      <NInputGroup>
        <NInput v-model:value="chat.question" />
        <NButton @click="selectFile">
          <NIcon :component="ImageOutline" size="24" />
        </NButton>
        <NButton type="primary" @click="chatMessageSend">发送</NButton>
      </NInputGroup>
    </div>
  </div>
</template>

<style scoped>
.chat {
  position: relative;
  min-width: 300px;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
}

.model-select {
  width: calc(100% - 24px);
  margin: 0 auto;
}

.message-area {
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 140px);
  margin-top: 10px;
  padding: 0 12px;
}

.question {
  overflow-y: auto;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
}

.answer {
  overflow-y: auto;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #eeeeee;
}

.input-bar {
  position: absolute;
  bottom: 24px;
  left: 16px;
  width: calc(100% - 32px);
}

.preview-area {
  position: absolute;
  bottom: 64px;
  left: 16px;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 32px);
  text-align: right;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, 100px);
  gap: 0 10px;
}

.image-preview {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.preview-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.preview-remove {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>