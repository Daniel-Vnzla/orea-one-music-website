<script>
	import router from 'page';

	import Header from './components/Header/Header.svelte';
	import Home from './routes/Home.svelte';
	import Biografy from './routes/Biografy.svelte';
	import Music from './routes/Music.svelte';
	import Contact from './routes/Contact.svelte';
	import Videos from './routes/Videos.svelte';
	import Error404 from './routes/Error404.svelte';

	let activeNavbar = true;
	let page = null;
	let currentPath = "Home";

	router('/', () => {
		currentPath = "Home"
		page = Home;
	});

	router('/Biografy', () =>{
		currentPath = "Biografy"
	 page = Biografy;
	}) ;

	router('/Music', () => {
		currentPath = "Music"
		page = Music;
	});

	router('/Contact', () => {
		currentPath = "Contact"
		page = Contact;
	});

	router('/Videos', () => {
		currentPath = "Videos"
		page = Videos;
	});

	router('*', () => {
		page = Error404;
	});

	router.start()
</script>

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
	}

	.right-section {
		width: 100%;
		height: 100%;
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