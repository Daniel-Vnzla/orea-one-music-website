<script>
	import { allIcons } from '../assets/icons.js';	
</script>

<section class="redes">
	<h3 class="title">Sigue a Orea One en sus redes para conocer más de el!</h3>
	<div class="redes-icons-list">
		{#each allRedesIcons as { Icon, socialUrl, title }}
			<a class="navbar-icon icon-translate" href={socialUrl} title={title} target="_blank">
				<Icon width="100%" height="100%" fill="var(--secondary-color)" />	
			</a>
		{/each}
	</div>
</section>

<style>
	.redes {
		padding: 1.4rem;
		background: var(--primary-color);
	}

	.title {
		color: var(--secondary-color);
		text-align: center;
		font-size: 1.6rem;
		margin-bottom: .5rem;
	}

	.redes-icons-list {
		padding: .5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		max-width: 300px;
		margin: 0 auto;
	}

	.redes-icons-list a {
		display: block;
		margin: 0 .4rem;
	}



</style>