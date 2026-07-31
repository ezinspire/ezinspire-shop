document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("reveal-active");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));
});
