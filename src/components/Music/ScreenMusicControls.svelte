<script>
	import { scale } from 'svelte/transition';
	import Play from '../../icons/play.svg';
	import Pause from '../../icons/pause.svg';

	export let handlePlaySong;
	export let paused;
	export let songTitle;

</script>

<div class="screen-reproductor" transition:scale >
	<div class="screen--reproductor-song-title">{songTitle}</div>
	<button class="play-button" on:click={handlePlaySong}>
		{#if paused}
			<div class="screen-icon" transition:scale >
				<Play  width="100%" height="100%" fill="var(--secondary-color)" />	
			</div>
		{:else}
			<div class="screen-icon" transition:scale >
				<Pause  width="100%" height="100%" fill="var(--secondary-color)" />	
			</div>
		{/if}
	</button>
</div>

<style>
	.screen-reproductor {
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 5rem;
		right: 10px;
		color: var(--secondary-color);
		z-index: 100;
	}

	.screen-reproductor::before {
		position: absolute;
		content: "";
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		background-color: rgb(255 235 59 / 30%);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid var(--primary-color);
		animation: pulse 30s linear infinite;
	}

	button {
		position: relative;
		width: 80px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--primary-color);
		border-radius: 50%;
		box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);
	}

	.screen--reproductor-song-title {
		position: absolute;
		right: 90px;
		top: 50%;
		background-color: var(--primary-color);
		border-radius: 4px;
		padding: .5rem 1rem;
		font-weight: bold;
		height: fit-content;
		white-space: nowrap;
		opacity: 0;
		transform: translateX(-30px) translateY(-50%);
		box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);
		transition: 
			transform var(--transition-speed),
			opacity var(--transition-speed);
	}

	.screen-icon {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.screen-reproductor:hover .screen--reproductor-song-title {
		transform: translateX(0) translateY(-50%);
		opacity: 1;
	}

	@keyframes pulse {
		0% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
		5% {
			transform: translate(-50%, -50%)  scale(1.5);
			opacity: 0;
		}
		100% {
			transform: translate(-50%, -50%)  scale(1.5);
			opacity: 0;
		}
	}

</style>