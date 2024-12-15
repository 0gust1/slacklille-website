<script lang="ts">
	import { base } from '$app/paths';
	import FacebookIcon from '$lib/components/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import EmailIcon from '$lib/components/EmailIcon.svelte';
	import slacklille_logo from '$lib/assets/Logo_SlackLille.svg';
</script>

<footer>
	<div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
		<div
			class="grid auto-cols-max grid-flow-col place-content-start gap-5 border-t border-gray-900/10 pt-12 xl:gap-8"
		>
			<div class="">
				<img class=" w-40 pr-4" src={slacklille_logo} alt="SlackLille" />
			</div>
			<div class="grow-0">
				<a class="text-sm/6 font-semibold text-gray-950" href="{base}/"> SlackLille </a>
				<ul role="list" class="mt-4 space-y-3">
					<li>
						<a href="{base}/festival" class="text-sm/6 text-gray-600 hover:text-gray-900"
							>Festival F<sup>3</sup></a
						>
					</li>
					<li>
						<a href="{base}/ressources" class="text-sm/6 text-gray-600 hover:text-gray-900"
							>Ressources</a
						>
					</li>
					<li>
						<a href="{base}/identity" class="text-sm/6 text-gray-600 hover:text-gray-900"
							>Identité Graphique</a
						>
					</li>
				</ul>
			</div>
			<div class="grow-0">
				<a href="mailto:slacklille+contact@gmail.com">
					<span class="text-sm font-semibold">Contact</span>
					<EmailIcon class="mt-4 size-8" />
				</a>
			</div>
		</div>
		<div class="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
			<div class="flex gap-x-6 md:order-2">
				<a
					href="https://www.facebook.com/groups/slacklille"
					class="text-gray-600 hover:text-gray-800"
				>
					<FacebookIcon class="size-10" />
				</a>
				<a href="https://www.instagram.com/slack_lille/" class="text-gray-600 hover:text-gray-800">
					<InstagramIcon class="size-10" />
				</a>
			</div>
			<p class="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
				&copy; {new Date().getFullYear()} SlackLille
			</p>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply bg-slackblue-100;

		a[href^='http'],
		a[href^='mailto'], 
		a[href^='/'] {
			&:hover {
				@apply text-slackpink-600;
			}
		}
	}
</style>
