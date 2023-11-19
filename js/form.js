"use strict"

const formButtonSec = document.querySelector('.contactUs__form-button')

if (formButtonSec) {
    formButtonSec.addEventListener('click', (e) => {
        let flag = false;

        const Inputs = document.querySelectorAll('.contactUs__form--search')

        if (Inputs) {
            Inputs.forEach(input => {
                if (input.value <= 0) {
                    input.placeholder = 'Заполните поле'
                    flag = true;
                }
            });
        }

        if (flag) {
            formButtonSec.removeAttribute("href");
        } else {
            formButtonSec.setAttribute('href', '#open-modal');
        }
    })
}




