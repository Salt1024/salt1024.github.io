<script lang="ts" setup>
import { dateZhCN, NConfigProvider, zhCN } from 'naive-ui'
import { themeOverrides } from '@/config'
</script>

<template>
  <n-config-provider
    :date-locale="dateZhCN"
    :locale="zhCN"
    :theme-overrides="themeOverrides"
    abstract
    inline-theme-disabled
  >
    <router-view />
  </n-config-provider>
</template>
