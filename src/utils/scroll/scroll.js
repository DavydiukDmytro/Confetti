const scrollToSection = (element, e) => {
	e.preventDefault();

	const sectionId = element.toLowerCase();
	const section = document.getElementById(sectionId);
	console.log(sectionId);
	console.log(section);
	if (section) {
		const offset = section.offsetTop - 70;
		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});
	}
};

export default scrollToSection;
