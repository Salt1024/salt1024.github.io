import type { FileObject } from '@/types'

export class FileManager {
  opfs: FileSystemDirectoryHandle

  async init () {
    this.opfs = await navigator.storage.getDirectory()
  }

  async isExist (fileName: string, opfs: FileSystemDirectoryHandle): Promise<boolean> {
    try {
      const handle = await opfs.getFileHandle(fileName, { create: false })
      const nowFile = await handle.getFile()
      return nowFile.size > 0
    } catch (e: unknown) {
      if (e.name === 'NotFoundError') {
        return false
      } else {
        throw e
      }
    }
  }

  async save (files: Array<File> | FileList, override = false): Promise<Array<File>> {
    const existFiles = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if ((await this.isExist(file.name, this.opfs)) && !override) {
        existFiles.push(file)
      } else {
        const handle = await this.opfs.getFileHandle(file.name, { create: true })
        const stream = await handle.createWritable()
        await stream.truncate(0)
        await stream.write(await file.arrayBuffer())
        await stream.close()
      }
    }
    return existFiles
  }

  async remove (handle: FileSystemFileHandle): Promise<void> {
    await this.opfs.removeEntry(handle.name, { recursive: true })
  }

  async list (): Promise<Array<FileObject>> {
    const fileList = []
    for await (let [name, handle] of this.opfs.entries()) {
      const file = await handle.getFile()
      fileList.push({ name, handle, size: file.size })
    }
    return fileList
  }
}
