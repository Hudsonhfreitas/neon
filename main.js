const btn_mobile = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('#nav')

btn_mobile.forEach(btn => {
    btn.addEventListener('click', function() {
        nav.classList.toggle('active')
    })
})

var swiper = new Swiper(".slide-depoimentos", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
        el: ".s-depoimentos .top .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1.3,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3.3,
            spaceBetween: 32,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    }
});

AOS.init({
    duration: 1000,
    once: true

});