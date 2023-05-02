const mobileMenu = document.querySelector('.mobile-menu');

const toggleMenu = () => {
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.navMobile').classList.toggle('openNav');
};

mobileMenu.addEventListener('click', toggleMenu);
