import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      //'/@assets/':  fileURLToPath(new URL('./src/assets', import.meta.url)),
      //'/@views/':      fileURLToPath(new URL('./src/views', import.meta.url)),
      //'/@stores/':      fileURLToPath(new URL('./src/stores', import.meta.url)),
      //'/@router/':      fileURLToPath(new URL('./src/router', import.meta.url)),
    }
  },
  build: {
    rollupOptions: {
      external: ['pinia'],
      output: {
        globals: {
          pinia: 'pinia',
        },
      },
    }
  }

})


