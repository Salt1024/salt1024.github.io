<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

store.count++
</script>

<template>
  <RouterView />
</template>
