window.addEventListener('load', () => {
	setEfectitos();
	window.addEventListener('scroll', () => {
		setEfectitos();
	});
});

function setEfectitos() {
	const elFadeIn = document.querySelectorAll('.efecto-fade-in');
	for (let index = 0; index < elFadeIn.length; index++) {
		const element = elFadeIn[index];

		if (isInViewport(element)) {
			element.classList.add('fade-in-animation');
		}
	}

	const elSlideLeft = document.querySelectorAll('.efecto-slide-left');
	for (let index = 0; index < elSlideLeft.length; index++) {
		const element = elSlideLeft[index];

		if (isInViewport(element)) {
			element.classList.add('slide-left-animation');
		}
	}

	const elSlideRight = document.querySelectorAll('.efecto-slide-right');
	for (let index = 0; index < elSlideRight.length; index++) {
		const element = elSlideRight[index];

		if (isInViewport(element)) {
			element.classList.add('slide-right-animation');
		}
	}
}

function isInViewport(element) {
	const position = element.getBoundingClientRect();
	return (
		position.top < window.innerHeight * 0.75 && position.bottom >= 0
	);
}
