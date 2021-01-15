<script>
	import ContactCard from '../Contact/ContactCard.svelte';
</script>

<section class="contact">
	<div class="titles">
		<h2 class="title">Contacto (Trabajo)</h2>
		<h4 class="legend">Interesado en negocios con Orea One?</h4>
	</div>

	<div class="contact-list">
	<ContactCard 
		title="MANAGER PERSONAL"
		name="Guy Dayan"
		email="guy@thegoola.com"
		telephone="+972 522 509 749"
		/>
		<ContactCard 
		title="MANAGER PERSONAL"
		name="Guy Dayan"
		email="guy@thegoola.com"
		telephone="+972 522 509 749"
		/>
		<ContactCard 
		title="MANAGER PERSONAL"
		name="Guy Dayan"
		email="guy@thegoola.com"
		telephone="+972 522 509 749"
		/>
		<ContactCard 
		title="MANAGER PERSONAL"
		name="Guy Dayan"
		email="guy@thegoola.com"
		telephone="+972 522 509 749"
		/>
	</div>
</section>

<style>
	.contact {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 5rem 0;
		text-align: center;
		min-height: 100vh;
	}

	.title {
		line-height: 4rem;
	}

	.legend {
		font-size: 1.7rem;
		color: #ccc;
	}

	.contact-list {
		width: 90%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}
</style>