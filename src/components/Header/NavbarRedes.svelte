<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { allRedesIcons } from '../../assets/icons.js';

	export let activeNavbar = false;

	onMount(() => {
		anime({
			targets: ".redes-icons-list .navbar-icon",
		  translateY: [-50, 0],
		  opacity: [0, 1],
		  delay: anime.stagger(100, { easing: 'easeOutQuad' }),
		})
	})
</script>

<section class="redes" class:redesShrink={!activeNavbar} >
	{#if activeNavbar}
		<h4 class="title">Redes Sociales</h4>
	{/if}
	<div class="redes-icons-list" class:iconShrink={!activeNavbar}>
		{#each allRedesIcons as { Icon, socialUrl, title }}
			<a class="navbar-icon icon-transition" href={socialUrl} title={title} target="_blank">
				<Icon width="100%" height="100%" fill="var(--secondary-color)" />	
			</a>
		{/each}
	</div>
</section>

<style>

	.redes {
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: flex-end;
		margin-top: auto;
		background-image: linear-gradient(to top right, var(--primary-color) 50%, transparent 0);
		width: 17rem;
		height: 17rem;
		padding-bottom: 1rem;
		border-right: 1px solid var(--bg-color);
		transition: 
		  width var(--transition-speed),
		  height var(--transition-speed);
	}

	.title {
		font-size: 1.1rem;
		color: var(--secondary-color);
		margin-bottom: .5rem;
	}

	.redes-icons-list {
		display: flex;
		max-width: 13rem ;
		margin-bottom: .5rem;
	}

	.redes-icons-list a {
		margin: 0 0.2rem;
	}

	.redesShrink {
		width: 100%;
		height: 100%;
		background-color: var(--primary-color);
	}

	.iconShrink {
		flex-direction: column;
	}

	.iconShrink a {
		width: 2.3rem;
	}

	@media (max-width: 1060px) {
		.redes {
			display: none;
		}
	}
	
</style>