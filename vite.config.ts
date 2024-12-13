import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	build: {
		assetsInlineLimit: 2000
	},
	server:{
		fs:{
			allow:[searchForWorkspaceRoot(process.cwd()), "/tailwind.config.ts"]
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
