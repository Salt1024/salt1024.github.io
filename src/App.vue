<script lang="ts" setup>
import { dateZhCN, NConfigProvider, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider
    :date-locale="dateZhCN"
    :locale="zhCN"
    abstract
    inline-theme-disabled
  >
    <router-view />
  </n-config-provider>
</template>
