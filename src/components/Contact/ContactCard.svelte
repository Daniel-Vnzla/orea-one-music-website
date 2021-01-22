<script>

	export let title;
	export let name;
	export let email;
	export let telephone;

	
</script>

<div class="contact-card" >
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