<script>
	import anime from 'animejs';
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { fetchSpotifySongs, getSpotifyAuthToken } from '../api/spotify.js';
	import { infiniteScrolling } from '../assets/actions.js';

	import Footer from '../components/Footer/Footer.svelte';

	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import SongCardVertical from '../components/Music/SongCardVertical.svelte';
	import Loading from '../commun/Loading.svelte';
	import Error from '../commun/Error.svelte';

	let isLoadingSongs = false;
	let currentSongPlayingId = null;

	let songsData = {
		songs: [],
		nextPage: null
	};

	let handleError = {
		name: "",
		message: ""
	}

	onMount(async () => {
		isLoadingSongs = true;
		try{
			const spoitifyToken = await getSpotifyAuthToken();
			songsData = await fetchSpotifySongs(spoitifyToken, null);
			isLoadingSongs = false;
			await tick();
			anime.timeline({
				duration: 600,
				easing: "easeInBack",
			})
			.add({
				targets: ".music-title",
				translateY: [20, 0],
				opacity: [0, 1],
			})
			.add({
				targets: ".music-legend",
				translateY: [-20, 0],
				opacity: [0, 1],
			}, "-=200")
			.add({
				targets: ".songs-title",
				translateX: [-20, 0],
				opacity: [0, 1],
			}, "-=200")
			.add({
				targets: ".decorator-line",
				scale: [0,1],
			}, "-=200")
			.add({
				targets: ".songs-list",
			  opacity: [0, 1],
			});
		 }
		catch(err){
			console.error(err.message);
			handleError = {
				message: handleError.message,
				name: handleError.name,
			}
		}
	});

	const loadMoreSongs = async () => {
		if (!songsData.nextPage) return;

		const { songs, nextPage } = await fetchSpotifySongs(spoitifyToken, songsData.nextPage);

		const newSongs = [ ...songsData.songs, ...songs ];
		songsData.songs = newSongs;
		songsData.nextPage = nextPage;
	}

</script>

<section class="music">
	{#if isLoadingSongs}
		<Loading />
	{:else if handleError.name || handleError.message}
		<Error 
			errorMessage={handleError.message}
			errorName={handleError.name}
			/>
	{:else}
		<OreaOneTag />
		<div class="music-wrapper">
			<h2 class="music-title">Música</h2>
			<p class="music-legend">Escucha lo ultimo de Orea One</p>
			<h3 class="songs-title">Toda la música</h3>
			<div class="decorator-line"></div>
			<div class="songs-list">
				{#each songsData.songs as song, index (song.id)}
					{#if songsData.songs.length - 3 === index }
						<div 
							in:fade 
							use:infiniteScrolling={{ onEnter: loadMoreSongs, onLeave: () => {} }}>
							<SongCardVertical {...song} bind:currentSongPlayingId />
						</div>
					{:else}
						<div in:fade>
							<SongCardVertical {...song} bind:currentSongPlayingId />
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<Footer />
	{/if}
</section>

<style>
	.music {
		position: relative;
		overflow: hidden;
		padding-top: 3rem;
		min-height: 100%;
	}

	.music-wrapper {
		position: relative;
		width: 90%;
		max-width: 1400px;
		margin: 0 auto;
	}

	.music-title {
		font-family: "Road rage";
	}

	.music-legend {
		color: #ccc;
		font-size: 1.5rem;
	}

	.songs-title {
		margin-top: 4rem;
	}

	.decorator-line {
		width: 100%;
		height: 1px;
		background: #ccc;
		margin-bottom: .5rem;
	}

	.songs-list {
		position: sticky;
		padding-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
		grid-gap: 20px;
	}

</style>	