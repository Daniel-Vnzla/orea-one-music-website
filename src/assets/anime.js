import anime from 'animejs';

const fadeRightEnter = (node) => {
	anime({
		targets: node,
		opacity: [0, 1],
		translateX: [-30, 0],
		easing: "easeInBack",
		duration: 600,
	})
}

const fadeRightLeave = (node) => {
	anime({
		targets: node,
		opacity: [1, 0],
		translateX: [0, 30],
		easing: "easeInBack",
		duration: 600,
	})
}

export const fadeToRight= (params) => ({
	onEnter: fadeRightEnter,
	onLeave: fadeRightLeave,
	params: params,
})

const fadeLeftEnter = (node) => {
	anime({
		targets: node,
		opacity: [0, 1],
		translateX: [30, 0],
		easing: "easeInBack",
		duration: 600,
	})
}

const fadeLeftLeave = (node) => {
	anime({
		targets: node,
		opacity: [1, 0],
		translateX: [0, -30],
		easing: "easeInBack",
		duration: 600,
	})
}

export const fadeToLeft = (params) => ({
	onEnter: fadeLeftEnter,
	onLeave: fadeLeftLeave,
	params: params,
})