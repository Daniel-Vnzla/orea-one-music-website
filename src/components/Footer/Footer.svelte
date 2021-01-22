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
			>Discografía (contactos)</h3>
		<div class="contacts-info">
			<div 
				class="info-data"
				use:animationOnObserve={fadeToRight(observerParams)}
				>
			<h5 class="info-title">MANAGER PERSONAL</h5>
				<p>Guy Dayan</p>
				<p>guy@thegoola.com</p>
				<p>+972 522 509 749</p>
			</div>
			<div 
				class="info-data"
				use:animationOnObserve={fadeToLeft(observerParams)}
				>
			<h5 class="info-title">CONTACTO PERSONAL</h5>
				<p>Orea One</p>
				<p>oreaone@gmail.com</p>
				<p>+972 522 509 749</p>
			</div>
		</div>
		<div class="copyritght">© 2020-2021 OREA ONE</div>
	</div>
	<div class="redes">
		<h3 class="title" use:animationOnObserve={fadeToLeft(observerParams)}>Redes sociales y música</h3>
		<div class="redes-list" use:animationOnObserve={fadeToLUpIcons(observerParams)}>
			{#each allRedesIcons as { Icon, socialUrl, title }}
				<a class="icon anime-icon" href={socialUrl} title={title} target="_blank">
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
		color: #503c00;
	}

	.contacts-info {
		text-align: left;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.info-title {
		text-transform: uppercase;
		font-size: 1.3rem;
	}

	.info-data {
		font-style: italic;
	}

	.copyritght {
		margin-top: 1rem;
		font-weight: bold;
	}

	.redes {
		text-align: center;
		border-bottom-right-radius: 60px;
		padding: 1.3rem;
		background: var(--bg-color-secondary);
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
		}
	}
</style>