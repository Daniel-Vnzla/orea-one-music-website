<script>
	import Header from './components/Header/Header.svelte';
	import Biografy from './routes/Biografy.svelte';

	let activeNavbar = false;
</script>

<main class="main">
	<Header bind:activeNavbar />
	<div class="right-section" class:activeNavbar >
		<div class="right-section-wrapper">
			<Biografy />
		</div>
	</div>
</main>

<style>
	.main {
		display: flex;
	}

	.right-section {
		margin-left: 5rem;
		transition: margin var(--transition-speed);
	}

	.activeNavbar {
		margin-left: 16rem;
	}

	.right-section-wrapper {
		margin: 0 auto;
		max-width: 90%;
	}

	@media (max-width: 800px) {
		.right-section {
			margin-left: 0;
		}
	}
</style>