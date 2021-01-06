<script>
	import router from 'page';

	import Header from './components/Header/Header.svelte';
	import Home from './routes/Home.svelte';
	import Biografy from './routes/Biografy.svelte';
	import Music from './routes/Music.svelte';
	import Contact from './routes/Contact.svelte';

	let activeNavbar = true;
	let page = null;

	router('/', () => page = Home)
	router('/Biografy', () => page = Biografy)
	router('/Music', () => page = Music)
	router('/Contact', () => page = Contact)

	router.start()

	$: console.log(router.base())
</script>

<main class="main">

	<Header bind:activeNavbar />
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
		margin-left: 5rem;
		transition: margin var(--transition-speed);
	}

	.activeNavbar {
		margin-left: 16rem;
	}

	@media (max-width: 1024px) {
		.right-section {
			margin-left: 0;
		}
	}
</style>