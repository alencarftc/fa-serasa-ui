/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	resolve: {
		alias: {
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@sass': path.resolve(__dirname, 'src/assets/sass'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@public': path.resolve(__dirname, './public'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@sass/main.scss";`,
			},
		},
	},
	test: {
		css: {
			modules: {
				classNameStrategy: 'non-scoped',
			},
		},
		globals: true,
		environment: 'jsdom',
		setupFiles: ['.tests/setup.ts'],
		includeSource: ['src/**/*.{ts,tsx}'],
		coverage: {
			include: ['src/components/**/*.tsx'],
			exclude: ['src/assets', 'src/**/*.stories.{ts,tsx}'],
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: '.tests/coverage',
			all: true,
		},
		mockReset: true,
		restoreMocks: true,
	},
});
