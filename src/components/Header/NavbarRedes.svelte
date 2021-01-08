<script>
	import Youtube from '../../icons/redes/youtube-with-circle.svg';
	import Facebook from '../../icons/redes/facebook-with-circle.svg';
	import Instagram from '../../icons/redes/instagram-with-circle.svg';
	import Spotify from '../../icons/redes/spotify.svg';
	import Twitter from '../../icons/redes/twitter-with-circle.svg';

	export let activeNavbar = true;
</script>

<section class="redes" class:redesShrink={!activeNavbar} >
	{#if activeNavbar}
		<h4 class="title">Redes Sociales</h4>
	{/if}
	<div class="redes-icons-list" class:iconShrink={!activeNavbar}>
		<a 
			href="/" 
			title="Youtube"
			target="_blank"
			><Youtube width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a 
			href="/" 
			title="Facebook"
			target="_blank"
			><Facebook width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a 
			href="/" 
			title="Instagram"
			target="_blank"
			><Instagram width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a 
			href="/" 
			title="Spotify"
			target="_blank"
			><Spotify width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a 
			href="/" 
			title="Twitter"
			target="_blank"
			><Twitter width="100%" height="100%" fill="var(--secondary-color)" /></a>
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
			display: none
		}
	}
	
</style>