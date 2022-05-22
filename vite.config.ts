import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  plugins: [
    Pages({
      importMode(filepath, options) {
        for (const page of options.dirs) {
          if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`)) {
            return 'sync';
          }
        }
        return 'async';
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
