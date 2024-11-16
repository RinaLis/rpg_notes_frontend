/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@ui': '/src/components/ui',
			'@pages': '/src/pages',
			'@ui-pages': 'src/components/ui/pages',
			'@assets': '/src/assets',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@api': 'src/utils/notes-api.ts',
			'@services': '/src/services',
			'@slices': 'src/services/slices',
			'@store': 'src/services/store.ts',
		},
	},

	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/__tests__/setup.ts'],
	},
});
