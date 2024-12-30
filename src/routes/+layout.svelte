<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { updated } from '$app/state';
	import { i18n } from '$lib/i18n';
	import '@typehaus/metropolis';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import Svader from '$lib/components/Svader.svelte';
	import { getAllezLaaaa } from '$lib/uiState.svelte';

	let { children } = $props();

	beforeNavigate(({ willUnload, to }) => {
		if (updated.current && !willUnload && to?.url) {
			location.href = to.url.href;
		}
	});

	const allez_laaaa = getAllezLaaaa();
</script>

<ParaglideJS {i18n}>
	<div class="global-container">
		{#if allez_laaaa.allez_state}
			<div class="fixed left-0 top-0 -z-10 h-dvh w-full">
				<Svader />
			</div>
		{/if}
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
		/* @apply bg-slackgreen-200; */
	}
</style>
