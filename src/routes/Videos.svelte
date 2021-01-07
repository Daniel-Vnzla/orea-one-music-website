<script>
		import { onMount } from 'svelte';
	let name = 'world';
	const YOUTUBE_API_KEY = "AIzaSyBw35cPpUzPTb6Y9-ZmvAfzlBFXi7xnRT4";
	const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

	const fetchYoutubeVideos = async () =>{ 
		const res = await fetch(`${YOUTUBE_API_URL}?part=snippet&playlistId=PLIkb_BrIXCi8GUVpG59wrMs6Q9k1aYIEP&maxResults=20&key=${YOUTUBE_API_KEY}`); 
		const data = await res.json()
		console.log(data)
		return data.items.map((item) => {
			const { resourceId } = item.snippet;
			return resourceId.videoId
		}); 

	}

</script>

{#await fetchYoutubeVideos()}
	<p>loading...</p>
{:then videos }
		<section class="videos">
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
		</section>
{:catch error}
	<p>Error...</p>
{/await}

<style>

	.videos-wrapper {
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