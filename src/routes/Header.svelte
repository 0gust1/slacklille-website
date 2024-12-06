<script lang="ts">
	import { base } from '$app/paths';
	import slacklille_logo from '$lib/assets/Logo_SlackLille.svg';
</script>

<header>
	<div class="flex">
		<img src={slacklille_logo} alt="logo SlackLille" class="-mb-1 ml-4 mt-4 w-40" />
		<h1 class="hidden text-2xl font-thin">SlackLille</h1>
		<p class="motto hidden">L'association de slackline/highline du nord de la France</p>
	</div>
	<nav>
		<ul class="flex gap-2">
			<li><a href="{base}/">Accueil</a></li>
			<li><a href="{base}/ressources">Ressources</a></li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		@apply bg-gradient-to-r from-gray-100 to-gray-500;
		@apply mb-4 flex items-end px-0 py-0;
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
</style>
