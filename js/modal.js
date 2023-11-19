"use strict"

const formInput = document.querySelector('.footer__mailing-input')
const modalText = document.querySelector('.modal__text')
const formButton = document.querySelector('.footer__mailing-button')

if (formButton) {
    formButton.addEventListener('click', () => {
        if (formInput.value.length <= 0) {
            formButton.removeAttribute("href");
            formInput.placeholder = 'Заполните все поля'
        } else {
            formButton.setAttribute('href', '#open-modal');
        }
    })
}

document.querySelector('.footer__return-btn').onclick = () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
}
