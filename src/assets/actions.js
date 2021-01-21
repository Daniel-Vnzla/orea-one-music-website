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

const intersectionObserver = (enter, leave) => {
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
		observer = intersectionObserver(
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
