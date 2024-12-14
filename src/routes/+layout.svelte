<script lang="ts">
	import { i18n } from '$lib/i18n';
	import '@typehaus/metropolis';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="global-container">
		<Header />
		<main>
			{@render children()}
		</main>
		<Footer />
	</div>
</ParaglideJS>

<style lang="postcss">
	.global-container {
		/* @apply p-0; */
	}
	main {
		/* @apply py-10 bg-slackgreen-200; */
	}
</style>
