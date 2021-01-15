<script>
	import Home from '../components/Home/Home.svelte';
	import Music from '../components/Home/Music.svelte';
	import Biografy from '../components/Home/Biografy.svelte';
	import Streaming from '../components/Home/Streaming.svelte';

	import Footer from '../components/Footer/Footer.svelte';
	import Loading from '../commun/Loading.svelte';
</script>

<section class="home">
	<Home />
	<Music />
	<Biografy />
	<Streaming />
	<Footer />
</section>

<style>
	.home {
		position: relative;
		min-height: 100vh;
	}

	.home-wrapper {
		width: 90%;
		margin: 0 auto;
	}


</style>