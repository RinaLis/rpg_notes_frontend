/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
  resolve: {
    alias: {
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@ui': path.resolve(__dirname, 'src/components/ui'),
    '@ui-pages': path.resolve(__dirname, 'src/components/ui/pages'),
    '@utils-types': path.resolve(__dirname, 'src/utils/types'),
    '@api': path.resolve(__dirname, 'src/utils/notes-api.ts'),
    '@cookie': path.resolve(__dirname, 'src/utils/cookie.ts'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@slices': path.resolve(__dirname, 'src/services/slices'),
    '@store': path.resolve(__dirname, 'src/services/store.ts'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  },
  },
});
