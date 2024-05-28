import { createDiscreteApi } from 'naive-ui'
import { themeOverrides } from '@/config'

export const {
  message: $message,
  notification: $notification,
  dialog: $dialog,
  modal: $modal
} = createDiscreteApi(
  ['message', 'dialog', 'notification', 'modal'],
  {
    configProviderProps: {
      themeOverrides: themeOverrides,
    },
  },
)
