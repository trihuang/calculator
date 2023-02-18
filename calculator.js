const allClearButton = document.getElementById('AC');
const clearButton = document.getElementById('C');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let displayValue;

allClearButton.addEventListener('click', allClear);
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', addDecimal);
equalsButton.addEventListener('click', displayResult);
nodesEventListeners(numButtons);
nodesEventListeners(operatorButtons);


function operate(operator, num1, num2) {
    if (operator == "plus") {
        add(num1, num2);
    } else if (operator == "minus") {
        substract(num1, num2);
    } else if (operator == "multiply") {
        multiply(num1, num2);
    } else if (operator == "divide") {
        divide(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}

function allClear() {
    console.log('allClear');
}

function clear() {
    console.log('clear');
}

function addDecimal() {
    console.log('decimal');
}

function displayResult() {
    console.log('result');
}

function displayNum() {
    console.log('num');
}

function nodesEventListeners(nodes) {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', displayNum);
    }
}

