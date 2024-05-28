import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import WalletOutline from '@vicons/ionicons5/WalletOutline'
import ChatboxEllipsesOutline from '@vicons/ionicons5/ChatboxEllipsesOutline'
import CubeOutline from '@vicons/ionicons5/CubeOutline'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue'),
        meta: {
          key: 'Chat',
          label: 'Chat',
          icon: ChatboxEllipsesOutline,
        },
      },
      {
        path: 'price',
        name: 'Price',
        component: () => import('@/views/Price.vue'),
        meta: {
          key: 'Price',
          label: 'Price',
          icon: WalletOutline,
        },
      },
      {
        path: 'model-viewer',
        name: 'ModelViewer',
        component: () => import('@/views/ModelViewer.vue'),
        meta: {
          key: 'ModelViewer',
          label: 'Model Viewer',
          icon: CubeOutline,
        },
      },
      {
        path: 'file-manager',
        name: 'FileManager',
        component: () => import('@/views/FileManager.vue'),
        meta: {
          key: 'FileManager',
          label: 'File Manager',
          icon: CubeOutline,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/ErrorPage/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

