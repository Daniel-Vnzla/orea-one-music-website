<script>
	import { onMount, tick } from 'svelte';
	import Home from '../components/Home/Home.svelte';
	import Music from '../components/Home/Music.svelte';
	import Biografy from '../components/Home/Biografy.svelte';
	import Streaming from '../components/Home/Streaming.svelte';

	import Footer from '../components/Footer/Footer.svelte';
	import Loading from '../commun/Loading.svelte';
	import Error from '../commun/Error.svelte';

	import { fetchSpotifySongs, getSpotifyAuthToken } from '../api/spotify.js';

	let isLoadingSongs = false;
	let songsData = {
		songs: [],
		nextPage: null,
	};

	let handleError = {
		name: "",
		message: ""
	}

	onMount(async () => {
		try {
			isLoadingSongs = true;
			const spoitifyToken = await getSpotifyAuthToken();
			songsData = await fetchSpotifySongs(spoitifyToken, null);
			isLoadingSongs = false;
			await tick();
		}
		catch(err){
			console.error(err.message);
			handleError = {
				message: handleError.message,
				name: handleError.name,
			}
		}
	})
</script>

<section class="home">
	{#if isLoadingSongs}
		<Loading />
	{:else if handleError.name || handleError.message}
		<Error 
			errorMessage={handleError.message}
			errorName={handleError.name}
			/>
	{:else}
		<div class="home-wrapper">
			<Home />
			<Music songs={songsData?.songs.slice(0,3)} />
			<Biografy />
			<Streaming />
		</div>
		<Footer />
	{/if}
</section>

<style>
	.home {
		background: var(--bg-color-secondary);
		position: relative;
		min-height: 100vh;
	}

	.home-wrapper {
		position: sticky;
	}

</style>