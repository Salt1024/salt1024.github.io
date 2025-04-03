import { createDiscreteApi } from 'naive-ui'

export const {
  message: $message,
  notification: $notification,
  dialog: $dialog,
  modal: $modal
} = createDiscreteApi(
  ['message', 'dialog', 'notification', 'modal'],
)
