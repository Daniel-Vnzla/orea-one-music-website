<script context="module">
	let current;
</script>

<script>
	import { scale } from 'svelte/transition';

	import Play from '../../icons/play.svg';
	import Pause from '../../icons/pause.svg';
	import Replay from '../../icons/replay.svg';

	export let previewUrl;
	export let currentSongPlayingId;
	export let id; 
	export let paused = true;
	export let ended = false;

	let audio = null;
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

	const setCurrentSongId = () => currentSongPlayingId = id;
	
</script>

<div class="song-reproductor">
	<button 
		disabled={!isSongLoaded} 
		class="play-button" 
		on:click={handlePlaySong}
		on:click={setCurrentSongId}
		>
		{#if ended }
			<div title="Replay" class="song-icon" transition:scale >
				<Replay class="reproductor-icon " width="100%" height="100%" fill="#fff" />
			</div>
		{:else if paused}
			<div title="Play" class="song-icon" transition:scale >
				<Play class="reproductor-icon " width="100%" height="100%" fill="#fff" />
			</div>
		{:else}
			<div title="Pause" class="song-icon" transition:scale >
				<Pause class="reproductor-icon " width="100%" height="100%" fill="#fff" />
			</div>
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
		bind:ended
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
		width: 100%;
		margin: 1.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.song-reproductor button {
		background: none;
	}

	.play-button {
		position: relative;
		width: 7rem;
		height: 7rem;
	}

	.song-icon {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.reproductor-song {
		width: 100%;
	}

	.reproductor-timestamp {
		width: 100%;
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
		height: 5px;
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
  	border: none;
		background: none;
		width: 1px;
		height: 12px;
		border-radius: 20px;
	}

	input[type=range]::-moz-range-thumb {
		border: none;
		background: none;
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