<script>
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

</script>

<section class="home">
	<div class="redes">
		{#each redesIcons as { Icon, socialUrl, title }}
			<a class="icon" href={socialUrl} title={title}>
				<Icon width="100%" height="100%" fill="#fff" />	
			</a>
		{/each}
	</div>
	<div class="home-main-section">
		<div class="title-box">
			<h2 class="title">orea one</h2>
			<h4 class="legend">Trapin´s life baby</h4>
		</div>
		<div class="img">
			<img src="/images/home-oreaone.png" alt="Orea One">
		</div>
	</div> 
</section>

<style>

	.home {
		position: relative;
		padding-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		background-image: url(/images/home-bg.png);
		min-height: 100vh;
	}

	.icon {
		margin: 0 .2rem;
		width: 40px;
	}

	.redes {
		display: flex;
	}

	.home-main-section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.title-box {
		text-align: center;
		transform: translateX(4rem);
	}

	.title {
		font-size: 8rem;
		font-family: "Road rage";
	}

	.legend {
		font-size: 2rem;
		color: var(--primary-color);
	}


</style>