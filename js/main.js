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
