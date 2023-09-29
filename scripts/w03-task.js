/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number (document.querySelector('#add1').value) ;
    let addNumber2 = Number (document.querySelector('#add2').value) ;
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers'). addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number (document.querySelector('#subtract1').value) ;
    let subtractNumber2 = Number (document.querySelector('#subtract2').value) ;
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers'). addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
};

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value) ;
    const factor2 = Number(document.querySelector('#factor2').value) ;
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const currentDate = new Date();
let currentYear;

if (currentDate instanceof Date && !isNaN(currentDate)) {
    currentYear = currentDate.getFullYear();
} else {
    currentYear = 'Invalid Date';
}

document.querySelector('#year').value = currentYear;

const numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);


document.getElementById('array').textContent = numbersArray.join(', ');


const oddNumbers = numbersArray.filter(num => num % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');


const evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');


const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;


const multipliedArray = numbersArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');


const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

