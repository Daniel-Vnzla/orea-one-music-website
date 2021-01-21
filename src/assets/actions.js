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
	  threshold: [0.2],
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
