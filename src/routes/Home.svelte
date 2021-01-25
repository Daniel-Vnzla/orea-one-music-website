<script>
	import { onMount, tick } from 'svelte';
	import Home from '../components/Home/Home.svelte';
	import Music from '../components/Home/Music.svelte';
	import Biografy from '../components/Home/Biografy.svelte';
	import Streaming from '../components/Home/Streaming.svelte';

	import Footer from '../components/Footer/Footer.svelte';
	import Loading from '../commun/Loading.svelte';

	import { fetchSpotifySongs, getSpotifyAuthToken } from '../api/spotify.js';

	let isLoadingSongs = false;
	let songsData = {
		songs: [],
		nextPage: null,
	};

	onMount(async () => {
		try {
			isLoadingSongs = true;
			const spoitifyToken = await getSpotifyAuthToken();
			songsData = await fetchSpotifySongs(spoitifyToken, null);
			isLoadingSongs = false;
			await tick();
		}
		catch(err){
			console.log(err);
		}
	})
</script>

<section class="home">
	{#if isLoadingSongs}
		<Loading />
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