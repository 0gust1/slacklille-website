<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import FacebookIcon from '$lib/components/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import EmailIcon from '$lib/components/EmailIcon.svelte';
	import slacklille_logo from '$lib/assets/Logo_SlackLille.svg';

	let menuOpen = $state(false);
</script>

<header>
  <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 md:px-8" aria-label="Global">
    <div class="flex items-end gap-x-12">
      <a href="{base}/" class="-m-1.5 p-1.5">
        <span class="sr-only">SlackLille</span>
        <img src={slacklille_logo} alt="logo SlackLille" class="w-40 -mb-1" />
      </a>
			<ul class="internal-nav hidden md:flex md:gap-x-12">
				<li>
					<a href="{base}/" class:active={$page.url.pathname === `${base}/`} class="text-sm/6 font-semibold text-gray-900">Accueil</a></li>
				<li>
					<a href="{base}/festival" class:active={$page.url.pathname === `${base}/festival`} class="text-sm/6 font-semibold text-gray-900"
						>Festival&nbsp;F<sup>3</sup></a
					>
				</li>
				<li>
					<a href="{base}/ressources" class:active={$page.url.pathname === `${base}/ressources`} class="text-sm/6 font-semibold text-gray-900"
						>Ressources</a
					>
				</li>
			</ul>
    </div>
    <div class="flex md:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onclick={() => menuOpen = !menuOpen}>
        <span class="sr-only">Open main menu</span>
        <svg class="size-8" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden md:flex self-end items-end mb-2">
      <ul class="social-links">
				<li>
					<a href="mailto:slacklille+contact@gmail.com">
						<EmailIcon class="size-8" />
						<span class='sr-only'>Contact</span>
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/groups/slacklille" target="_blank">
						<FacebookIcon class=" size-8" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/slack_lille/" target="_blank">
						<InstagramIcon class=" size-8" />
					</a>
				</li>
			</ul>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
	{#if menuOpen}
  <div class="md:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
				<a href="{base}/" class="-m-1.5 p-1.5">
					<span class="sr-only">SlackLille</span>
					<img src={slacklille_logo} alt="logo SlackLille" class=" w-32 -mb-1" />
				</a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" onclick={()=>menuOpen = false}>
          <span class="sr-only">Close menu</span>
          <svg class="size-8" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
					<ul class="space-y-2 py-6">
						<li>
							<a href="{base}/" class:active={$page.url.pathname === `${base}/`} class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onclick={()=>{menuOpen=!menuOpen}}>Accueil</a></li>
						<li>
							<a href="{base}/festival" class:active={$page.url.pathname === `${base}/festival`} class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onclick={()=>{menuOpen=!menuOpen}}
								>Festival&nbsp;F<sup>3</sup></a
							>
						</li>
						<li>
							<a href="{base}/ressources" class:active={$page.url.pathname === `${base}/ressources`} class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onclick={()=>{menuOpen=!menuOpen}}
								>Ressources</a
							>
						</li>
					</ul>
          <div class="py-6">
						<ul class="social-links">
							<li>
								<a href="mailto:slacklille+contact@gmail.com">
									<EmailIcon class="size-10" />
									<span class='sr-only'>Contact</span>
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/groups/slacklille" target="_blank">
									<FacebookIcon class=" size-10" />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/slack_lille/" target="_blank">
									<InstagramIcon class=" size-10" />
								</a>
							</li>
							
						</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
	{/if}
</header>


<style lang="postcss">
	header {
		@apply bg-gradient-to-r from-gray-100 to-gray-500 shadow-sm;

		.social-links {
			@apply flex gap-4 items-end;
		}
	}

</style>
