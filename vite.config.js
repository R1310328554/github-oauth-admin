import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.vue', '.js', '.json', '.mjs']
  },
  server: {
    host2: '127.0.0.1',
    host: '192.168.1.103',
    port: 8085,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    // 反向代理
    proxy: {
      '/v1': {
        target2: 'http://127.0.0.1:8999/v1',
        target: 'http://192.168.1.103:8082',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '')
      }
    },
    fs: {
      // Allow serving files from one level up to the project root
      strict: true,
      allow: ['..']
    },
    cors: true,
    // hmr: { overlay: false }
  },
  base: './',
  outDir: 'dist',
  assetsDir: 'static'
})
