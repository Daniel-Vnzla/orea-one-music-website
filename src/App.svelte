<script>
	import Header from './components/Header/Header.svelte';
	import Biografy from './routes/Biografy.svelte';

	let activeNavbar = true;
</script>

<main class="main">
	
	<Header bind:activeNavbar />
	<div class="right-section" class:activeNavbar >
		<Biografy />
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