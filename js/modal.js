"use strict"

const formInput = document.querySelector('.footer__mailing-input')
const modalText = document.querySelector('.modal__text')
const formButton = document.querySelector('.footer__mailing-button')
const modalWindow = document.querySelector('#open-modal')

const modalClose = document.querySelector('.modal-close').addEventListener(
    'click', (e) => {
        e.preventDefault()
        modalWindow.classList.toggle('modal-window--visible')
    }
)

if (formButton) {
    formButton.addEventListener('click', (e) => {
        e.preventDefault()
        if (formInput.value.length <= 0) {
            formInput.placeholder = 'Заполните все поля'
        } else {
            formInput.placeholder = 'Введите свою почту'
            formInput.value = ''
            modalWindow.classList.toggle('modal-window--visible')
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
