import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import utools from 'vite-plugin-utools'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    utools({
      external: 'uTools',
      preload: {
        path: './src/preload.ts',
        name: 'window.preload',
        watch: true
      },
      buildUpx: {
        pluginPath: './plugin.json',
        outDir: 'upx',
        outName: '[pluginName]_[version].upx'
      }
    })
  ]
})
