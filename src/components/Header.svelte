<script>
	import Ipod from '../icons/ipod.svg';
	import Quill from '../icons/quill.svg';
	import Headphones from '../icons/headphones.svg';
	import Speaker from '../icons/speaker.svg';

	const iconsSize = "100%";
	const iconsColor = "var(--text-color)";
</script>

<header class="header">
	<h1 class="logo">
		<a class="title" href="/" title="Home">
			Orea One
		</a> 
	</h1>
	<nav class="navbar">
		<ul class="navbar-nav">
			<li class="nav-item" ><a class=" nav-link active" href="/Inicio" title="Inicio">
				<Speaker 
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Inicio</span>
			</a></li>
			<li class="nav-item" ><a class=" nav-link" href="/Biografía" title="Biografía">
				<Quill 
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Biografía</span>
			</a></li>
			<li class="nav-item" ><a class=" nav-link" href="/Música" title="Música">
				<Headphones 
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Música</span>
			</a></li>
				<li class="nav-item" ><a class=" nav-link" href="/Videos" title="Videos">
				<Quill 
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Videos</span>
			</a></li>
				<li class="nav-item" ><a class=" nav-link" href="/Contacto" title="Contacto">
				<Quill 
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Contacto</span>
			</a></li>
		</ul>
		<section class="redes">
			Sigue a Orea One en sus redes!
		</section>
	</nav>
	<button class="resize-navbar-btn">
		close
	</button>
</header><!-- /header -->


<style>

	.resize-navbar-btn {
		position: absolute;
		top: 0;
		right: 0;
		transform: translateX(100%);
	}
	header {
		position: relative;
		padding-top: 2rem;
		text-align: center;
		color: var(--text-color);
		position: fixed;
		width: 5rem;
		height: 100vh;
		background-color: var(--bg-color);
		transition: width var(--transition-speed) ease;
	}

	.logo {
		position: relative;
		width: 100%;
		font-size: 2.5rem;
		font-family: "Road Rage";
		margin-bottom: 3rem;
		height: 3rem;
	}

	.title {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: center;
		width: 100%;
		visibility: hidden;
		opacity: 0;
		color: var(--text-color);
		transition: none;
	}

	.nav-item {
		position: relative;
		height: 5rem;
		width: 100%;
	}

	.navbar-nav {
		display: flex;
		flex-direction: column;
	}

	.nav-link {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		height: 100%;
		color: var(--text-color);
	}

	.link-text {
		position: absolute;
		visibility: hidden;
		font-size: 1.2rem;
		font-weight: bold;
		transition: 
			opacity var(--transition-speed),
			transform var(--transition-speed),
			visibility var(--transition-speed);
		margin-left: 5rem;
		opacity: 0;
	}

	.nav-item:hover {
		background: #464646;
	} 

	.header:hover {
		width: 16rem;
	}

	.header:hover .link-text {
		visibility: visible;
		transform: translateX(5px);
		opacity: 1;
	}

	.header:hover .title {
		visibility: visible;
		opacity: 1;
		transition: 
			opacity var(--transition-speed),
			visibility var(--transition-speed);
		transition-delay: var(--transition-speed);
	}

	.redes {
		margin-top: 100%;
	}
	

</style>