<script>
	import Youtube from '../icons/redes/youtube-with-circle.svg';
	import Facebook from '../icons/redes/facebook-with-circle.svg';
	import Instagram from '../icons/redes/instagram-with-circle.svg';
	import Spotify from '../icons/redes/spotify.svg';
	import Twitter from '../icons/redes/twitter-with-circle.svg';
</script>

<section class="redes">
	<h3 class="title">Sigue a Orea One en sus redes para conocer más de el!</h3>
	<div class="redes-icons-list">
		<a href="/" title="Youtube"><Youtube width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="Facebook"><Facebook width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="Instagram"><Instagram width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="Spotify"><Spotify width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="Twitter"><Twitter width="100%" height="100%" fill="var(--secondary-color)" /></a>
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


	@media (max-width: 1024px) {
		.redes {
			padding: 1.4rem;
			padding-bottom: 6rem;
		}
	}

</style>