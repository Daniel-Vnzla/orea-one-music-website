<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { fetchSpotifySongs, fetchNextSongs } from '../api/spotifyApi.js';

	import Footer from '../components/Footer/Footer.svelte';

	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import SongCard from '../components/Music/SongCard.svelte';
	import SongCard2 from '../components/Music/SongCard2.svelte';
	import Loading from '../commun/Loading.svelte';

	let isLoadingSongs = false;

	let songsData = {
		songs: [],
		nextPage: null
	};

	const infiniteScrolling = (node) => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				console.log("visible")
				loadMoreSongs()
			}
		});

		if (node) observer.observe(node);
	}

	onMount(async () => {
		isLoadingSongs = true;
		songsData = await fetchSpotifySongs();
		isLoadingSongs = false;
	});

	const loadMoreSongs = async () => {
		if (!songsData.nextPage) return;

		const { songs, nextPage } = await fetchNextSongs(songsData.nextPage);

		const newSongs = [ ...songsData.songs, ...songs ];
		songsData.songs = newSongs;
		songsData.nextPage = nextPage;
	}


</script>

<section class="music">
	<!-- {#if isLoadingSongs}
		<Loading />
	{:else}
		<OreaOneTag />
		<BoobleBackground />
		<div class="music-wrapper">
			<h2 class="music-title">Música</h2>
			<p class="music-legend">Escucha lo ultimo de Orea One</p>
			<h3 class="songs-title">Toda la música</h3>
			<div class="decorator-line"></div>
			<div class="songs">
				
			</div>
		</div>
		<div use:infiniteScrolling>
			<Footer />
		</div>
	{/if} -->
	{#if isLoadingSongs}
		<Loading />
	{:else}
		<OreaOneTag />
		<div class="music-wrapper">
			<h2 class="music-title">Música</h2>
			<p class="music-legend">Escucha lo ultimo de Orea One</p>
			<h3 class="songs-title">Toda la música</h3>
			<div class="decorator-line"></div>
			<div class="songs">
				{#each songsData.songs as song (song)}
					<div in:fade >
						<SongCard2 {...song}/>
					</div>
				{/each}
			</div>
		</div>

		<div use:infiniteScrolling>
			<Footer />
		</div>
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

	.songs {
		padding-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		grid-gap: 20px;
	}

</style>	