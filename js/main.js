 document.addEventListener('DOMContentLoaded', () => {
     const cards = document.querySelectorAll('.carousel-card');
     const nextBtn = document.getElementById('next-btn');
     const prevBtn = document.getElementById('prev-btn');
     const fractionIndicator = document.getElementById('fraction');
     

     const menuTrigger = document.getElementById('menu-trigger');
     const menuDrawer = document.getElementById('menu-drawer');
     const menuText = document.getElementById('menu-text');
     
     let activeIndex = 0;
 

     menuTrigger.addEventListener('click', () => {
         const isOpen = menuDrawer.classList.toggle('open');
         menuTrigger.classList.toggle('open');
         

         menuText.textContent = isOpen ? "CLOSE" : "EXPLORE";
     });
 
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
     
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        let easeAmount = 0.15;
        cursorX += (mouseX - cursorX) * easeAmount;
        cursorY += (mouseY - cursorY) * easeAmount;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveTargets = document.querySelectorAll('a, button, .corner-menu, .image-wrapper, .grid-image-wrapper');
    interactiveTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
 });
