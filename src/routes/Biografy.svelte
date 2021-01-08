<script>
	import Redes from '../commun/Redes.svelte';
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import Loading from '../commun/Loading.svelte';
	
	import BoobleBackground from '../commun/BoobleBackground.svelte';

	let isImgLoading = true;

	const checkImgStatus = (e) => isImgLoading = false;
</script>

<section class="biografy">
	{#if isImgLoading }
		<Loading />
	{/if}
	<BoobleBackground />
	<OreaOneTag />
	<div class="biografy-wrapper">
		<h2 class="title">Biografía</h2>
		<article class="description">
			<div class="bio-section-one">
				<h3 class="bio-name">Antonio Eltit</h3>
				<p class="bio-titles">Músico, Cantante, Compositor</p>
				<p>Orea One nació el 4 de mayo de 1996 en Chile, como Antonio Javier Eltit Chellew. Es ilustrador, cantante y compositor de trap y reggaetón.
			</p>
			</div>
			<div class="bio-section-two">
				<p>Desde niño su obsesión ha sido dibujar y cantar, sin embargo, en 2009 fue cuando comenzó a escribir rap y a pintar graffiti, cuando solo tenía 13 años.
				<br/>
				<br/>

				En 2010 grabó su primera canción de rap, luego estuvo participando de 2010 a 2013, en tres álbumes de rap con su grupo de amigos, luego participó en tres álbumes más de 2014 a 2017, todos grabados en casa.
				<br/>
				<br/>

				Remontándose al año 2014, comenzó a estudiar, pasando por diversas carreras, como la animación digital y el diseño gráfico, las cuales no terminó, sin embargo el año 2019 se tituló como ilustrador.
				<br/>
				<br/>

				Tras trabajar un par de años como ilustrador freelance, decidió empezar a invertir en su carrera musical, dándole un nuevo comienzo en 2020, ya profesionalmente como artista urbano, invirtiendo en su imagen y en sus producciones, tomando así la decisión de dedicarse de lleno a lo que es su carrera artística.</p>
				<img 
					on:load={checkImgStatus} 
					class="img" 
					src="/images/oreaone.png" 
					alt="Orea One">
			</div>
		</article>
	</div>
	<div style="position: relative">
		<Redes />
	</div>
</section>


<style>

	.biografy {
		position: relative;
		padding-top: 3rem;
		overflow: hidden;
		min-height: 100%;
	}

	.biografy-wrapper {
		position: relative;
		max-width: 90%;
		margin: 0 auto;
	}

	.title {
		color: var(--text-color);
		text-align: center;
		font-family: "Road rage";
		margin-bottom: 4rem;
	}

	.bio-section-one {
		background: #292929;
		margin-bottom: 6rem;
		padding: 1.4rem;
		border-radius: 5px;
	}

	p {
		font-size: 1.2rem;
	}

	.bio-name {
		color: var(--primary-color);
	}

	.bio-titles {
		font-weight: bold;
		color: #ddd;
		margin-bottom: 3rem;
	}

	.bio-section-two {
		display: flex;
		align-items: flex-end;
	}

	.bio-section-two p {
		padding: 1.4rem;
		background: #292929;
		height: fit-content;
		margin-bottom: 6rem;
	}



	@media (max-width: 800px) {
		.bio-section-two {
			display: flex;
			flex-direction: column;
		}

		.bio-section-two p {
			margin-bottom: 0;
		}
	}

</style>