import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/jaimegd90/vite-react-rick-and-morty",
  plugins: [react()],
})
