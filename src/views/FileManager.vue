<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { NButton, NSpace } from 'naive-ui'
import { $message, $dialog } from '@/utils'

const {
  open,
  onChange,
} = useFileDialog()

onChange(async (files) => {
  for (let i = 0; i < files.length; i++) {
    await saveFile(files[i])
  }
})

let opfs: FileSystemDirectoryHandle
const fileList = ref([])

function showExistFileTip (fileName: string) {
  return new Promise((resolve, reject) => {
    $dialog.warning({
      title: '警告',
      closeOnEsc: false,
      closable: false,
      maskClosable: false,
      content: `已存在文件【${fileName}】，是否覆盖？`,
      positiveText: '覆盖',
      negativeText: '跳过',
      onPositiveClick: () => {
        resolve(true)
      },
      onNegativeClick: () => {
        reject(false)
      },
    })
  })
}

async function saveFile (file: File) {
  const handle = await opfs.getFileHandle(file.name, { create: true })
  const nowFile = await handle.getFile()
  try {
    if (nowFile.size > 0) {
      await showExistFileTip(file.name)
    }
    const stream = await handle.createWritable()
    await stream.truncate(0)
    await stream.write(await file.arrayBuffer())
    await stream.close()
    await showFile()
  } catch (e) {
    console.log('取消保存')
  }
}

async function showFile () {
  try {
    fileList.value = []
    for await (let [name, handle] of opfs.entries()) {
      fileList.value.push({ name, handle })
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      $message.error(error.message)
    } else {
      $message.error('An unknown error occurred')
    }
  }
}

const fileContent = ref('')

async function readFile (handle: FileSystemFileHandle) {
  const file = await handle.getFile()
  const stream = file.stream()
  const reader = stream.getReader()
  const decoder = new TextDecoder('utf-8')
  fileContent.value = ''

  const processText = ({ done, value }: ReadableStreamReadResult<Uint8Array<ArrayBufferLike>>): any => {
    if (done) {
      return
    }
    const str = decoder.decode(value)
    fileContent.value += str
    return reader.read().then(processText)
  }

  reader.read().then(processText)
}

async function removeFile (handle: FileSystemFileHandle) {
  try {
    await opfs.removeEntry(handle.name, { recursive: true })
    await showFile()
    $message.success('删除成功')
  } catch (error: unknown) {
    if (error instanceof Error) {
      $message.error(error.message)
    } else {
      $message.error('An unknown error occurred')
    }
  }
}

onMounted(async () => {
  opfs = await navigator.storage.getDirectory()
  await showFile()
})
</script>

<template>
  <header>
    <NButton @click="open()" type="primary">添加文件</NButton>
  </header>
  <main>
    <div class="file-list">
      <div v-for="item of fileList" class="file-item">
        <div class="file-name">{{ item.name }}</div>
        <NSpace class="operate">
          <NButton @click="readFile(item.handle)" type="primary">读取</NButton>
          <NButton @click="removeFile(item.handle)" type="error">删除</NButton>
        </NSpace>
      </div>
    </div>
    <div class="file-preview">
      {{ fileContent }}
    </div>
  </main>

</template>
<style scoped>
main {
  display: flex;
}

.file-list {
  width: 50%;
}

.file-item {
  display: flex;
  align-items: center;
  padding: 4px 10px;

  .file-name {
    flex: 1 1 auto;
  }
}

.file-preview {
  width: 50%;
  white-space: pre;
}
</style>