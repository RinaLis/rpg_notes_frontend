/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@ui': '/src/components/ui',
			'@pages': '/src/pages',
			'@ui-pages': '/src/components/ui/pages',
			'@assets': '/src/assets',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@const': '/src/utils/constants',
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
	server: {
		host: '127.0.0.1',
		port: 8000,
	},
});
