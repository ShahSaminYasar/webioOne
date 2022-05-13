const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const headerLinks = document.querySelector('.header_links');

mobileMenuBtn.addEventListener('click', ()=>{ 
    headerLinks.classList.toggle('menu-active');
    mobileMenuBtn.classList.toggle('menu-active');
})