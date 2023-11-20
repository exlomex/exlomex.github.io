"use strict"

const formButtonSec = document.querySelector('.contactUs__form-button')



if (formButtonSec) {
    formButtonSec.addEventListener('click', (e) => {
        let flag = false;

        const Inputs = document.querySelectorAll('.contactUs__form--search')
        const formInfo = document.querySelectorAll('.contactUs__form-info')

        if (Inputs && formInfo) {
            Inputs.forEach((input, index) => {
                if (input.value <= 0) {
                    console.log(123)
                    formInfo[index].style.display = 'inline-block';
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




