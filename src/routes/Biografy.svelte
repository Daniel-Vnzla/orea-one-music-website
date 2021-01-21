<script>
	import anime from 'animejs';
	import { onMount, tick } from 'svelte';
	import { animationOnObserve } from '../assets/actions.js';
	import Redes from '../commun/Redes.svelte';

	import Loading from '../commun/Loading.svelte';
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	
	let isImgLoading = true;
	let imgUrl = null;

	const fetchOreaOneImg = async () => {
		try {
			isImgLoading = true;
			const res = await fetch("/images/oreaone.png");
			const blob = await res.blob();
			imgUrl = URL.createObjectURL(blob);
		}
		catch(err){
			console.log(err.message);
		}
		finally {
			isImgLoading = false;
		}
	}

	onMount(async () => {
		await fetchOreaOneImg();
		await tick();
		anime.timeline({
			duration: 600,
		  easing: "easeInBack",
		})
		.add({
			targets: ".bio-title",
			translateY: [-20, 0],
		  opacity: [0, 1],
		})
		.add({
			targets: ".bio-name",
			translateX: [-20, 0],
		  opacity: [0, 1],
		}, "-=200")
		.add({
			targets: ".bio-titles",
			translateY: [20, 0],
		  opacity: [0, 1],
		}, "-=200")
		.add({
			targets: "#orea-one-img",
			translateX: [20, 0],
		  opacity: [0, 1],
		}, "+=500");
	});

	const enter = (node) => {
		anime({
			targets: node,
			translateX: [-10, 0],
			opacity: [0, 1],
			duration: 500,
			easing: "easeOutQuad",
		})
	}

	const leave = (node) => {
		anime({
			targets: node,
			translateX: [10, 0],
			opacity: [1, 0],
			duration: 500,
			easing: "easeOutQuad",
		})
	}


</script>

<section class="biografy">
	{#if isImgLoading}
		<Loading />
	{:else}
		<OreaOneTag />
		<div class="biografy-wrapper">
			<h2 class="bio-title">Biografía</h2>
			<article class="description">
				<div class="bio-section-one">
					<h3 class="bio-name">Antonio Javier Eltit Chellew</h3>
					<p class="bio-titles">Músico, Cantante, Compositor</p>
					<p use:animationOnObserve={{ enter, leave }} >Orea One nació el 4 de mayo de 1996 en Chile, como Antonio Javier Eltit Chellew. Es ilustrador, cantante y compositor de trap y reggaetón.
				</p>
				</div>
				<div 
					class="bio-section-two" 
				>
					<div class="bio-section-two-text">
						<p use:animationOnObserve={{ enter, leave }} >Desde niño su obsesión ha sido dibujar y cantar, sin embargo, en 2009 fue cuando comenzó a escribir rap y a pintar graffiti, cuando solo tenía 13 años.
						<p/>
						<p use:animationOnObserve={{ enter, leave}} >
							En 2010 grabó su primera canción de rap, luego estuvo participando de 2010 a 2013, en tres álbumes de rap con su grupo de amigos, luego participó en tres álbumes más de 2014 a 2017, todos grabados en casa.
						</p>
						<p use:animationOnObserve={{ enter, leave}} >
							Remontándose al año 2014, comenzó a estudiar, pasando por diversas carreras, como la animación digital y el diseño gráfico, las cuales no terminó, sin embargo el año 2019 se tituló como ilustrador.
						</p>
						<p use:animationOnObserve={{ enter, leave }} >
							Tras trabajar un par de años como ilustrador freelance, decidió empezar a invertir en su carrera musical, dándole un nuevo comienzo en 2020, ya profesionalmente como artista urbano, invirtiendo en su imagen y en sus producciones, tomando así la decisión de dedicarse de lleno a lo que es su carrera artística.
						</p>
					</div>
					<div class="img" id="orea-one-img">
						<img 
							class="img" 
							src={imgUrl} 
							alt="Orea One">
					</div>
				</div>
			</article>
		</div>
		<div style="position: relative">
			<Redes />
		</div>
	{/if}
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

	.bio-title {
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
		font-size: 2.5rem;
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

	.bio-section-two-text {
		background: #292929;
		height: fit-content;
		padding: 1.4rem;
	}


	.bio-section-two-text p {
		margin-bottom: 2rem;
	}

	.bio-section-two .img {
		min-width: 50%;
	}



	@media (max-width: 800px) {
		.bio-section-two {
			display: flex;
			flex-direction: column;
		}

		.bio-section-two-text p {
			margin-bottom: 2rem;
		}
	}

</style>