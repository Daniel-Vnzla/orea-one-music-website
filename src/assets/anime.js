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


export const fadeUpIconsEnter = (node) => {
	anime({
		targets: [node, '.anime-icon'],
		opacity: [0, 1],
		translateY: [-30, 0],
		duration: 600,
		delay: anime.stagger(100, { easing: 'easeOutQuad' }),
	})
}

export const fadeUpIconsLeave = (node) => {
	anime({
		targets: [node, '.anime-icon'],
		opacity: [1, 0],
		translateY: [0, 30],
		duration: 600,
		delay: anime.stagger(100, { easing: 'easeOutQuad' }),
	})
}

export const fadeToLUpIcons = (params) => ({
	onEnter: fadeUpIconsEnter,
	onLeave: fadeUpIconsLeave,
	params: params,
})
