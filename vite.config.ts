/// <reference types="vitest" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@public': path.resolve(__dirname, './public'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['.tests/setup.ts'],
		includeSource: ['src/**/*.{ts,tsx}'],
		coverage: {
			include: ['src/**/*'],
			exclude: ['./src/assets'],
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: '.tests/coverage',
			all: true,
		},
		mockReset: true,
		restoreMocks: true,
	},
});
