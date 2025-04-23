import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'wagmi', 'viem'],
          rainbowkit: ['@rainbow-me/rainbowkit']
        }
      }
    }
  },
  server: {
    port: 3000
  }
})