import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [pluginVue()],
  html: {
    favicon: 'public/favicon.svg',
  }
})
