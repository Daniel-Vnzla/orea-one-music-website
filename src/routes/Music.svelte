<script>
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import SongCard from '../components/Music/SongCard.svelte';
	import SongCard2 from '../components/Music/SongCard2.svelte';
	import BoobleBackground from '../commun/BoobleBackground.svelte';

</script>

<section class="music">
	<OreaOneTag />
	<BoobleBackground />
	<div class="music-wrapper">
		<h2 class="music-title">Música</h2>
		<p class="music-legend">Escucha lo ultimo de Orea One</p>
		<h3 class="songs-title">Toda la música</h3>
		<div class="decorator-line"></div>
		<div class="songs">
				<!-- <SongCard /> -->
		<SongCard2 />
		<SongCard2 />
		<SongCard2 />
		</div>
	</div>
</section>

<style>
	.music {
		position: relative;
		overflow: hidden;
		padding-top: 3rem;
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


	.songs {
		margin-top: 5rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
	}

	.songs-title {
		margin-top: 1.2rem;
	}

	.decorator-line {
		width: 100%;
		height: 1px;
		background: #ccc;
		margin-bottom: .5rem;
	}

</style>	