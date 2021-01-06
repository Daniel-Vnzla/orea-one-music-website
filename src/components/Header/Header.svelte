<script>
	import Ipod from '../../icons/ipod.svg';
	import Quill from '../../icons/quill.svg';
	import Headphones from '../../icons/headphones.svg';
	import Speaker from '../../icons/speaker.svg';
	import AdressBook from '../../icons/address-book.svg';
	import Youtube from '../../icons/youtube.svg';

	import ResizeNavbarBtn from './ResizeBtn.svelte';
	import NavBarRedes from './NavbarRedes.svelte';

	const iconsSize = "100%";
	const iconsColor = "var(--text-color)";

	export let activeNavbar = true;

</script>


<header class="header" class:activeNavbar >
	<h1 class="logo">
		<a class="title" href="/" title="Home">
			Orea One
		</a> 
	</h1>
	<nav class="navbar">
		<ul class="navbar-nav">
			<li class="nav-item" data-tooltip="Inicio" ><a class="nav-link" href="/" title="Inicio">
				<Speaker 
				  class="nav-menu-icon"
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Inicio</span>
			</a></li>
			<li class="nav-item active" data-tooltip="Biografía" ><a class=" nav-link" href="/Biografy" title="Biografía">
				<Quill 
				  class="nav-menu-icon"
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Biografía</span>
			</a></li>
			<li class="nav-item" data-tooltip="Música" ><a class=" nav-link" href="/Music" title="Música">
				<Headphones 
				  class="nav-menu-icon"
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Música</span>
			</a></li>
				<li class="nav-item" data-tooltip="Videos" ><a class=" nav-link" href="/Videos" title="Videos">
				<Youtube 
				  class="nav-menu-icon"
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Videos</span>
			</a></li>
				<li class="nav-item" data-tooltip="Contacto" ><a class=" nav-link" href="/Contact" title="Contacto">
				<AdressBook 
				  class="nav-menu-icon"
					aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          width={iconsSize} 
          height={iconsSize} 
          fill={iconsColor} />
				<span class="link-text">Contacto</span>
			</a></li>
		</ul>
	</nav>
	<NavBarRedes bind:activeNavbar />
	<ResizeNavbarBtn bind:activeNavbar />
</header><!-- /header -->


<style>

	.header {
		position: fixed;
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
		text-align: center;
		color: var(--text-color);
		width: 5rem;
		height: 100vh;
		background-color: var(--bg-color);
		transition: width var(--transition-speed) ease;
		z-index: 1000;
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

	.navbar {
		width: 100%;
	}

	.nav-item {
		position: relative;
		height: 5rem;
		width: 100%;
	}

	.nav-item::before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		height: 100%;
		width: 5.05rem;
		opacity: 0;
		background-image: linear-gradient(to top right, transparent 50%, var(--primary-color) 0);
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
		width: 100%;
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

	.activeNavbar {
		width: 16rem;
	}


	.activeNavbar .link-text {
		visibility: visible;
		transform: translateX(5px);
		opacity: 1;
	}

	.activeNavbar .title {
		visibility: visible;
		opacity: 1;
		transition: 
			opacity var(--transition-speed),
			visibility var(--transition-speed);
		transition-delay: var(--transition-speed);
	}

	.header:not(.activeNavbar) .nav-item::after {
		position: absolute;
		content: attr(data-tooltip);
		top: 50%;
		right: 0;
		background: var(--bg-color);
		padding: 5px 12px;
		border-radius: 3px;
		font-weight: bold;
		opacity: 0;
		visibility: hidden;
		transform: translate(calc(100% + 5px), -50%);
		transition: opacity var(--transition-speed);
	}

	.activeNavbar .nav-item.active::before {
		opacity: 1;
		transition: opacity var(--transition-speed);
		transition-delay: var(--transition-speed);
	}

	.nav-item.active .link-text {
		color: var(--primary-color);
	}

	.nav-item.active {
		background: #000;
	}

	.nav-item:hover {
		background: #000;
	}

	.nav-item:hover .link-text {
		color: var(--primary-color);
	}


	.header:not(.activeNavbar) .nav-item:hover::after {
		visibility: visible;
		opacity: 1;
	}

	@media (max-width: 1060px) {
		.header {
			padding-top: 0;
			bottom: 0;
			width: 100%;
			height: 5rem;
		}

		.header .logo {
			display: none
		} 

		.navbar-nav {
			flex-direction: row;
			justify-content: center
		}

		.header .nav-item::after {
			display: none
		}

		.header .nav-item::before {
			display: none
		}

		.nav-item {
			width: 5rem;
		}

		.link-text {
			display: none;
		}
		
	}
	

</style>