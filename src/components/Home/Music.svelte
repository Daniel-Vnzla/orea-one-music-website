<script>
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToRight, fadeToLeft } from '../../assets/anime.js';

	import RightArrow from '../../icons/arrow-right.svg';
	import SongCard2 from '../Music/SongCard2.svelte';

	export let songs;

	let currentSongPlayingId = null;

	const observerParams = {
		threshold: 0.5,
	}
	
</script>

<section class="music">
	<h2 class="title" use:animationOnObserve={fadeToRight(observerParams)}>Ultimas canciones</h2>
	<h4 class="legend" use:animationOnObserve={fadeToLeft(observerParams)}>Ecucha lo ultimo de orea one</h4>

	<a class="ver-mas-btn" href="/music" title="Ver todas las canciones de orea one">
		Todas las canciones
		<div class="ver-mas-icon">
			<RightArrow width="100%" height="100%" fill="var(--primary-color)" />
		</div>
	</a>
	<div class="music-list">
		{#each songs as song, index}
			<SongCard2 {...song} bind:currentSongPlayingId />
		{/each}
	</div>
</section>

<style>
	.music {
		text-align: center;
		min-height: 100vh;
		padding-top: 5rem;
		padding: 2rem;
	}

	.title {
		margin-top: 4rem;
		line-height: 4rem;
	}

	.legend {
		font-size: 1.7rem;
		color: #ccc;
	}

	.ver-mas-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		padding: .6rem 2rem;
		position: relative;
		font-size: 1.3rem;
		margin: 0 auto;
		margin-top: 3.5rem;
		margin-bottom: 1.5rem;
		width: fit-content;
		color: var(--text-color);
	}

	.ver-mas-btn::before {
		position: absolute;
		content: "";
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 2px;
		border-radius: 4px;
		background-color: var(--primary-color);
		transition: transform var(--transition-speed);
	}

	.ver-mas-icon {
		margin-left: .5rem;
		width: 2rem;
		height: 2rem;
		transition: transform var(--transition-speed);
	}

	.music-list {
		width: 90%;
		margin: 0 auto;
		display: grid;
		justify-content: center;
		align-items: center;
		grid-gap: 2rem;
		max-width: 1100px;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	}

	.ver-mas-btn:hover::before {
		transform: scaleX(0.3);
	}

	.ver-mas-btn:hover .ver-mas-icon {
		transform: translateX(5px);
	}



</style>