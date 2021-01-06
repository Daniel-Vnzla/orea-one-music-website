<script>

</script>
<div class="booble-background">
	<div class="booble large" ></div>
	<div class="booble medium" ></div>
	<div class="booble small" ></div>
</div>

<style>

	.booble-background {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.booble {
		position: absolute;
		--size: 400px;
		--booble-color: #f3df32;
		background-color: var(--booble-color);
		border-radius: 50%;
	}

	.large {
		top: 50px;
		left: 100px;
		width: var(--size);
		height: var(--size);
	}

	.medium {
		bottom: 400px;
		right: 100px;
		width: calc( var(--size) / 2 );
		height: calc( var(--size) / 2 );
	}

	.small {
		top: 450px;
		right: 200px;
		width: calc( var(--size) / 3.5 );
		height: calc( var(--size) / 3.5 );
	}

	@media (max-width: 700px) {
		.large {
			left: 20px;
			top: 300px
		}

		.small {
			top: auto;
			bottom: 700px;
			right: 0;
			left: 10px;
		}
	}

</style>			