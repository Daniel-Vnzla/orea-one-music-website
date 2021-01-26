<script>
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToRight, fadeToLeft } from '../../assets/anime.js';
	import { musicIcons } from '../../assets/icons.js';

	const observerParams = {
		threshold: 0.5,
	}
</script>

<section class="streaming">
	<h2 
		class="title"
		use:animationOnObserve={fadeToRight(observerParams)}
		>Streaming</h2>
	<h4 
		class="legend"
		use:animationOnObserve={fadeToLeft(observerParams)}
		>Escucha la música de Orea One en tu plataforma preferida.</h4>
	<div class="streaming-section-one">
		<div 
			class="img"
			use:animationOnObserve={fadeToRight(observerParams)}
			>
			<img src="/images/explicit.jpg" alt="Explicit">
			<a href="https://distrokid.com/hyperfollow/oreaone/explcale" title="Escuchala ahora en tu servicio de streaming favorito" class="escuchar-ahora-btn">
				Escuchar ahora!
			</a>
		</div>
		<div class="redes-list">
			{#each musicIcons as { Icon, socialUrl, title }, index}
			<a 
				use:animationOnObserve={ index % 2 ? fadeToRight(observerParams) : fadeToLeft(observerParams)}
				class="icon-link" 
				href={socialUrl} 
				title={title}
				>
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