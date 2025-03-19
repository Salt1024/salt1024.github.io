import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
    ],
    // base: mode === 'production' ? 'https://salt1024.github.io/' : '/',
    server: {
      host: '0.0.0.0',
      allowedHosts: ['minnow-enough-mackerel.ngrok-free.app'],
      // proxy: {
      //   '/api': {
      //     target: 'https://127.0.0.1:11434',
      //     changeOrigin: true,
      //     secure: false,
      //   },
      // },
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName: (name) => {
            return name
              .replace(/\s+/g, '-')
              .replace(/[^a-zA-Z0-9_.-]/g, '')
          },
        },
      },
    },
  }
})
