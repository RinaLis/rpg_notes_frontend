/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
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
			'@utils-types': 'src/utils/types',
			'@api': 'src/utils/notes-api.ts',
			'@cookie': 'src/utils/cookie.ts',
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
	define: {
		VITE_API_URL: `"${process.env.RPG_NOTES_API_URL}"`,
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or "modern"
			},
		},
	},
});
