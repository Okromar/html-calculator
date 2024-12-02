let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
        currentInput += operator;
        display.value = currentInput;
    
}

function appendDot() {
        currentInput += '.';
        display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Use eval safely since input is controlled
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}


