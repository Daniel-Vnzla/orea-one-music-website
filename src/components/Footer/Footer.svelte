<script>
	import Facebook from '../../icons/redes/facebook-with-circle.svg';
	import Instagram from '../../icons/redes/instagram-with-circle.svg';
	import Twitter from '../../icons/redes/twitter-with-circle.svg';
	import Spotify from '../../icons/redes/spotify.svg';
	import Youtube from '../../icons/redes/youtube-with-circle.svg';
	import ITunes from '../../icons/redes/itunes.svg';

</script>

<footer class="footer">
	<div class="contacts">
		<h3 class="contacts-title">Discografía (contactos)</h3>
		<div class="contacts-info">
			<div class="info-data">
			<h5 class="info-title">MANAGER PERSONAL</h5>
				<p>Guy Dayan</p>
				<p>guy@thegoola.com</p>
				<p>+972 522 509 749</p>
			</div>
			<div class="info-data">
			<h5 class="info-title">CONTACTO PERSONAL</h5>
				<p>Orea One</p>
				<p>oreaone@gmail.com</p>
				<p>+972 522 509 749</p>
			</div>
		</div>
		<div class="copyritght">© 2020-2021 OREA ONE</div>
	</div>
	<div class="redes">
		<h3 class="title">Redes sociales y música</h3>
		<div class="redes-list">
			<a href="/" title="Facebook" target="_blank">
				<Facebook width="100%" height="100%" fill="var(--text-color)" /></a>
			<a href="/" title="Instagram" target="_blank">
				<Instagram width="100%" height="100%" fill="var(--text-color)" /></a>
			<a href="/" title="Twitter" target="_blank">
				<Twitter width="100%" height="100%" fill="var(--text-color)" /></a>
			<a href="/" title="Spotify" target="_blank">
				<Spotify width="100%" height="100%" fill="var(--text-color)" /></a>
			<a href="/" title="Youtube" target="_blank">
				<Youtube width="100%" height="100%" fill="var(--text-color)" /></a>
			<a href="/" title="iTunes" target="_blank">
				<ITunes width="100%" height="100%" fill="var(--text-color)" /></a>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		width: 100%;
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.contacts {
		padding: 1.3rem;
		text-align: center;
		background-color: var(--primary-color);
		color: var(--secondary-color);
		border-bottom-right-radius:60px;
	}

	.contacts-title {
		color: #503c00;
	}

	.contacts-info {
		text-align: left;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.info-title {
		text-transform: uppercase;
		font-size: 1.3rem;
	}

	.info-data {
		font-style: italic;
	}

	.copyritght {
		margin-top: 1rem;
		font-weight: bold;
	}

	.redes {
		text-align: center;
		border-bottom-right-radius: 60px;
		padding: 1.3rem;
	}

	.redes-list {
		margin-top: 1rem;
		display: flex;
	}

	.redes-list a {
		margin: .5rem;
	}

	@media (max-width: 800px) {
		.footer {
			grid-template-columns: 1fr;
		}

		.title {
			font-size: 1.2rem;
		}

		.info-title {
			font-size: .9rem;
		}

		.info-data {
			font-size: .8rem
		}

		.copyritght {
			font-size: .7rem;
		}
	}
</style>