<script>
	import MusicReproductor from './MusicReproductor.svelte';
	
</script>

<div class="song-card">
	<div class="img">
		<img src="/images/explicit.jpg" alt="explicale">
	</div>
	<div class="song-info">
		<h3 class="song-title">Sangre roja</h3>
		<p class="song-author">Orea One ft. Sharly la voz</p>
	</div>
	<MusicReproductor />
</div>

<style>
	.song-card {
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background: #333;
	}

	.img {
		width: 70%;
		border-radius: 50%;
		background: #000;
		overflow: hidden;
	}

	.song-author {
		font-size: .9rem;
		color: #ccc;
	}

</style>