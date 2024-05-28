<script lang="ts" setup>
import { NResult, NButton } from 'naive-ui'
</script>

<template>
  <div class="not-found">
    <n-result status="404" title="404 资源不存在">
      <template #footer>
        <n-button @click="$router.push({name: 'Home'})">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped>
.not-found {
  margin-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
