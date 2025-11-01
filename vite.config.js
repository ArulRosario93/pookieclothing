import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite'; // Import the plugin

export default defineConfig({
  plugins: [
    tanstackRouter(), // 1. Must be listed BEFORE the React plugin
    react(),          // 2. React plugin
  ],
});