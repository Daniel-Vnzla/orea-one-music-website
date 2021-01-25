<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { allRedesIcons } from '../../assets/icons.js';

	const observerParams = {
		threshold: 0.7,
	}

	let scrollY = 0;
	let once = false;

	const animeLazyLoadingImg = ({ target }) => {
		target.style.opacity = 1;
		anime({
			targets: target,
		  opacity: [0, 1],
		  scale: [2, 1],
		  easing: "easeOutQuad",
		  duration: 33500,
		});
	}

	onMount(() => {
		anime.timeline({
			duration: 600,
			delay: 1000,
		})
		.add({
			targets: "#anime-fade-top-text",
		  scale: [2, 1],
		  opacity: [0, 1],
		  easing: "easeInBack"
		})
		.add({
			targets: "#anime-redes-home .icon",
		  translateY: [-50, 0],
		  opacity: [0, 1],
		  delay: anime.stagger(100, { easing: 'easeOutQuad' }),
		}).
		add({
			targets: ".scroll-down",
			translateY: [-20, 0],
		  opacity: [0, 1],
		}, "-=500");

		anime({
			targets: "#anime-fade-bottom-text",
			translateY: [50, 0],
		  opacity: [0, 1],
		  easing: "easeInBack",
		  delay: 1000,
		});
	});

	$: if (scrollY > 10 && !once) {
		once = true;
	}

</script>
<svelte:window bind:scrollY={scrollY} ></svelte:window>	

<section class="home">
	<div class="bg-image" >
		<img on:load={animeLazyLoadingImg} src="/images/home-bg.png" alt="home-background">
	</div>
	<div class="home-wrapper">
		<div class="redes" id="anime-redes-home">
			{#each allRedesIcons as { Icon, socialUrl, title }}
				<a class="icon icon-translate" href={socialUrl} title={title} target="_blank">
					<Icon width="100%" height="100%" fill="#fff" />	
				</a>
			{/each}
		</div>
		<div class="title-box">
			<h2 class="title" id="anime-fade-top-text" >orea one</h2>
			<h4 class="legend" id="anime-fade-bottom-text">Trapinn´ Life Baby</h4>
		</div>
	</div>
	<div class="scroll-down" hidden={once} >
		<div class="scroll-ball"></div>
	</div>
</section>

<style>
	.home {
		position: relative;
		overflow: hidden;
	}

	.bg-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.bg-image > img {
		opacity: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
		transition: opacity var(--transition-speed);
	}

	.home {
		position: relative;
		min-height: 100vh;
	}

	.home-wrapper {
		position: relative;
		padding-top: 3rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		width: 100%;
	}

	.icon {
		width: 40px;
	}

	.redes {
		position: absolute;
		top: 1.5rem;
		left: 50%;
		display: flex;
		gap: .5rem;
		transform: translateX(-50%);
	}

	.title-box {
		text-align: center;
	}

	.title {
		font-size: 9rem;
		line-height: 9.3rem;
		font-family: "Road rage";
		text-shadow: 0px 20px rgba(0, 0, 0, .4);
	}

	.legend {
		margin-top: .5rem;
		font-size: 3rem;
		color: var(--primary-color);
		text-shadow: 3px 10px rgb(0,0,0, .3);		
	}

	.scroll-down {
		position: absolute;
		bottom: 20px;
		left: 50%;
		width: 30px;
		height: 60px;
		padding: 4px;
		border-radius: 20px;
		border: 2px solid rgba(255,255,255, .6);;
		transform: translateX(-50%);
	}

	.scroll-down::before {
		position: absolute;
		content: "Scroll down!";
		top: -80%;
		left: 50%;
		font-size: .9rem;
		color: rgba(255,255,255, .6);
		font-weight: bold;
		white-space: nowrap;
		transform: translate(-50%, 100%);
	} 

	.scroll-ball {
		width: 100%;
		height: 20px;
		border-radius: 10px;
		background-color: rgba(255,255,255, .6);
		animation: scrolling-ball  infinite 4s;
		animation-delay: 1s;
	}

	@keyframes scrolling-ball {
		from{
			transform: translateY(0);
		}
		to {
			transform: translateY(25px);
		}
	}

	@media (max-width: 800px) {
		.title {
			font-size: 7rem;
		}

		.legend {
			font-size: 2rem;
		}

		.scroll-down {
			bottom: 4rem;
		}

	}

	@media (max-width: 500px) {
		.title {
			font-size: 4rem;
		}

		.legend {
			font-size: 1rem;
		}

		.icon {
			width: 30px;
		}
	}


</style>