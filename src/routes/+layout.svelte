<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="global-container">
		<header>
			<h1 class="text-2xl font-thin">SlackLille</h1>
			<p class="motto">L'association de slackline/highline du nord de la France</p>
			<nav>
				<ul class="flex gap-2">
					<li><a href="/">Accueil</a></li>
					<li><a href="/ressources">Ressources</a></li>
				</ul>
			</nav>
		</header>
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
		header {
			@apply bg-gradient-to-r from-gray-100 to-gray-500;
			@apply px-4 py-2;
			h1 {
				@apply text-4xl;
			}
			.motto {
				@apply text-sm italic;
			}
		}
		nav {
			@apply mt-1;
			ul {
				@apply flex gap-2;
			}
		}
	}
	main {
		@apply min-h-screen px-4;

		@apply prose;
	}

	footer {
		@apply bg-gray-200 text-xs;
		@apply px-4 py-2;
	}
</style>
