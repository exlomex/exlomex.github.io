"use strict"

const swiperPrev = document.querySelector('.trainings__left_arrow')
const swiperNext = document.querySelector('.trainings__right_arrow')

const mySwiper = new Swiper(".swiper", {
    spaceBetween: 29,
    slidesPerView: 3,
    // centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1450: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        730: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        425: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        319: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },

    }
});


if (swiperPrev && swiperNext) {
    swiperPrev.addEventListener('click', () => {
        mySwiper.slidePrev();
    })
    swiperNext.addEventListener('click', () => {
        mySwiper.slideNext();
    })
}


// body with burger

const burgerMenu = document.querySelector('.burger-menu')

if (burgerMenu) {
    burgerMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('Without-scroll-body')
    })
}

// faq section

const faqArrow = document.querySelectorAll('.faq__question svg')
const faqAnswer = document.querySelectorAll('.faq__answer')


if (faqArrow && faqAnswer) {
    faqArrow.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('rotate')
            faqAnswer[index].classList.toggle('faq__answer--visible')
        })
    });
}