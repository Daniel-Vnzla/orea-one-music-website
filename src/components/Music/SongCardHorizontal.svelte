<script>
	import Youtube from '../../icons/redes/youtube-with-circle.svg';
	import Spotify from '../../icons/redes/spotify.svg';
	import Itunes from '../../icons/redes/itunes.svg';
</script>

<div class="song-card">
	<div class="song-img">
		<img src="/images/explicit.jpg" alt="explica">
	</div>
	<div class="song-info">
		<h4 class="song-info-title">Explicale</h4>
		<p class="song-info-author">Orea One ft. Sharly la voz</p>
	</div>
	<div class="song-links">
		<a href="/" target="_blank" data-tooltip="iTunes"> 
			<Itunes width="100%" height="100%" fill="var(--secondary-color)" />
		</a>	
		<a href="/" target="_blank" data-tooltip="Spotify"> 
			<Spotify width="100%" height="100%" fill="var(--secondary-color)" />
		</a>	
		<a href="/" target="_blank" data-tooltip="Youtube"> 
			<Youtube width="100%" height="100%" fill="var(--secondary-color)" />
		</a>	
	</div>
</div>

<style>
.song-card {
	display: grid;
	grid-template-columns: 10% 62% 28%;
	border-radius: 2px;
}

.song-img img {
	height: 100%;
}

.song-info {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #5a5a5a;
}

.song-info-title {
	font-size: 1.8rem;
}

.song-info-author {
	font-size: 1rem;
}

.song-links {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primary-color);
}

.song-links a {
	position: relative;
	width: 60%;
	height: 60%;
}

.song-links a::before {
	position: absolute;
	top: 0;
	left: 50%;
	content: attr(data-tooltip);
	background-color: #5a5a5a;
	color: var(--text-color);
	padding: 4px 16px;
	border-radius: 4px;
	opacity: 0;
	visibility: hidden;
	transform: translate(-50%, -220%);
	transition: opacity var(--transition-speed);
}

.song-links a:hover::before {
	opacity: 1;
	visibility: visible;
}
	
</style>