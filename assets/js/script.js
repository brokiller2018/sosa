import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },
    autoplay: {
        delay: 3000
    },

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});
const burgerMenu = document.querySelector('.menu-btn')
const menu = document.querySelector('.header__right')
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})
