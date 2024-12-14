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
		<Header />
		<main>
			{@render children()}
		</main>
		<footer>
			<div class="nav-social">
				<nav>
					<ul>
						<li><a href="festival">▶ Festival F<sup>3</sup></a></li>
						<li><a href="ressources">▶ Ressources</a></li>
						<li><a href="mailto:slacklille+contact@gmail.com">✉️ Contact</a></li>
					</ul>
				</nav>
				<div class="social-links">
					<a href="https://www.facebook.com/groups/slacklille" target="_blank">
						<img class="w-12" src={facebook_icon} alt="logo facebook" />
					</a>
					<a href="https://www.instagram.com/slack_lille" target="_blank">
						<img class="w-12" src={instagram_icon} alt="logo instagram" />
					</a>
				</div>
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
		@apply py-10 bg-gray-200 px-4;
		.nav-social{
			@apply flex items-center justify-between  text-xs;
		}
		nav {
			@apply mb-5 text-2xl;
		}
		.social-links {
			@apply flex gap-2;
		}
	}
</style>
