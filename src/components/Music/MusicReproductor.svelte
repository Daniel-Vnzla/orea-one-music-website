<script>
	import Play from '../../icons/play.svg';
	import Pause from '../../icons/pause.svg';
	
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
</script>

<div class="song-reproductor">
	<button class="play-button" on:click={() => paused = !paused}>
		{#if paused}
			<Play width="100%" height="100%" fill="#fff" />
		{:else}
			<Pause width="100%" height="100%" fill="#fff" />
		{/if}
	</button>
	<div class="reproductor-song">
		<div class="reproductor-timestamp">
			<span class="reproductor-time-start">{format(currentTime)}</span>
			<span class="reproductor-time-end">{format(duration)}</span>
		</div>
		<div class="reproductor-progress-bar">
			<div class="bar" style="width: {(currentTime / duration) * 100}%"></div>
		<input style="--width: {70}%" type="range" bind:value={currentTime} min="0" max={duration} step="1"/>
	</div>
	</div>
	<audio {src} controls {audio} bind:paused bind:currentTime bind:duration >
		<track kind="captions">
	</audio>
</div>

<style>
	audio {
		display: none;
	}

	.song-reproductor {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.song-reproductor button {
		background: none;
	}

	.play-button {
		width: 30%;
	}

	.reproductor-song {
		width: 100%;
	}

	.reproductor-timestamp {
		display: flex;
		justify-content: space-between;
	}

	input[type="range"] {
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
		appearance: none;
  	-webkit-appearance: none;
		background: transparent;
		width: 1px;
		height: 12px;
		border-radius: 20px;
	}

	.song-reproductor {
		width: 100%;
	}

	.reproductor-progress-bar {
		position: relative
	}
	
	.bar {
		border-radius: 20px;
		position: absolute;
		top: 50%;
		left: 0;
		background: var(--primary-color);
		width: 0;
		height: 9px;
		transform: translateY(calc(50% - 4px));
		z-index: 2;
		pointer-events: none;
	}
</style>