<script>
	import { fetchSpotifySongs } from '../api/spotifyApi.js';

	import Footer from '../components/Footer/Footer.svelte';

	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import SongCard from '../components/Music/SongCard.svelte';
	import SongCard2 from '../components/Music/SongCard2.svelte';
	import BoobleBackground from '../commun/BoobleBackground.svelte';
	import Loading from '../commun/Loading.svelte';

</script>

<section class="music">
	{#await fetchSpotifySongs()}
		<Loading />
	{:then songs }
		<OreaOneTag />
		<BoobleBackground />
		<div class="music-wrapper">
			<h2 class="music-title">Música</h2>
			<p class="music-legend">Escucha lo ultimo de Orea One</p>
			<h3 class="songs-title">Toda la música</h3>
			<div class="decorator-line"></div>
			<div class="songs">
				{#each songs as song, index}
					<SongCard2 {...song}/>
				{/each}
			</div>
		</div>
		<Footer />
	{/await}
</section>

<style>
	.music {
		position: relative;
		overflow: hidden;
		padding-top: 3rem;
		min-height: 100vh;
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
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
	}

</style>	