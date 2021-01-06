
<div class="oreaone">
	<div class="oreaone-wrapper">
		<h3 class="text">
			orea one - orea one - orea one - orea one - orea one - orea one - orea one - orea one
		</h3>
	</div>
</div>

<style>
	.oreaone {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-family: "Road rage";
		width: 300px;
		height: 300px;
	}

	.oreaone-wrapper {
		position: relative;
		width: 600px;
		padding: 15px 0;
		color: rgba(144, 110, 10, .1);
		background: var(--primary-color);
		transform: rotate(45deg);
	}

	.text {
		font-size: 3rem;
		white-space: nowrap;
		width: 100%;
		animation: scrollText 33s infinite linear;
		animation-delay: 3s;
		transform: translateX(150px);
	}

	@keyframes scrollText {
		0% {
			transform: translateX(150px);
		}

		100% {
			transform: translateX(-100%);
		}

	}

	@media (max-width: 700px) {
		.oreaone {

		}
	}

</style>