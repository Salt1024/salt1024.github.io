<script lang="ts" setup>
import { NResult, NButton } from 'naive-ui'
</script>

<template>
  <div class="page">
    <NResult status="418" title="15元/月">
      <template #footer>
        <NButton type="primary">立即购买</NButton>
      </template>
    </NResult>
  </div>
</template>

<style scoped>
.page {
  padding-top: 40px;
}
</style>