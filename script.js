document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("mainHeader");
    const heroBg = document.getElementById("heroBg");
    const exploreBtn = document.getElementById("exploreBtn");
    const productSection = document.getElementById("curations");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
        if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    });

    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            productSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
