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