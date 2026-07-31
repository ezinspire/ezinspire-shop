document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 30);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));

    let count = 0;
    document.querySelectorAll(".bag-action-trigger").forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            document.getElementById("bagCount").textContent = count;
        });
    });
});
