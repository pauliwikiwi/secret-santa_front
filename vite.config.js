import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@a': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@p': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@s': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@m': fileURLToPath(new URL('./src/modules', import.meta.url)),
    }
  }
})
