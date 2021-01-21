import anime from 'animejs';

const parameters = {
	duration: 600,
	easing: "easeInBack",
}
const { duration, easing } = parameters;

export const homeAnime =() => {
	anime.timeline({
		duration
	})
	.add({
		targets: "#anime-fade-top-text",
	  translateY: [-50, 0],
	  opacity: [0, 1],
	  easing
	})
	.add({
		targets: "#anime-redes-home .icon",
	  translateY: [-50, 0],
	  opacity: [0, 1],
	  delay: anime.stagger(100, { easing: 'easeOutQuad' }),
	});

	anime({
		targets: "#anime-fade-bottom-text",
		translateY: [50, 0],
	  opacity: [0, 1],
	  easing,
	  duration,
	});
}

export const animeLazyLoadingImg = ({ target }) => {
	target.style.opacity = 1;
	anime({
		targets: target,
	  opacity: [0, 1],
	  scale: [2, 1],
	  easing: "easeOutQuad",
	  duration: 33500,
	});
}

export const biografyAnime = () => {
	anime.timeline({
		duration,
	  easing
	})
	.add({
		targets: "#bio-title",
		translateY: [-20, 0],
	  opacity: [0, 1],
	})
	.add({
		targets: "#bio-name",
		translateX: [-20, 0],
	  opacity: [0, 1],
	})
	.add({
		targets: "#bio-titles",
		translateY: [20, 0],
	  opacity: [0, 1],
	})
	.add({
		targets: "#orea-one-img",
		translateX: [20, 0],
	  opacity: [0, 1],
	}, "+=500");
}

export const musicAnime = () => {
	anime.timeline({
		duration,
		easing,
	})
	.add({
		targets: "#music-title",
		translateY: [20, 0],
		opacity: [0, 1],
	})
	.add({
		targets: "#music-legend",
		translateY: [-20, 0],
		opacity: [0, 1],
	}, "-=200")
	.add({
		targets: "#songs-title",
		translateX: [-20, 0],
		opacity: [0, 1],
	}, "-=200")
	.add({
		targets: "#decorator-line",
		scale: [0,1],
	}, "-=200")
	.add({
		targets: "#songs-list",
	  opacity: [0, 1],
	});
}

export const videoRouteAnime = () => {
	anime.timeline({
		duration,
		easing
	})
	.add({
		targets: "#video-title",
		translateY: [20, 0],
	  opacity: [0, 1],
	})
	.add({
		targets: "#subscribe-section",
		translateY: [-20, 0],
	  opacity: [0, 1],
	})
	.add({
		targets: "#video-list",
		translateX: [-20, 0],
	  opacity: [0, 1],
	})
}