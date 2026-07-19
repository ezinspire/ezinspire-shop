document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.carousel-card');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const fractionIndicator = document.getElementById('fraction');
    
    let activeIndex = 0;

    function transitionCarousel(targetIndex) {
        cards.forEach((card, idx) => {
            card.classList.remove('active', 'next');
            
            if (idx === targetIndex) {
                card.classList.add('active');
            } else if (idx === (targetIndex + 1) % cards.length) {
                card.classList.add('next');
            }
        });

        const readableCurrent = String(targetIndex + 1).padStart(2, '0');
        const readableTotal = String(cards.length).padStart(2, '0');
        fractionIndicator.textContent = `${readableCurrent} / ${readableTotal}`;
    }

    nextBtn.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % cards.length;
        transitionCarousel(activeIndex);
    });

    prevBtn.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
        transitionCarousel(activeIndex);
    });
       
    const menuTrigger = document.getElementById('menu-trigger');
    const navOverlay = document.getElementById('nav-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    function toggleMenu() {
       
        document.querySelector('.luxury-header').classList.toggle('active-nav');
       
        const isOpened = navOverlay.classList.toggle('menu-open');
        
        menuTrigger.setAttribute('aria-label', isOpened ? 'Close Menu' : 'Open Menu');
        navOverlay.setAttribute('aria-hidden', !isOpened);
    }

    menuTrigger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navOverlay.classList.contains('menu-open')) {
                toggleMenu();
            }
        });
    });
    transitionCarousel(activeIndex);
        
    const deckSlider = document.getElementById('product-deck');
    const deckPrev = document.getElementById('deck-prev');
    const deckNext = document.getElementById('deck-next');

    if (deckSlider && deckPrev && deckNext) {
        
        const getScrollStep = () => deckSlider.clientWidth * 0.4;

        deckNext.addEventListener('click', () => {
            deckSlider.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        deckPrev.addEventListener('click', () => {
            deckSlider.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initVerticalInfiniteShelf();
});

function initVerticalInfiniteShelf() {
    const grid = document.getElementById('infinite-shelf-grid');
    const sentinel = document.getElementById('infinite-shelf-sentinel');
    
    if (!grid || !sentinel) return;

    const mockProductDatabase = [
        { name: "ASYMMETRIC SILK CAMISOLE", price: "£210.00", img: "product-1.jpg" },
        { name: "OVERSIZED LINEN SHIRT", price: "£280.00", img: "product-2.jpg" },
        { name: "MINIMALIST LEATHER BELT", price: "£140.00", img: "product-3.jpg" },
        { name: "RELAXED TAILORED TROUSER", price: "£360.00", img: "product-4.jpg" }
    ];

    function createProductCardMarkup(product) {
        return `
            <div class="shelf-product-card" style="opacity: 0; transform: translateY(20px); transition: all 0.8s ease;">
                <div class="shelf-img-holder">
                    <img src="${product.img}" alt="${product.name}">
                    <button class="shelf-basket-trigger">ADD TO BASKET</button>
                </div>
                <div class="shelf-card-info">
                    <h3 class="shelf-item-name">${product.name}</h3>
                    <span class="shelf-item-price">${product.price}</span>
                </div>
            </div>
        `;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                mockProductDatabase.forEach((product) => {
                    const tempWrapper = document.createElement('div');
                    tempWrapper.innerHTML = createProductCardMarkup(product);
                    const newCard = tempWrapper.firstElementChild;
                    
                    grid.appendChild(newCard);
                    
                    setTimeout(() => {
                        newCard.style.opacity = "1";
                        newCard.style.transform = "translateY(0)";
                    }, 50);
                });
            }
        });
    }, {
        rootMargin: "0px 0px 300px 0px" // Triggers load 300px before the user reaches the bottom
    });

    observer.observe(sentinel);
}

