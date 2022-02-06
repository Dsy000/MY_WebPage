document.addEventListener("mousemove", (e) => {
	gsap.to(".particle", {
		left: e.clientX,
		top: e.clientY,
		stagger: -0.02
	});
});