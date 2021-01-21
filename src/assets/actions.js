import anime from 'animejs';

export const infiniteScrolling = (node, actions) => {
	const observer = new IntersectionObserver(async (entries) => {
		if (entries[0].isIntersecting) {
			console.log("visible")
			if (actions) {
				await actions.callback()
			}
		}
	});

	if (node) observer.observe(node);
}

const createObserver = (enter, leave) => {
	const observer = new IntersectionObserver(([ entry ]) => {
		if (entry.isIntersecting) enter();
		else leave();
	},{
	  root: null,
	  threshold: [0.3],
	})
	return observer;
}

export const animationOnObserve = (node, callbacks) => {
	let observer;
	if (callbacks) {
		observer = createObserver(
			() => callbacks.enter(node),
			() => callbacks.leave(node));
		observer.observe(node)
	}

	return {
		destroy() {
			observer.unobserve(node);
		}
	}
}

const enter = (node, parameters) => {
	anime({
		targets: node,
		...parameters
	})
}

const leave = (node, parameters) => {
	anime({
		targets: node,
		...parameters
	})
}

export const fadeRight = {
	translateX: [-30, 0],
	opacity: [0, 1],
	duration: 600,
	easing: "easeOutQuad",
}

export const fadeLeft = {
	translateX: [30, 0],
	opacity: [1, 0],
	duration: 600,
	easing: "easeOutQuad",
}

export const useAnimationParameters = (paramsEnter, paramsLeft) => ({ 
	enter: (node) => enter(node, paramsEnter), 
	leave: (node) => leave(node, paramsLeft),
})