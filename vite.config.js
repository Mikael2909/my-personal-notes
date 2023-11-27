import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'
export default defineConfig({
    // config options
    base:"/my-personal-notes/",
    plugins : [react()],
  })