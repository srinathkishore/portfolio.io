document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scroll-container');
    const icons = document.querySelectorAll('.icon');
    const sections = document.querySelectorAll('section');

    const updateActiveElements = () => {
        const scrollPosition = container.scrollTop + window.innerHeight / 2;
        let activeIndex = sections.length - 1;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeIndex = index;
            }
        });

        sections.forEach((section, index) => {
            section.classList.toggle('active', index === activeIndex);
        });

        icons.forEach((icon, index) => {
            icon.classList.toggle('active', index === activeIndex);
        });
    };

    container.addEventListener('scroll', updateActiveElements);

    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const targetSection = document.getElementById(e.target.dataset.section);
            container.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    updateActiveElements();

    const descriptionElement = document.getElementById('description');
    const text = "A passionate developer and technology enthusiast";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            descriptionElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();
});