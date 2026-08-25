document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.getElementById("mainHeader");
    const heroBg = document.getElementById("heroBg");
    const exploreBtn = document.getElementById("exploreBtn");
    const productSection = document.getElementById("curations");
    
    const menuToggle = document.getElementById("menuToggle");
    const drawerClose = document.getElementById("drawerClose");
    const navDrawer = document.getElementById("navDrawer");

    window.addEventListener("scroll", () => {
        const currentScrollOffset = window.scrollY;
        
        if (currentScrollOffset > 45) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (heroBg && currentScrollOffset < window.innerHeight) {
            heroBg.style.transform = `translate3d(0, ${currentScrollOffset * 0.32}px, 0) scale(1.15)`;
        }
    });

    if (menuToggle && navDrawer) {
        menuToggle.addEventListener("click", () => {
            navDrawer.classList.add("drawer-active");
        });
    }

    if (drawerClose && navDrawer) {
        drawerClose.addEventListener("click", () => {
            navDrawer.classList.remove("drawer-active");
        });
    }

    document.querySelectorAll(".drawer-item-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navDrawer) navDrawer.classList.remove("drawer-active");
        });
    });

    if (exploreBtn && productSection) {
        exploreBtn.addEventListener("click", () => {
            productSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const revealConfigurations = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
    };

    const intersectionEngine = new IntersectionObserver((entries, engine) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                engine.unobserve(entry.target);
            }
        });
    }, revealConfigurations);

    const elementsRequiringReveal = document.querySelectorAll(".scroll-reveal");
    elementsRequiringReveal.forEach(el => intersectionEngine.observe(el));

    let globalBagCounter = 0;
    const acquireButtons = document.querySelectorAll(".acquire-action-trigger");
    const counterDisplayNode = document.getElementById("bagCount");

    acquireButtons.forEach(button => {
        button.addEventListener("click", () => {
            globalBagCounter++;
            
            if (counterDisplayNode) {
                counterDisplayNode.textContent = globalBagCounter;
                
                counterDisplayNode.parentElement.style.transform = "scale(1.25)";
                counterDisplayNode.parentElement.style.color = "#111111";
                
                setTimeout(() => {
                    counterDisplayNode.parentElement.style.transform = "scale(1)";
                    counterDisplayNode.parentElement.style.color = "#8a7355";
                }, 350);
            }
        });
    });
});
