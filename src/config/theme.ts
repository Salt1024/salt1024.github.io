import { reactive } from 'vue'
import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = reactive({
  Radio: {
    buttonColorActive: '#18a058',
    buttonTextColorActive: '#ffffff',
  }
})
