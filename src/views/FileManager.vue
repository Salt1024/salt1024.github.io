<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { NButton, NSpace, NIcon, NFloatButton } from 'naive-ui'
import { $message, $dialog } from '@/utils'
import TrashOutline from '@vicons/ionicons5/TrashOutline'
import { FileManager } from '@/utils'

let fm: FileManager = new FileManager()
const fileList = ref([])
const { open, onChange, reset } = useFileDialog()

onChange(async (files) => {
  const existFiles = await fm.save(files)
  if (existFiles.length > 0) {
    const isOverride = await showExistFileTip(existFiles)
    if (isOverride) {
      await fm.save(existFiles, true)
    }
  }
  await refreshFileList()
  reset()
})

function showExistFileTip (existFiles: Array<File>) {
  let fileNames = existFiles.map(file => file.name).join('\n')
  return new Promise((resolve, reject) => {
    $dialog.warning({
      title: '警告',
      closeOnEsc: false,
      closable: false,
      maskClosable: false,
      contentStyle: 'white-space: pre-wrap',
      content: `已存在文件，是否覆盖？\n\n${fileNames}`,
      positiveText: '覆盖',
      negativeText: '跳过',
      onPositiveClick: () => {
        resolve(true)
      },
      onNegativeClick: () => {
        resolve(false)
      },
    })
  })
}

async function refreshFileList () {
  fileList.value = await fm.list()
}

async function readFile (handle: FileSystemFileHandle) {
  const file = await handle.getFile()
  console.log(file)
}

async function removeFile (item: { name: string, handle: FileSystemFileHandle }) {
  try {
    await fm.remove(item.handle)
    await refreshFileList()
  } catch (e) {
    $message.error(e.message)
  }
}

async function downloadFile (item) {}

onMounted(async () => {
  await fm.init()
  await refreshFileList()
})
</script>

<template>
  <div class="file-list">
    <div v-for="item of fileList" class="file-item">
      <div class="file-name">{{ item.name }}</div>

      <NSpace align="center">
        <NButton text type="error" @click="removeFile(item)">删除</NButton>
        <NButton text type="primary" @click="readFile(item)">查看</NButton>
        <NButton text type="primary" @click="downloadFile(item)">下载</NButton>
      </NSpace>
    </div>
  </div>

  <NFloatButton :bottom="20" :right="20" type="primary" @click="open()">+</NFloatButton>
</template>
<style scoped>
.file-list {
  width: 100%;
}

.file-item {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 10px 12px;

  .file-name {
    flex: 1 1 auto;
  }
}
</style>
