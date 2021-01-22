<script>
	import anime from 'animejs';

	import Youtube from '../../icons/redes/spotify.svg';
	import Spotify from '../../icons/redes/youtube-with-circle.svg';
	import ITunes from '../../icons/redes/itunes.svg';

	import MusicReproductor from './MusicReproductor.svelte';

	export let title;
	export let artists;
	export let imgUrl;
	export let previewUrl;
	export let id;
	export let currentSongPlayingId;
	
	const lazyLoadImg = ({ target }) => target.style.opacity = 1;

	
</script>

<div class="song-card" >
	<div class="song-card-wrapper">
		<div class="img">
			<img on:load={lazyLoadImg} src={imgUrl} alt={title}>
		</div>
		<div class="song-info">
			<h3 class="song-title">{title}</h3>
			<p class="song-artists">{artists}</p>
		</div>
		<MusicReproductor 
			bind:currentSongPlayingId
			{id} 
			{previewUrl} 
			{title} />
		<div class="song-redes">
			<p class="song-redes-title">Escucha la cancion completa aqui!</p>
			<div class="song-redes-list">
				<a href="/" title="Youtube">
					<Youtube width="100%" height="100%" fill="var(--secondary-color)" />
				</a>
				<a href="/" title="Spotify">
					<Spotify width="100%" height="100%" fill="var(--secondary-color)" />
				</a>
				<a href="/" title="iTunes">
					<ITunes width="100%" height="100%" fill="var(--secondary-color)" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.song-card {
		background: var(--bg-color);
		border-radius: 4px;
		height: 100%;
		overflow: hidden;
	}

	.song-card-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-between;
		padding: 1.4rem;
		height: 100%;
	}

	.img {
		width: 60%;
		border-radius: 50%;
		background: var(--bg-color-secondary);
		overflow: hidden;
		min-height: 150px;
	}

	.img img {
		height: 100%;
		opacity: 0;
		transition: opacity var(--transition-speed);
	}

	.song-title {
		margin-top: .5rem;
		font-size: 2rem;
	}

	.song-artists {
		font-size: .8rem;
		color: #ccc;
	}

	.song-redes {
		margin: 0 -1.4rem;
		margin-bottom: -1.4rem;
		padding: 0 .5rem;
		text-align: center;
		background: var(--primary-color);
	}

	.song-redes-title {
		font-weight: bold;
		font-size: 1rem;
		margin: .5rem 0;
		color: var(--secondary-color);
	}


	.song-redes-list {
		padding: .7rem;
		height: 56px;
		display: flex;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}

</style>