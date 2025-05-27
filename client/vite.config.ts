import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
      port: 4173,
      host: true, // permite acceso desde fuera de localhost
      allowedHosts: ['www.yampe.dev', 'yampe.dev']
    }
})

