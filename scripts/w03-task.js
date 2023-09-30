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
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;


let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        document.querySelector('#array').textContent = numbersArray;

        let oddNumbers = numbersArray.filter(number => number % 2 === 1);

        
        document.querySelector('#odds').textContent = oddNumbers;

        
        let evenNumbers = numbersArray.filter(number => number % 2 === 0);

        
        document.querySelector('#evens').textContent = evenNumbers;

        
        let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

       
        document.querySelector('#sumOfArray').textContent = sum;

        
        let multipliedArray = numbersArray.map(number => number * 2);

        
        document.querySelector('#multiplied').textContent = multipliedArray;

        
        let sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        
        document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;