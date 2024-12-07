<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from './Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="global-container">
		<Header/>
		<main>
			{@render children()}
		</main>
		<footer>
			&copy; {new Date().getFullYear()} - SlackLille
		</footer>
	</div>
</ParaglideJS>

<style lang="postcss">
	.global-container {
		@apply p-0;
	}
	main {
		@apply mx-auto min-h-screen w-full px-6 sm:px-4 sm:w-3/4;
	}

	footer {
		@apply bg-gray-200 text-xs;
		@apply mt-4 px-4 py-2;
	}
</style>
