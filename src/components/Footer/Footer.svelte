<script>
	import { onMount } from 'svelte';
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToLUpIcons, fadeToLeft, fadeToRight } from '../../assets/anime.js';

	import { allRedesIcons } from '../../assets/icons.js';	

	const observerParams = {
		threshold: 0.5,
	}

</script>

<footer class="footer">
	<div class="contacts">
		<h3 
			class="contacts-title"
			use:animationOnObserve={fadeToRight(observerParams)}
			>Interesado en trabajar con Orea One?</h3>
		<div class="contacts-info">
			<div 
				class="info-data"
				use:animationOnObserve={fadeToLeft(observerParams)}
				>
			<h5 class="info-title">CONTACTO PERSONAL</h5>
				<p>Nombre: Orea One</p>
				<p>Gmail: Trappinlifebaby@gmail.com</p>
			</div>
		</div>
		<div class="copyritght">© 2020-2021 OREA ONE</div>
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
</footer>

<style>
	.footer {
		position: relative;
		width: 100%;
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.contacts {
		padding: 2.3rem 1.3rem;
		text-align: center;
		background-color: var(--primary-color);
		color: var(--secondary-color);
		border-bottom-right-radius:60px;
	}

	.contacts-title {
		font-size: 1.7rem;
		color: #503c00;
	}

	.contacts-info {
		padding: 0 2rem;
		text-align: left;
		margin-top: 1rem;
	}

	.info-title {
		text-transform: uppercase;
		font-size: 1.2rem;
	}

	.info-data {
		font-style: italic;
	}

	.copyritght {
		margin-top: 1rem;
		font-weight: bold;
		font-size: .9rem;
	}

	.redes {
		text-align: center;
		border-bottom-right-radius: 60px;
		padding: 1.3rem;
		background: var(--bg-color-secondary);
	}

	.redes-title {
		font-size: 1.7rem;
	}

	.redes-list {
		margin-top: 1rem;
		display: flex;
	}

	.icon {
		margin: .5rem;
	}

	@media (max-width: 800px) {
		.footer {
			grid-template-columns: 1fr;
		}
/* 
		.title {
			font-size: 1.2rem;
		}

		.info-title {
			font-size: .9rem;
		}

		.info-data {
			font-size: .8rem
		}

		.copyritght {
			font-size: .7rem;
		} */
	}
</style>