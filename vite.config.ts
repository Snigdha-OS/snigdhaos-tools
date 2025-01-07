import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/snigdhaos-tools/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'script.js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return '[name].[ext]';
        },
      },
    },
  },
});
