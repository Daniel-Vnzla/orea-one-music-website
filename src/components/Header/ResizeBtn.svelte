<script>
	import Resize from '../../icons/arrow-left-circle.svg';

	export let activeNavbar = false;

	const handleNavbarResize = () => {
		activeNavbar = !activeNavbar;
	}
</script>

<button 
	class:activeNavbar
	class="resize-navbar-btn"
	on:click={handleNavbarResize}
	>
	<div class="resize-navbar-icon">
		<Resize width="100%" height="100%" fill="#fff" />
	</div>
</button>

<style>
		.resize-navbar-btn {
		position: absolute;
		top: 10px;
		right: 0;
		background-color: var(--bg-color);
		width: 40px;
		height: 40px;
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
		transform: translateX(97%);
		transition: 
			border-radius var(--transition-speed);
	}

	.resize-navbar-icon {
		width: 100%;
		height: 100%;
		padding: 3px;
		transform: rotate(-180deg);
	 	transition: transform var(--transition-speed);
	}

	.activeNavbar .resize-navbar-icon {
		transform: rotate(0);
	} 


	@media (max-width: 800px) {
		.resize-navbar-btn {
			display: none
		}
	}

</style>