<script lang="ts">
	import { base } from '$app/paths';
	import FacebookIcon from '$lib/components/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import EmailIcon from '$lib/components/EmailIcon.svelte';
</script>

<footer>
	<div class="nav-social">
		<nav>
			<ul>
				<li><a href="{base}/festival">▶ Festival F<sup>3</sup></a></li>
				<li><a href="{base}/ressources">▶ Ressources</a></li>
				<li>
					<a href="mailto:slacklille+contact@gmail.com">
						<EmailIcon class="inline-block size-8" />
						<span class="">Contact</span>
					</a>
				</li>
			</ul>
		</nav>
		<div class="social-links">
			<a href="https://www.facebook.com/groups/slacklille" target="_blank">
				<FacebookIcon />
			</a>
			<a href="https://www.instagram.com/slack_lille" target="_blank">
				<InstagramIcon />
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
