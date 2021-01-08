<script>
	import MusicReproductor from './MusicReproductor.svelte';
	
	const lazyLoadImg = ({ target }) => target.style.opacity = 1; 
</script>

<div class="song-card">
	<div class="img">
		<img on:load={lazyLoadImg} src="/images/explicit.jpg" alt="explicale">
	</div>
	<div class="song-info">
		<h3 class="song-title">Explicale</h3>
		<p class="song-author">Orea One ft. Sharly la voz</p>
	</div>
	<MusicReproductor />
</div>

<style>
	.song-card {
		padding: 1.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background: #333;
		border-radius: 4px;
	}

	.img {
		width: 60%;
		border-radius: 50%;
		background: #000;
		overflow: hidden;
	}

	.img img {
		opacity: 0;
		transition: opacity var(--transition-speed);
	}

	.song-title {
		font-size: 2.2rem;
	}

	.song-author {
		font-size: .9rem;
		color: #ccc;
	}

</style>