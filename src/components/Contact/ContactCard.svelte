<script>
	import { animationOnObserve } from '../../assets/actions.js';
	import { fadeToRight } from '../../assets/anime.js';

	export let title;
	export let name;
	export let email;
	export let telephone;

	const observerParams = {
		threshold: 0.1,
	}
</script>

<div class="contact-card" use:animationOnObserve={fadeToRight(observerParams)}>
	<h4 class="title">{title}</h4>
	<p class="name">{name}</p>
	<p class="email">{email}</p>
	<p class="telephone">{telephone}</p>
</div>


<style>
	.contact-card {
		background-color: var(--primary-color);
		padding: 2rem;
		font-style: italic;
		color: var(--secondary-color);
		text-align: center;
		font-size: 1.3rem;
		border-radius: 5px;
	}

	.title {
		font-style: normal;
		font-weight: bold;
		font-size: 2rem;
	}


</style>