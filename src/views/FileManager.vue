<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useFileDialog } from '@vueuse/core'
import { NButton, NSpace, NFloatButton } from 'naive-ui'
import { $message, $dialog, FileManager } from '@/utils'
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
  try {
    const dirHandle = await window.showDirectoryPicker({
      mode: 'readwrite',
    })
    const file = await item.handle.getFile()

    const isExist = await fm.isExist(item.name, dirHandle)

    if (isExist) {
      const isOverride = await showExistFileTip([file])
      if (!isOverride) {
        return
      }
    }

    const fileHandle = await dirHandle.getFileHandle(item.name, { create: true })
    const stream = await fileHandle.createWritable()
    await stream.truncate(0)
    await file.stream().pipeTo(stream)
    $message.success('下载成功')
  } catch (e) {
    if (e.name === 'AbortError') {
      $message.info('已取消')
    } else if (e.name === 'SecurityError') {
      $message.warning('无访问权限')
    } else {
      $message.error(e.message)
    }
  }
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
      <div class="file-size">{{ formatSize(item.size) }}</div>
      <div class="control">
        <NSpace align="center">
          <NButton text type="error" @click="removeFile(item.handle)">删除</NButton>
          <NButton text type="primary" @click="downloadFile(item)">下载</NButton>
        </NSpace>
      </div>
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
  padding: 10px 12px;

  .file-name {
    flex: 1 1 auto;
  }

  .control {
    flex: 0 0 90px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
