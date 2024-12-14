<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import slacklille_logo from '$lib/assets/Logo_SlackLille.svg';
	import facebook_icon from '$lib/assets/facebook_icon.svg';
	import instagram_icon from '$lib/assets/instagram_icon.svg';
</script>

<header>
	<div class="flex">
		<a href="{base}/">
		<img src={slacklille_logo} alt="logo SlackLille" class="-mb-1 ml-4 mt-4 w-40" />
		</a>
		<h1 class="hidden text-2xl font-thin">SlackLille</h1>
		<p class="motto hidden">L'association de slackline/highline du nord de la France</p>
	</div>
	<nav>
		<ul class="internal-nav flex flex-1 gap-2">
			<li><a href="{base}/" class:active={$page.url.pathname === `${base}/`}>Accueil</a></li>
			<li>
				<a href="{base}/festival" class:active={$page.url.pathname === `${base}/festival`}
					>Festival&nbsp;F<sup>3</sup></a
				>
			</li>
			<li>
				<a href="{base}/ressources" class:active={$page.url.pathname === `${base}/ressources`}
					>Ressources</a
				>
			</li>
		</ul>
		<ul class="social-links">
			<li>
				<a href="https://www.facebook.com/groups/slacklille" target="_blank">
					<img class="w-12" src={facebook_icon} alt="logo facebook" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/slack_lille/" target="_blank">
					<img class="w-12" src={instagram_icon} alt="logo instagram" />
				</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		@apply bg-gradient-to-r from-gray-100 to-gray-500;
		@apply mb-8 flex items-end px-0 py-0;
		h1 {
			@apply text-4xl;
		}
		.motto {
			@apply text-sm italic;
		}
	}
	nav {
		@apply ml-2 mt-1 flex justify-start items-end w-full;
		ul {
			@apply flex gap-2;
		}
		.internal-nav {
			@apply grow;
		}
		.social-links {
			@apply ml-auto mr-4;
		}
		a {
			@apply px-2 py-0.5;
		}
		a.active {
			@apply bg-white;
		}
	}
</style>
