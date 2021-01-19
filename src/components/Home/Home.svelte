<script>
	import { onMount } from 'svelte';
	import { homeAnime, animeLazyLoadingImg } from '../../assets/anime.js';

	import Instagram from '../../icons/redes/instagram-with-circle.svg';
	import Twitter from '../../icons/redes/twitter-with-circle.svg';
	import Youtube from '../../icons/redes/youtube-with-circle.svg';
	import Facebook from '../../icons/redes/facebook-with-circle.svg';
	import Spotify from '../../icons/redes/spotify.svg';
	import ITunes from '../../icons/redes/itunes.svg';

	const redesIcons = [
		{
			title: "Instagram",
			Icon: Instagram,
			socialUrl: "/",
		}, 
		{
			title: "Twitter",
			Icon: Twitter,
			socialUrl: "/",
		}, 
		{
			title: "Youtube",
			Icon: Youtube,
			socialUrl: "/",
		}, 
		{
			title: "Facebook",
			Icon: Facebook,
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
	let nodeHome = null;
	let animationState = true;

	const animeFadeTop = (node, animationState) => {
		return {
			update: (newAnimationState) => {
				console.log(animationState)
				animationState = newAnimationState;
				if (node && animationState) {
					anime({
						targets: node,
			    	translateY: [-100, 0],
			    	opacity: [0, 1],
			    	easing: "easeInExpo",
			    	duration: 1000,
			    })
				}
			  else if(node && !animationState){
			  	anime({
						targets: node,
			    	translateY: [0, -100],
			    	opacity: [1, 0],
			    	easing: "easeInExpo",
			    	duration: 1000,
			    })
			  }
			}
		}
	}
	const animeFadeBottom = (node) => {
		return {
			update: (newAnimationState) => {
				animationState = newAnimationState;
				if (node && animationState) {
					anime({
						targets: node,
			    	translateY: [100, 0],
			    	opacity: [0, 1],
			    	easing: "easeInExpo",
			    	duration: 1000,
			    })
				}
			  else if(node && !animationState){
			  	anime({
						targets: node,
			    	translateY: [0, 100],
			    	opacity: [1, 0],
			    	easing: "easeInExpo",
			    	duration: 1000,
			    })
			  }
			}
		}
	}

	onMount(() => {
		homeAnime();
	})

</script>

<section class="home" bind:this={nodeHome}>
	<div class="bg-image" >
		<img on:load={animeLazyLoadingImg} src="/images/home-bg.png" alt="home-background">
	</div>
	<div class="home-wrapper">
		<div class="redes" id="anime-redes-home">
			{#each redesIcons as { Icon, socialUrl, title }}
				<a class="icon" href={socialUrl} title={title}>
					<Icon width="100%" height="100%" fill="#fff" />	
				</a>
			{/each}
		</div>
		<div class="title-box">
			<h2 class="title" id="anime-fade-top-text" >orea one</h2>
			<h4 class="legend" id="anime-fade-bottom-text">Trapin´s life baby</h4>
		</div>
	</div>
</section>

<style>
	.home {
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
		font-size: 3rem;
		color: var(--primary-color);
		text-shadow: 3px 10px rgb(0,0,0, .3);		
	}

	@media (max-width: 800px) {
		.title {
			font-size: 7rem;
		}

		.legend {
			font-size: 2rem;
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