<script>
	import { onMount } from 'svelte';
	import { fetchYoutubeVideos } from '../api/youtube.js';
	import { youtubeVideos } from '../stores/store.js';

	import Footer from '../components/Footer/Footer.svelte';
	import OreaOneTag from '../commun/OreaOneTag.svelte';
	import Loading from '../commun/Loading.svelte';


	onMount(async () => {
		$youtubeVideos = await fetchYoutubeVideos() || $youtubeVideos;
	})

</script>

{#if !$youtubeVideos.length}
	<Loading />
{:else}
	<section class="videos">
		<OreaOneTag />
		<div class="videos-wrapper">
			<h2 class="videos-title">Videos</h2>
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

	.video-list {
		max-width: 1400px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	.video {
		background-color: var(--bg-color);
		min-height: 300px;
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