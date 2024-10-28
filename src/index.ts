import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import { router } from '@/router/index.ts'
import { pinia } from '@/store/index.ts'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#root')
