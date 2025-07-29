import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
    ],
  },
  server: {
    port: 5173,
    proxy: {     
      '/api': {
        target: 'http://localhost:8083',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
