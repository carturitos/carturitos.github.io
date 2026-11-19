import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio de usuario de GitHub Pages: https://carturitos.github.io
// La base queda en "/" porque es un repositorio <usuario>.github.io
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
