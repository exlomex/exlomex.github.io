"use strict"

const formButtonSec = document.querySelector('.contactUs__form-button')
const modalWin = document.querySelector('#open-modal-contactUs')


const ModalClose = document.querySelector('.modal-close-contactUs').addEventListener(
    'click', (e) => {
        e.preventDefault()
        modalWin.classList.toggle('modal-window--visible')
    }
)

if (formButtonSec) {
    formButtonSec.addEventListener('click', (e) => {
        e.preventDefault()
        let flag = false;

        const Inputs = document.querySelectorAll('.contactUs__form--search')
        const formInfo = document.querySelectorAll('.contactUs__form-info')

        if (Inputs && formInfo) {
            Inputs.forEach((input, index) => {
                if (input.value <= 0) {
                    formInfo[index].style.display = 'inline-block';
                    flag = true;
                } else {
                    formInfo[index].style.display = 'none';
                }
            });
        }

        if (!flag) {
            modalWin.classList.toggle('modal-window--visible')

            Inputs.forEach(input => {
                input.value = ''
            });
        }
    })
}




