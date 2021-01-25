<script>
	export let errorMessage;
	export let errorName;
</script>

<div class="error">
	<p class="error-text">
		<span class="error-name">{errorName}</span> | {errorMessage}
	</p>
</div>

<style>
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
	}

	.error-text {
		text-align: center;
		font-size: 2.4rem;
	}

	.error-name {
		color: red;
	}
	@media (max-width: 700px) {
		.error-text {
			font-size: 1.4rem
		}
	}
</style>