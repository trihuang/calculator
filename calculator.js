const allClearButton = document.getElementById('AC');
const clearButton = document.getElementById('C');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let displayValue = "";
let operandOne = null;
let operatorOne = null;
let operatorTwo = null;
let computation = null;

allClearButton.addEventListener('click', allClear);
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', addDecimal);
equalsButton.addEventListener('click', equals);
numButtonsEventListeners(numButtons);
operatorsEventListeners(operatorButtons);

function operate(operator, num1, num2) {
    if (operator == "plus") {
        return add(num1, num2);
    } else if (operator == "minus") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
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
    if (num2 == 0) {
        return "ERROR";
    } else return Math.round((num1 / num2) * 100) / 100;
}

function allClear() {
    display.value = "";
    displayValue = "";
    operandOne = null;
    operatorOne = null;
    operatorTwo = null;
    computation = null;
    //isValidOperatorInput = false;
}

function clear() {
    /*
    if ((operatorOne != null) && operatorTwo == null && !isValidOperatorInput) {
        operatorOne = null;
        isValidOperatorInput = true;
    } else if (operatorTwo != null && !isValidOperatorInput) {
        operatorTwo = null;
        isValidOperatorInput = true;
    } else {
        displayValue = displayValue.toString().substring(0, displayValue.length - 1);
        display.value = displayValue;
    } 
    */
}

function addDecimal(e) {
    if (displayValue === 'ERROR') return;
    if (display.value.length > 10) return;
    let decimal = e.target.textContent;
    if (displayValue === "") {
        displayValue = '0';
        displayValue += decimal;
        display.value = displayValue;
    } else if (!displayValue.includes(decimal)) {
        displayValue += decimal;
        display.value = displayValue;
    }
}

function equals() {
    if (displayValue === 'ERROR') return;
    if (display.value.length > 10) return;
    if (operatorOne === null) return;
    else if (operatorTwo !== null) {
        computation = operate(operatorTwo, Number(operandOne), Number(displayValue));
        if (computation === 'ERROR') {
            displayValue = computation;
            display.value = displayValue;
        } else {
            displayValue = computation;
            display.value = displayValue;
            operandOne = displayValue;
            operatorOne = null;
            operatorTwo = null;
        }
    } else {
        computation = operate(operatorOne, Number(operandOne), Number(displayValue));
        if (computation === 'ERROR') {
            displayValue = computation;
            display.value = displayValue;
        } else {
            displayValue = computation;
            display.value = displayValue;
            operandOne = displayValue;
            operatorOne = null;
            operatorTwo = null;
        }
    }
}

function displayNum(e) {
    if (displayValue === 'ERROR') return;
    if (display.value.length > 10) return;
    let input = e.target.textContent;
    if (displayValue === '0' && input !== 0) {
        displayValue = input;
        display.value = displayValue;
    } else if (displayValue.length < 10) {
        displayValue += input;
        display.value = displayValue;
    } 
        //isValidOperatorInput = true;
}

function handleOperator(e) {
    if (displayValue === 'ERROR') return;
    if (display.value.length > 10) return;
    let nextOperator = e.target.id;
    if (operatorOne !== null && operatorTwo === null) {
        operatorTwo = nextOperator;
        computation = operate(operatorOne, Number(operandOne), Number(displayValue));
        displayValue = computation;
        display.value = displayValue;
        operandOne = displayValue;
        displayValue = "";
    } else if (operatorOne !== null && operatorTwo !== null) {
        computation = operate(operatorTwo, Number(operandOne), Number(displayValue));
        operatorTwo = nextOperator;
        displayValue = computation;
        display.value = displayValue;
        operandOne = displayValue;
        displayValue = "";
    } else {
        operatorOne = nextOperator;
        operandOne = displayValue;
        displayValue = "";
    }
}

function numButtonsEventListeners(nodes) {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', displayNum);
    }
}

function operatorsEventListeners(nodes) {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', handleOperator);
    }
}

