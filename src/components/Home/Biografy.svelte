<script>
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToRight, fadeToLeft } from '../../assets/anime.js';

	import RightArrow from '../../icons/arrow-right.svg';

	const observerParams = {
		threshold: 0.5,
	}
</script>

<section class="biografy">
	<h2 
		class="title"
		use:animationOnObserve={fadeToLeft(observerParams)}
		>Orea One</h2>
	<h4 
		class="legend"
		use:animationOnObserve={fadeToRight(observerParams)}
		>Conoce a Orea One</h4>

	<div class="biografy-section-one">
		<div class="bio-text-box">
			<h4 
				class="text-title"
				use:animationOnObserve={fadeToLeft(observerParams)}
				>Biografía</h4>
			<p 
				class="bio-text"
				use:animationOnObserve={fadeToRight(observerParams)}
				 >
				Desde niño su obsesión ha sido dibujar y cantar, sin embargo, en 2009 fue cuando comenzó a escribir rap y a pintar graffiti, cuando solo tenía 13 años.
				<br/>
				<br/>

				En 2010 grabó su primera canción de rap, luego estuvo participando de 2010 a 2013, en tres álbumes de rap con su grupo de amigos, luego participó en tres álbumes más de 2014 a 2017, todos grabados en casa.
				<br/>
				<br/>

				Remontándose al año 2014, comenzó a estudiar, pasando por diversas carreras, como la animación digital y el diseño gráfico, las cuales no terminó, sin embargo el año 2019 se tituló como ilustrador.
				<br/>
				<br/>
			</p>
			<a 
				class="ver-mas-btn" 
				href="/Biografía"
				title="Ver la biografía de orea one"
				use:animationOnObserve={fadeToLeft(observerParams)}				
				>
				<span>Ver mas </span>
				<div class="ver-mas-icon">
					<RightArrow width="100%" height="100%" fill="var(--primary-color)" />
				</div>
			</a>
		</div>
		<div 
			use:animationOnObserve={fadeToRight(observerParams)}				
			class="img"
			>
			<img src="/images/oreaone.png" alt="Orea One">
		</div>
	</div>
</section>

<style>
	.biografy {
		text-align: center;
		min-height: 100vh;
	}

	.title {
		padding-top: 5rem;
		line-height: 4rem;
	}

	.legend {
		font-size: 1.7rem;
		color: #ccc;
	}

	.biografy-section-one {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: center;
		width: 90%;
		margin: 0 auto;
		margin-top: 1rem;
		grid-gap: 20px;
	}

	.bio-text-box {
		height: fit-content;
		font-size: 1.2rem;
	}

	.text-title {
		font-size: 2.2rem;
		margin-bottom: 2rem;
	}

	.bio-text {
		position: relative;
	}

	.bio-text::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to top, var(--bg-color-secondary) 15%, transparent 85%);
		pointer-events: none;
	}

	.ver-mas-btn {
		position: relative;
		display: flex;
		align-items: center;
		width: fit-content;
		justify-content: center;
		color: var(--text-color);
		font-size: 1.4rem;
		padding: .6rem 2rem;
		margin: 0 auto;
		margin-top:-4rem;
	}

	.ver-mas-btn::before {
		position: absolute;
		content: "";
		left: 0;
		bottom: 0;
		width: 100%;
		min-height: 2px;
		background-color: var(--primary-color);
		transition: transform var(--transition-speed);
	}

	.ver-mas-icon {
		margin-left: .5rem;
		width: 2rem;
		height: 2rem;
		transition: transform var(--transition-speed);
	}

	.ver-mas-btn:hover .ver-mas-icon {
		transform: translateX(5px);
	}

	.ver-mas-btn:hover::before {
		transform: scaleX(0.4);
	}

	@media (max-width: 800px)  {
		.biografy-section-one {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding-bottom: 3rem;
		}

		.biografy-section-one .img {
			display: none;
		}
	}
</style>