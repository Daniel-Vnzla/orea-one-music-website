<script>
	import SongCard2 from '../Music/SongCard2.svelte';
</script>

<section class="music">
	<h2 class="title">Ultimas canciones</h2>
	<h4 class="legend">Ecucha lo ultimo de orea one</h4>

	<a href="/music" title="music">
		Todas las canciones
	</a>
	<div class="music-list">
		<SongCard2 
			imgUrl="/images/explicit.jpg"
			artists="orea one"
			id="1"
			title="Cancion 1"
		/>
		<SongCard2 
			imgUrl="/images/explicit.jpg"
			artists="orea one"
			id="2"
			title="Cancion 1"
		/>
		<SongCard2 
			imgUrl="/images/explicit.jpg"
			artists="orea one"
			id="1"
			title="Cancion 1"
		/>
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

	a {
		display: inline-block;
		font-weight: bold;
		padding: .6rem 2rem;
		position: relative;
		font-size: 1.3rem;
		margin-top: 3.5rem;
		margin-bottom: 1.5rem;
		color: var(--text-color);
	}

	a::before {
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

	a:hover::before {
		transform: scaleX(0.3);
	}


</style>