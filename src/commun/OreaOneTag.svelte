
<div class="oreaone">
	<div class="oreaone-wrapper">
		<h2 class="text">
			orea one - orea one - orea one - orea one - orea one - orea one - orea one - orea one
		</h2>
	</div>
</div>

<style>
	.oreaone {
		position: absolute;
		top: -20px;
		right: -150px;
		text-align: center;
		font-family: "Road rage";
		width: 600px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(45deg);
	}

	.oreaone-wrapper {
		position: relative;
		font-size: 3rem;
		width: 100%;
		padding: 15px 0;
		color: rgba(144, 110, 10, .1);
		background: var(--primary-color);
	}

	.text {
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

</style>