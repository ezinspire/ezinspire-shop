document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("mainHeader");
    const heroBg = document.getElementById("heroBg");
    const exploreBtn = document.getElementById("exploreBtn");
    const productSection = document.getElementById("curations");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (heroBg && currentScroll < window.innerHeight) {
            heroBg.style.transform = `translate3d(0, ${currentScroll * 0.35}px, 0) scale(1.12)`;
        }
    });

    if (exploreBtn && productSection) {
        exploreBtn.addEventListener("click", () => {
            productSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const revealOptions = {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const elementsToReveal = document.querySelectorAll(".scroll-reveal");
    elementsToReveal.forEach(element => revealObserver.observe(element));

    let currentBagCount = 0;
    const bagActionButtons = document.querySelectorAll(".bag-action-trigger");
    const bagDisplayValue = document.getElementById("bagCount");

    bagActionButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentBagCount++;
            if (bagDisplayValue) {
                bagDisplayValue.textContent = currentBagCount;
                bagDisplayValue.parentElement.style.transform = "scale(1.2)";
                bagDisplayValue.parentElement.style.color = "#111111";
                
                setTimeout(() => {
                    bagDisplayValue.parentElement.style.transform = "scale(1)";
                    bagDisplayValue.parentElement.style.color = "#8a7355";
                }, 300);
            }
        });
    });
});
