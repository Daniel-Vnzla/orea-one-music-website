<script>
	import { animationOnObserve } from '../assets/actions.js';
	import { fadeToRight, fadeToLeft, fadeToLUpIcons } from '../assets/anime.js';

	import { allRedesIcons } from '../assets/icons.js';

	import ContactCard from '../components/Contact/ContactCard.svelte';

	const observerParams = {
		threshold: 0.5,
	}
</script>

<section class="contact">
	<div class="contact-wrapper">
		<h2 class="contact-title">Contacto (Trabajo)</h2>
		<div class="contacts">
			<h3 
				class="contacts-title"
				use:animationOnObserve={fadeToRight(observerParams)}
				>¿Interesado en trabajar con Orea One?</h3>
			<div class="contacts-info">
				<div 
					class="info-data"
					use:animationOnObserve={fadeToLeft(observerParams)}
					>
				<h5 class="info-title">CONTACTO PERSONAL</h5>
					<p>Orea One</p>
					<p>Trappinlifebaby@gmail.com</p>
				</div>
			</div>
		</div>
		<div class="redes">
			<h3 class="redes-title" use:animationOnObserve={fadeToLeft(observerParams)}>Redes sociales y música</h3>
			<div class="redes-list" use:animationOnObserve={fadeToLUpIcons(observerParams)}>
				{#each allRedesIcons as { Icon, socialUrl, title }}
					<a class="icon anime-icon icon-translate" href={socialUrl} title={title} target="_blank">
						<Icon width="100%" height="100%" fill="#fff" />	
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		position: relative;
		min-height: 100vh;
	}

	.contact-wrapper {
		padding: 5rem 0;
		text-align: center;
	}

	.contact-title {
		margin-bottom: 1.5rem;
	}

	.contacts {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		padding: 2rem;
		width: fit-content;
		margin: 0 auto;
		border-radius: 5px;
	}

	.info-data {
		margin-top: 1rem;
	}

	.info-title {
		font-size: 1.4rem;
	}

	.redes {
		padding: 2rem;
		margin-top: 1rem;
	}

	.redes-title {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}

	.redes-list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: .6rem;
	}



</style>