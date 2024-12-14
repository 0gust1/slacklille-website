<script lang="ts">
  import { base } from '$app/paths';
	import facebook_icon from '$lib/assets/facebook_icon.svg';
	import instagram_icon from '$lib/assets/instagram_icon.svg';
</script>

<footer>
	<div class="nav-social">
		<nav>
			<ul>
				<li><a href="{base}/festival">▶ Festival F<sup>3</sup></a></li>
				<li><a href="{base}/ressources">▶ Ressources</a></li>
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

<style lang="postcss">
	footer {
		@apply bg-gray-200 px-4 py-10;
		.nav-social {
			@apply flex items-center justify-between text-xs;
		}
		nav {
			@apply mb-5 text-2xl;
		}
		.social-links {
			@apply flex gap-2;
		}
	}
</style>
