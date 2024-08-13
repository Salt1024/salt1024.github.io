<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'

const containerWidth = 1200
const containerHeight = 600

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)
const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(containerWidth, containerHeight)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshLambertMaterial({ color: 0x999999 })
const cube = new THREE.Mesh(geometry, material)
cube.rotation.x = Math.PI / 4
cube.rotation.y = Math.PI / 4
scene.add(cube)

camera.position.z = 5

function animate () {
  requestAnimationFrame(animate)
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()

onMounted(() => {
  const container = document.querySelector('#three')
  if (container) {
    container.appendChild(renderer.domElement)
  }
})
</script>

<template>
  <div id="three">
  </div>
</template>

<style scoped lang="scss">
#three {
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
