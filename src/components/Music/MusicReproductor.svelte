<script context="module">
	let current;
</script>

<script>
	import Play from '../../icons/play.svg';
	import Pause from '../../icons/pause.svg';

	import ScreenMusicReproductor from './ScreenMusicControls.svelte';

	export let previewUrl;
	export let title;
	export let id;
	export let currentSongPlayingId;

	let audio = null;
	let paused = true;
	let isSongLoaded = false;
	let currentTime = 0;
	let duration = null;


	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

	const loadedMetaData = () => isSongLoaded = true;

	function stopOthers() {
		if (current && current !== audio) {
			current.pause()
		}
		current = audio;
	}

	const handlePlaySong = () => {
		paused = !paused
	}
	
	const handleScreenSongPlay = () => currentSongPlayingId = id;
	
</script>

{#if currentSongPlayingId === id}
	<ScreenMusicReproductor 
		songTitle={title} 
		bind:paused 
		isSongLoaded={isSongLoaded}
		handlePlaySong={handlePlaySong}  />
{/if}
<div class="song-reproductor">
	<button 
		disabled={!isSongLoaded} 
		class="play-button" 
		on:click={handlePlaySong}
		on:click={handleScreenSongPlay}
		>
		{#if paused}
			<Play class="reproductor-icon svg-icon" width="100%" height="100%" fill="#fff" />
		{:else}
			<Pause class="reproductor-icon svg-icon" width="100%" height="100%" fill="#fff" />
		{/if}
	</button>
	<div class="reproductor-song">
		<div class="reproductor-timestamp">
			<span class="reproductor-time-start">{format(currentTime)}</span>
			<span class="reproductor-time-end">{format(duration)}</span>
		</div>
		<div class="reproductor-progress-bar">
			<div class="bar" style="--translateX: {(currentTime / duration) * 100}%"></div>
		<input type="range" bind:value={currentTime} min="0" max={duration} step="1"/>
	</div>
	</div>
	<audio 
		on:loadedmetadata={loadedMetaData}
		on:play={stopOthers}
		bind:paused 
		bind:currentTime 
		bind:duration
		bind:this={audio}
		src={previewUrl} 
		>
			<track kind="captions">
	</audio>
</div>

<style>
	audio {
		display: none;
	}

	.song-reproductor {
		margin: 1.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.song-reproductor button {
		background: none;
	}

	.play-button {
		width: 32%;
	}

	.reproductor-song {
		width: 100%;
	}

	.reproductor-timestamp {
		display: flex;
		justify-content: space-between;
		font-size: .9rem;
		font-weight: bold;
	}

	.reproductor-progress-bar {
		position: relative;
		overflow: hidden;
		cursor: pointer;
		padding-bottom: .5rem;
	}

	input[type="range"] {
		margin: 0;
		padding: 0;
		position: relative;
		--width: 10%;
		appearance: none;
		-webkit-appearance: none;
		height: 3px;
		border: none;
		background: var(--bg-color-secondary);
		width: 100%;
		outline: none;
		z-index: 1;
		cursor: pointer;
	}

	input[type=range]::-webkit-slider-thumb {
		margin: 0;
		padding: 0;
		appearance: none;
  	-webkit-appearance: none;
		background: transparent;
		width: 1px;
		height: 12px;
		border-radius: 20px;
	}
	
	.bar {
		--translateX: -100%;
		border-radius: 20px;
		position: absolute;
		top: 50%;
		left: 0;
		background: var(--primary-color);
		width: 100%;
		height: 9px;
		transform: translate(calc(-100% + var(--translateX)), calc(50% - .6rem));
		z-index: 2;
		pointer-events: none;
		transition: transform var(--transition-speed);
	}

	.reproductor-progress-bar:hover .bar {
		box-shadow: 0 0 10px 2px var(--primary-shadow-color);
	}

</style>