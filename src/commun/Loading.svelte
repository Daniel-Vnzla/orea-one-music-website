<div class="loading-container">
	<div class="container">
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
	</div>
</div>

<style type="text/scss" >
	.loading-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: var(--bg-color-secondary);
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
	} 

	.container
	{
		--duration: 1.5s;
		--container-size: 250px;
		--box-size: 33px;
		--box-border-radius: 15%;
		width: var(--container-size);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.box
	{
		width: var(--box-size);
		height: var(--box-size);
		position: relative;
		display: block;
		transform-origin: -50% center;
		border-radius: var(--box-border-radius);
		
		&:after
		{
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			background-color: var(--primary-color);
			border-radius: var(--box-border-radius);
			box-shadow: 0px 0px 10px 2px rgba(224, 218, 24, 0.4);
		}
		
		&:nth-child(1)
		{
			animation: slide var(--duration) ease-in-out infinite alternate;
			&:after{ animation: color-change var(--duration) ease-in-out infinite alternate; }
		}
		
		@for $i from 1 to 5 
		{
			&:nth-child(#{$i + 1})
			{	
				animation: flip-#{$i} var(--duration) ease-in-out infinite alternate;
				&:after{ animation: squidge-#{$i} var(--duration) ease-in-out infinite alternate; }
			}
		}
		
		&:nth-child(2):after{ background-color: var(--primary-color); }
		&:nth-child(3):after{ background-color: var(--primary-color); }	
		&:nth-child(4):after{ background-color: var(--primary-color); }
		&:nth-child(5):after{ background-color: var(--primary-color); }
	}

	@keyframes slide
	{
		0% { 
			background-color: var(--primary-color);
			transform: translatex(0vw);
		}
		100% { 
			background-color: #f7d633; 
			transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25))); 
		}
	}

	@keyframes color-change
	{
		0% { background-color: var(--primary-color); }
		100% { background-color: #f7d633; }
	}

	@for $i from 1 to 5 
	{	
	    @keyframes flip-#{$i} {
	      0%, #{$i * 15}% { transform: rotate(0); }  
	      #{$i * 15 + 20}%, 100% { transform: rotate(-180deg); }
	    }
		
		@keyframes squidge-#{$i}
		{
			#{$i * 15 - 10}% { transform-origin: center bottom; transform: scalex(1) scaley(1);}
			#{$i * 15}% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7);}
			#{$i * 15 + 10}%, #{$i * 15 + 5}% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4);}
			#{$i * 15 + 40}%, 100% { transform-origin: center top; transform: scalex(1) scaley(1);}
			#{$i * 15 + 25}% { transform-origin: center top; transform: scalex(1.3) scaley(0.7);}
		}
	}
</style>