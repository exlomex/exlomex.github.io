"use strict"
const button = document.getElementById('calculateButton');

if (button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const height = document.getElementById('heightInput');
        const weight = document.getElementById('weightInput');
        const age = document.getElementById('ageInput');
        const gender = document.getElementById('genderInput');

        const parseHeight = parseFloat(height.value);
        const parseWeight = parseFloat(weight.value);
        const parseAge = parseInt(age.value);
        const parseGenger = gender.value.toLowerCase();

        if (isNaN(parseHeight) || isNaN(parseWeight) || isNaN(parseAge) || (parseGenger !== 'м' && parseGenger !== 'ж')) {
            document.getElementById('resultOutput').value = `Пожалуйста, введите корректные данные.`;
            return;
        }

        const bmi = calculateBMI(parseHeight, parseWeight);
        const bmiCategory = getBMICategory(bmi);

        document.getElementById('resultOutput').value = `ИМТ: ${bmi.toFixed(1)}, ${bmiCategory}`;

        height.value = '';
        age.value = '';
        weight.value = '';
        gender.value = '';
    });

    function calculateBMI(height, weight) {
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Дефицит массы тела';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Норма';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Избыточная масса тела';
        } else {
            return 'Ожирение';
        }
    }
}

