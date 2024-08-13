import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Three from '@/views/Three.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: 'three', name: 'Three', component: Three }
      ]
    }
  ]
})

export default router
