<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import {
  AmbientLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AnimationMixer,
  AnimationClip,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three'
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js'
import { ArcballControls } from 'three/addons/controls/ArcballControls.js'
import { NButton } from 'naive-ui'
import { $message } from '@/utils'

const width = 600
const height = 480
const scene = new Scene()
const camera = new PerspectiveCamera(75, width / height, 0.1, 10000)
const renderer = new WebGLRenderer()
const controls = new ArcballControls(camera, renderer.domElement, scene)
renderer.setSize(width, height)

const loadProgress = ref(0)

function loadModel (): Promise<GLTF> {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load('/sea_keep_lonely_watcher/scene.gltf', function (gltf) {
      resolve(gltf)
    }, (xhr) => {
      loadProgress.value = Math.round(xhr.loaded / xhr.total * 100)
    }, (error) => {
      reject(error)
    })
  })
}

async function initModel () {
  const gltf = await loadModel()
  scene.add(gltf.scene)
  // mixer = new AnimationMixer(gltf.scene)
  // let clips = gltf.animations
  // const clip = AnimationClip.findByName(clips, '圆环Action')
  // const action = mixer.clipAction(clip)
  // action.play()

  const light = new AmbientLight(0x404040, 100)
  scene.add(light)
}

// let mixer: AnimationMixer
// let prevT = 0

function animate (t: number) {
  // if (prevT === 0) {
  //   prevT = t
  // }
  // let deltaT = t - prevT
  // prevT = t
  // mixer?.update(deltaT / 1000)
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

controls.addEventListener('change', function () {
  renderer.render(scene, camera)
})

onMounted(async () => {
  document.querySelector('#three').appendChild(renderer.domElement)
  await initModel()
  camera.position.set(0, 300, 1500)
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
})
</script>

<template>
  <div id="three"></div>
</template>

<style scoped>
.file-item {
  display: flex;
  align-items: center;
}
</style>
