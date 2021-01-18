<script>
	import Youtube from '../../icons/redes/youtube-with-circle.svg';
	import Spotify from '../../icons/redes/spotify.svg';
	import ITunes from '../../icons/redes/itunes.svg';

	const redesIcons = [
		{
			title: "Youtube",
			Icon: Youtube,
			socialUrl: "/",
		}, 
		{
			title: "Spotify",
			Icon: Spotify,
			socialUrl: "/",
		}, 
		{
			title: "ITunes",
			Icon: ITunes,
			socialUrl: "/",
		}
	];
</script>

<section class="streaming">
	<h2 class="title">Streaming</h2>
	<h4 class="legend">Escucha la música de orea one en tu plataforma preferida.</h4>
	<div class="streaming-section-one">
		<div class="img">
			<img src="/images/explicit.jpg" alt="Explicit">
			<a href="/" title="escuchar ahora en spotify" class="escuchar-ahora-btn">
				Escuchar ahora!
			</a>
		</div>
		<div class="redes-list">
			{#each redesIcons as { Icon, socialUrl, title }, index}
			<a class="icon-link" href={socialUrl} title={title}>
				<div class="icon">
					<Icon width="100%" height="100%" fill="var(--secondary-color)" />
				</div>
				<span class="icon-title">{title}</span>
			</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.streaming {
		background: var(--primary-color);
		padding: 2rem;
		text-align: center;
		min-height: 100vh;
	}

	.title {
		color: var(--secondary-color);
		line-height: 4rem;
	}

	.legend {
		font-size: 1.7rem;
		color: #2989ce;
	}

	.streaming-section-one {
		width: 90%;
		margin: 0 auto;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 5rem;
		padding-bottom: 5rem;
	}

	.escuchar-ahora-btn {
		color: #2989ce;
		font-size: 1.2rem;
		font-weight: bold;
		text-decoration: underline;
	}

	.redes-list {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
	}

	.icon-link {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 8rem;
	}

	.icon-title {
		font-weight: bold;
		color: var(--secondary-color);
		font-size: 2rem;
		margin-left: .8rem;
	}

	@media (max-width: 800px) {
		.streaming-section-one {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		} 
	}
</style>