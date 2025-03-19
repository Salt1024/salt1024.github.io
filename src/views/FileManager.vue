<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { NButton, NSpace, NFloatButton } from 'naive-ui'
import { $message, $dialog } from '@/utils'
import { FileManager } from '@/utils'
import type { FileObject } from '@/types'

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
})

function showExistFileTip (existFiles: Array<File>) {
  let fileNames = existFiles.map(file => file.name).join('\n')
  return new Promise((resolve) => {
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

function addFile () {
  reset()
  open()
}

async function removeFile (handle: FileSystemFileHandle) {
  try {
    await fm.remove(handle)
    await refreshFileList()
  } catch (e: any) {
    $message.error(e.message)
  }
}

async function downloadFile (item: FileObject) {
  // todo
}

function formatSize (size: number) {
  if (size > 1024 * 1024) {
    return Math.round(size / 1024 / 1024 * 100) / 100 + 'MB'
  } else if (size > 1024) {
    return Math.round(size / 1024 * 100) / 100 + 'KB'
  } else {
    return size + 'B'
  }
}

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
        <span>{{ formatSize(item.size) }}</span>
        <NButton text type="error" @click="removeFile(item.handle)">删除</NButton>
        <NButton text type="primary" @click="downloadFile(item)">下载</NButton>
      </NSpace>
    </div>
  </div>

  <NFloatButton :bottom="20" :right="20" type="primary" @click="addFile">+</NFloatButton>
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
