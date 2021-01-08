<script context="module">
	let current;
</script>

<script>
	import Play from '../../icons/play.svg';
	import Pause from '../../icons/pause.svg';

	export let isSongLoaded = false;
	
	const src = "https://download1518.mediafire.com/dusryb0vn7fg/pgtsoxwtm88vr2w/Lilianna+Wilde+-+Grind+Me+Down+%28Jawster+Remix%29.mp3";

	let audio;
	let paused = true;
	let currentTime = 0;
	let duration;

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

	const loadedMetaData = () => isSongLoaded = true;

	function stopOthers() {
		if (current && current !== audio) current.pause();
		current = audio;
	}
	
</script>

<div class="song-reproductor">
	<button disabled={!isSongLoaded} class="play-button" on:click={() => paused = !paused}>
		{#if paused}
			<Play class="reproducotor-icon" width="100%" height="100%" fill="#fff" />
		{:else}
			<Pause class="reproducotor-icon" width="100%" height="100%" fill="#fff" />
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
		{src} 
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
		background: #2d2d2d;
		width: 100%;
		outline: none;
		z-index: 1;
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
		transform: translate(calc(-100% + var(--translateX)), calc(50% - 4px));
		z-index: 2;
		pointer-events: none;
		transition: transform var(--transition-speed);
	}

	.reproductor-progress-bar:hover .bar {
		box-shadow: 0 0 0 2px #ffeb3b36;
	}

</style>