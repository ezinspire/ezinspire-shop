document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menu-trigger');
    const menuDrawer = document.getElementById('menu-drawer');
    menuTrigger.addEventListener('click', () => {
        menuDrawer.classList.toggle('open');
    });
    // Add carousel logic here
});
