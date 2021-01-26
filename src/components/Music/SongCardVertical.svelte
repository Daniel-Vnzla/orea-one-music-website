<script>
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToRight } from '../../assets/anime.js';
	import { musicIcons } from '../../assets/icons.js';

	import MusicReproductor from './MusicReproductor.svelte';
	import ScreenMusicReproductor from './ScreenMusicControls.svelte';

	export let title;
	export let artists;
	export let imgUrl;
	export let previewUrl;
	export let id;
	export let currentSongPlayingId;

	let paused = true;
	let ended = false;
	
	const observerParams = {
		threshold: 0.1,
	}
	
	const lazyLoadImg = ({ target }) => target.style.opacity = 1;
	
	const handlePlaySong = () => {
		paused = !paused
	}

</script>

{#if currentSongPlayingId === id}
	<ScreenMusicReproductor 
		songTitle={title}
		bind:paused
		ended={ended}
		handlePlaySong={handlePlaySong}  />
{/if}
<div class="song-card" use:animationOnObserve={fadeToRight(observerParams)} >
	<div class="song-card-wrapper">
		<div class="img">
			<img on:load={lazyLoadImg} src={imgUrl} alt={title}>
		</div>
		<div class="song-info">
			<h3 class="song-title">{title}</h3>
			<p class="song-artists">{artists}</p>
		</div>
		<MusicReproductor 
			bind:paused
			bind:ended
			bind:currentSongPlayingId
			{id} 
			{previewUrl} 
			/>
		<div class="song-redes">
			<p class="song-redes-title">Escucha la canción completa aquí!</p>
			<div class="song-redes-list">
				{#each musicIcons as { Icon, socialUrl, title }}
					<a class="icon icon-translate" href={socialUrl} title={title} target="_blank">
						<Icon width="100%" height="100%" fill="var(--secondary-color)" />	
					</a>
				{/each}
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