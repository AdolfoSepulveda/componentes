import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        buttons: './buttons.html',
        tabs: './tabs.html',
        inputs: './inputs.html'
      }
    }
  }
})