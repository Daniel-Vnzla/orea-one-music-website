<script>
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import SongCard from '../components/Music/SongCard.svelte';
	import BoobleBackground from '../commun/BoobleBackground.svelte';

</script>

<section class="music">
	<OreaOneTag />
	<BoobleBackground />
	<div class="music-wrapper">
		<h2 class="music-title">Música</h2>
		<p class="music-legend">Escucha lo ultimo de Orea One</p>
		<div class="songs">
			<h3 class="songs-title">Toda la música</h3>
			<div class="decorator-line"></div>
			<SongCard />
			<SongCard />
			<SongCard />
			<SongCard />
			<SongCard />
			<SongCard />
			<SongCard />
			<SongCard />
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
		grid-gap: 20px;
	}

	.songs-title {
		margin-bottom: .5rem;
	}

	.decorator-line {
		width: 100%;
		height: 1px;
		background: #ccc;
		margin-bottom: .5rem;
	}

</style>	