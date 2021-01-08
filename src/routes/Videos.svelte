<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	import Footer from '../components/Footer/Footer.svelte';
	import OreaOneTag from '../commun/OreaOneTag.svelte';

	const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
	const PLAYLIST_ID = "PLIkb_BrIXCi8GUVpG59wrMs6Q9k1aYIEP";

	const fetchYoutubeVideos = async () =>{
		const { data } = await axios.get(`${YOUTUBE_API_URL}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=20&key=${__process.env.YOUTUBE_API_KEY}`);
		const videosArrId = data.items.map((item) => item.snippet.resourceId.videoId );
		return videosArrId; 
	}

</script>

{#await fetchYoutubeVideos()}
	<p>loading...</p>
{:then videos }
		<section class="videos">
			<OreaOneTag />
			<div class="videos-wrapper">
				<h2 class="videos-title">Videos</h2>
				<div class="video-list">
					{#each videos as videoId}
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
{:catch error}
	<p>Error...</p>
{/await}

<style>

	.videos {
		position: relative;
		overflow: hidden;
	}

	.videos-wrapper {
		position: relative;
		width: 90%;
		margin: 0 auto;
		padding-top: 3rem;
	}

	.videos-title {
		font-family: "Road rage";
	}

	.video-list {
		max-width: 1400px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	.video {
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