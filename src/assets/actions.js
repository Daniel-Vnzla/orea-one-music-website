const createObserver = ({ onEnter, onLeave }, params) => {
	const defaultObserverParams = {
		root: null,
		threshold: 0.3,
	};
	
	const observer = new IntersectionObserver(([ entry ]) => {
		if (entry.isIntersecting) onEnter();
		else onLeave();
	},{...defaultObserverParams, ...params});

	return observer;
}

export const infiniteScrolling = (node, { onEnter, onLeave, params }) => {
	let observer;
	if (onEnter && onLeave) {
		observer = createObserver({ 
			onEnter: () => onEnter(node), 
			onLeave: () => onLeave(node) },
			params);
		observer.observe(node)
	}
	return {
		destroy() {
			observer.unobserve(node);
		}
	}
}

export const animationOnObserve = (node, { onEnter, onLeave, params}) => {
	let observer;
	if (onEnter && onLeave) {
		observer = createObserver({ 
			onEnter: () => onEnter(node), 
			onLeave: () => onLeave(node) },
			params);
		observer.observe(node)
	}
	return {
		destroy() {
			observer.unobserve(node);
		}
	}
}