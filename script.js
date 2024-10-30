// JavaScript for animations
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll("section");
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            element.classList.add("visible");
        }
    });
});
