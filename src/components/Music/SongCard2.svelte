<script>
	import Youtube from '../../icons/redes/spotify.svg';
	import Spotify from '../../icons/redes/youtube-with-circle.svg';
	import ITunes from '../../icons/redes/itunes.svg';

	import MusicReproductor from './MusicReproductor.svelte';
	
	const lazyLoadImg = ({ target }) => target.style.opacity = 1; 
</script>

<div class="song-card">
	<div class="song-card-wrapper">
		<div class="img">
			<img on:load={lazyLoadImg} src="/images/explicit.jpg" alt="explicale">
		</div>
		<div class="song-info">
			<h3 class="song-title">Explicale</h3>
			<p class="song-author">Orea One ft. Sharly la voz</p>
		</div>
		<MusicReproductor />
	</div>
	<div class="song-redes">
		<a href="/" title="Youtube">
			<Youtube width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="Spotify">
			<Spotify width="100%" height="100%" fill="var(--secondary-color)" /></a>
		<a href="/" title="iTunes">
			<ITunes width="100%" height="100%" fill="var(--secondary-color)" /></a>
	</div>
</div>

<style>
	.song-card {
		background: #333;
		border-radius: 4px;
	}

	.song-card-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1.4rem;
	}

	.img {
		width: 60%;
		border-radius: 50%;
		background: #000;
		overflow: hidden;
	}

	.img img {
		height: 100%;
		opacity: 0;
		transition: opacity var(--transition-speed);
	}

	.song-title {
		font-size: 2.2rem;
	}

	.song-author {
		font-size: .9rem;
		color: #ccc;
	}

	.song-redes {
		padding: .7rem;
		height: 56px;
		display: flex;
		background: var(--primary-color);
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}

</style>