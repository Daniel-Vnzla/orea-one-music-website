<script>
	import SvelteSeo from "svelte-seo";
	import router from 'page';

	import Header from './components/Header/Header.svelte';
	import Home from './routes/Home.svelte';
	import Biografy from './routes/Biografy.svelte';
	import Music from './routes/Music.svelte';
	import Contact from './routes/Contact.svelte';
	import Videos from './routes/Videos.svelte';
	import Error404 from './routes/Error404.svelte';

	let activeNavbar = false;
	let page = null;
	let currentPath = "Home";

	router('/', () => {
		router.redirect("/Inicio")
	});

	router('/Inicio', () => {
		currentPath = "Inicio"
		page = Home;
	});

	router('/Biografía', () =>{
		currentPath = "Biografía"
	 page = Biografy;
	}) ;

	router('/Música', () => {
		currentPath = "Música"
		page = Music;
	});

	router('/Contacto', () => {
		currentPath = "Contacto"
		page = Contact;
	});

	router('/Videos', () => {
		currentPath = "Videos"
		page = Videos;
	});

	router('*', () => {
		currentPath = "Error404"
		page = Error404;
	});

	router.start()
</script>

<SvelteSeo
  title="Orea One - Website - Trappin´ Life Baby "
  description="Orea One, Trappin´Life Baby, Cantante, Músico, Compositor"
  author="Orea One"
  keywords="OREA ONE WEBSITE, MÚSICA, CANTANTE, TRAPPIN´ LIFE BABY, ANTONIO JAVIER ELTIT CHELLEW, COMPOSITOR, LA AMIGA"

 openGraph={{	
  title: 'Orea One - Website',
  description: 'Orea one, Trappin´Life Baby, Cantante, Músico, Compositor',
  url: 'https://oreaone.netlify.app/Inicio',
  type: 'website',
  images: [
    {
      url: 'https://image.shutterstock.com/image-photo/three-pork-carnitas-street-tacos-600w-441287707.jpg',
      width: 850,
      height: 650,
      alt: 'Orea One Website'
    }
   ]
}}
/>


<main class="main">
	<Header bind:activeNavbar bind:currentPath />
	<div class="right-section" class:activeNavbar >
		<svelte:component this={page} />
	</div>
</main>

<style>
	.main {
		position: relative;
		display: flex;
		overflow: hidden;
	}

	.right-section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		margin-left: 5rem;
		transition: margin var(--transition-speed);
	}

	.activeNavbar {
		margin-left: 17rem;
	}

	@media (max-width: 1024px) {
		.right-section {
			padding-bottom: 4.5rem;
			margin-left: 0;
		}
	}
</style>