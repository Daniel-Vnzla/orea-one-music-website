<script>
	import anime from 'animejs';
	import { onMount, tick } from 'svelte';
	import { youtubeVideos } from '../stores/store.js';
	import { fetchYoutubeVideos } from '../api/youtube.js';

	import Footer from '../components/Footer/Footer.svelte';
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import Loading from '../commun/Loading.svelte';

	let isLoading = false;

	onMount(async () => {
		window.scroll({ top: 0 });
		isLoading = true;
		if(!$youtubeVideos.length) {
			$youtubeVideos = await fetchYoutubeVideos() || []
		}
		isLoading = false;
		await tick();
		anime.timeline({
			duration: 600,
			easing: "easeInBack",
		})
		.add({
			targets: ".video-title",
			translateY: [20, 0],
		  opacity: [0, 1],
		})
		.add({
			targets: ".subscribe-section",
			translateY: [-20, 0],
		  opacity: [0, 1],
		})
		.add({
			targets: ".video-list",
			translateX: [-20, 0],
		  opacity: [0, 1],
		})
	});

</script>

{#if isLoading }
	<Loading />
{:else}
	<section class="videos">
		<OreaOneTag />
		<div class="videos-wrapper">
			<h2 class="videos-title">Videos</h2>
			<div class="subscribe-section">
				Suscribe al canal de Orea One para no perderte de sus siguientes lanzamientos!
			<!-- is necessary load here -->
			<script src="https://apis.google.com/js/platform.js"></script>
			<div 
				class="g-ytsubscribe" 
				data-channelid="UCVz0m0NGtDwYdc_7PeVPgDQ" 
				data-layout="default" 
				data-count="default"></div>
			</div>
			<div class="decorator-line"></div>
			<div class="video-list">
				{#each $youtubeVideos as videoId}
					<div class="video">
						<iframe 
							width="100%" 
							height="100%" 
							title="oreaone"
							frameborder="0" 
							src="https://www.youtube.com/embed/{videoId}?controls=1&autoplay=0"></iframe>	
					</div>
				{/each}
			</div>
		</div>
		<Footer />
	</section>
{/if}

<style>

	.videos {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.videos-wrapper {
		position: relative;
		width: 90%;
		margin: 0 auto;
		padding-top: 3rem;
	}

	.videos-title {
		font-family: "Road rage";
		margin-bottom: 2rem;
	}

	.subscribe-section {
		font-size: 1.2rem;
		margin-bottom: .5rem;
	}

	.decorator-line {
		width: 100%;
		height: 1px;
		background: #ccc;
		margin-bottom: 2rem;
	}

	.video-list {
		max-width: 1400px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	.video {
		background-color: var(--bg-color);
		min-height: 320px;
	}

	@media (max-width: 1050px) {
		.video {
			min-height: 220px;
		}
	}

	@media (max-width: 700px) {
		.video-list {
			grid-template-columns: 1fr;
		}
	}

</style>