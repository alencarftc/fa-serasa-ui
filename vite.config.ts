/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		build: {
			outDir: 'dist',
		},
		publicDir: './public',
		plugins: [react(), splitVendorChunkPlugin(), viteCompression()],
		define: {
			'import.meta.vitest': 'undefined',
		},
		resolve: {
			alias: {
				'/src': path.resolve(process.cwd(), 'src'),
				'@public': path.resolve(__dirname, 'public'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@images': path.resolve(__dirname, 'src/assets/images'),
				'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
				'@interfaces': path.resolve(__dirname, 'src/interfaces'),
				'@sass': path.resolve(__dirname, 'src/assets/sass'),
				'@helpers': path.resolve(__dirname, 'src/helpers'),
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@configs': path.resolve(__dirname, 'src/configs'),
				'@services': path.resolve(__dirname, 'src/services'),
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
				include: ['src/**/*.tsx'],
				exclude: [
					'src/assets',
					'src/app.tsx',
					'src/main.tsx',
					'src/**/*.stories.{ts,tsx}',
				],
				provider: 'istanbul',
				reporter: ['text', 'json', 'html'],
				reportsDirectory: '.tests/coverage',
			},
			mockReset: true,
			restoreMocks: true,
		},
	});
};
