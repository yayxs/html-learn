import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        input: resolve(__dirname, 'input.html'),
        'input-attributes': resolve(__dirname, 'input-attributes.html')
      }
    }
  }
})
