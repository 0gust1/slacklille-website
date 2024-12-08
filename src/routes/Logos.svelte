<script lang="ts">
	import logoLeQuesnoy from '$lib/assets/le_quesnoy_logo.jpg';
	import logoLille from '$lib/assets/logo_lille.svg';
	import logoLille3000 from '$lib/assets/logo_lille3000.svg';
	import logoParisSlack from '$lib/assets/logo_parislack.png';
	import logoBDBounce from '$lib/assets/logo_bdbounce.jpg';
	import logoBeSlack from '$lib/assets/logo_beslack.png';
	import logoLSDO from '$lib/assets/logo_lsdo.png';
</script>

<div class="not-prose">
	<div class="logos instit">
		<figure>
			<a href="http://www.lequesnoy.fr/" target="_blank">
				<img src={logoLeQuesnoy} class="w-96" alt="Logo de la ville de Le Quesnoy" />
			</a>
			<figcaption>Ville de Le Quesnoy</figcaption>
		</figure>

		<figure>
			<a href="https://www.lille.fr" target="_blank">
				<img src={logoLille} class="w-32" alt="Logo de la ville de Lille" />
			</a>
			<figcaption>Ville de Lille</figcaption>
		</figure>
		<figure class="">
			<a href="https://lille3000.com" target="_blank">
				<img src={logoLille3000} class="w-72" alt="Logo de Lille3000" />
			</a>
			<figcaption>Lille3000</figcaption>
		</figure>
	</div>

	<div class="logos assos">
		<figure>
			<a href="https://parislack.fr" target="_blank">
				<img src={logoParisSlack} class="w-64" alt="Logo de l'association Parislack" />
			</a>
			<figcaption>Parislack</figcaption>
		</figure>
		<figure>
			<a href="https://beslack.be/fr" target="_blank">
				<img src={logoBeSlack} alt="Logo de l'association BeSlack" />
			</a>
			<figcaption>BeSlack</figcaption>
		</figure>
		<figure>
			<a href="https://www.facebook.com/SlackBDBounce" target="_blank">
				<img src={logoBDBounce} class="w-44" alt="Logo de l'association BDBounce" />
			</a>
			<figcaption>BDBounce</figcaption>
		</figure>
		<figure>
			<a href="https://www.facebook.com/LSDO.officiel/" target="_blank">
				<img src={logoLSDO} class="w-44" alt="Logo de l'association Les sanglés De l'Ouest" />
			</a>
			<figcaption>Les Sanglés De l'Ouest</figcaption>
		</figure>
	</div>
</div>

<style lang="postcss">
	.logos {
		@apply mb-8 flex flex-wrap gap-4 leading-none;
	}
	figure {
		@apply flex flex-col items-center justify-center;
		@apply p-2;
		&:hover {
		}
		figcaption {
			@apply hidden;
		}
	}
	img {
	}
	.instit img {
	}
	.assos img {
		@apply min-w-24 max-w-96;
	}
</style>
