<script lang="ts">
	import { i18n } from '$lib/i18n';
	import '@typehaus/metropolis';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Header from './Header.svelte';
	import facebook_icon from '$lib/assets/facebook_icon.svg';
	import instagram_icon from '$lib/assets/instagram_icon.svg';
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
			<div>
				<a href="https://www.facebook.com/groups/slacklille" target="_blank">
					<img class="w-12" src="{facebook_icon}" alt="logo facebook" />
				</a>
				<a href="https://www.instagram.com/slack_lille" target="_blank">
					<img class="w-12" src="{instagram_icon}" alt="logo instagram" />
				</a>
			</div>
			&copy; {new Date().getFullYear()} - SlackLille
		</footer>
	</div>
</ParaglideJS>

<style lang="postcss">
	.global-container {
		/* @apply p-0; */
	}
	main {
		/* @apply py-10 bg-slackgreen-200; */
	}


	footer {
		@apply bg-gray-200 text-xs;
		@apply px-4 py-2;
	}
</style>
