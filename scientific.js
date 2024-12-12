let display = document.getElementById('display');
let currentInput = '';
let history = [];

// Basic Functions
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function appendDot() {
    if (!currentInput.includes('.') || /[+\-*/]/.test(currentInput.slice(-1))) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculate() {
    try {
        let result = eval(currentInput); // Use eval safely
        history.push(`${currentInput} = ${result}`);
        updateHistory();
        currentInput = result.toString();
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

// Trigonometric Functions
function applyFunction(func) {
    try {
        let number = parseFloat(currentInput);
        let result;
        switch (func) {
            case 'sin': result = Math.sin((number * Math.PI) / 180); break;
            case 'cos': result = Math.cos((number * Math.PI) / 180); break;
            case 'tan': result = Math.tan((number * Math.PI) / 180); break;
            case 'asin': result = Math.asin(number) * (180 / Math.PI); break;
            case 'acos': result = Math.acos(number) * (180 / Math.PI); break;
            case 'atan': result = Math.atan(number) * (180 / Math.PI); break;
        }
        history.push(`${func}(${number}) = ${result}`);
        updateHistory();
        currentInput = result.toString();
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}


function appendConstant(constant) {
    switch (constant) {
        case 'pi':
            currentInput += Math.PI.toFixed(10); // Pi with precision
            break;
        case 'e':
            currentInput += Math.E.toFixed(10); // Euler's number with precision
            break;
    }
    display.value = currentInput;
}



// Update History
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}

function applyExponential() {
    try {
        let number = parseFloat(currentInput); // Parse the current input as a number
        if (isNaN(number)) throw 'Invalid Input'; // Handle invalid input

        let result = Math.exp(number); // Calculate e^x
        history.push(`e^${number} = ${result}`); // Add to history
        updateHistory(); // Update the history display

        currentInput = result.toString(); // Update the input with the result
        display.value = currentInput; // Display the result
    } catch {
        display.value = 'Error'; // Display error if calculation fails
        currentInput = ''; // Reset the input
    }
}


function calculateSquare() {
    try {
        let number = parseFloat(currentInput); // Parse the current input
        if (isNaN(number)) throw 'Invalid Input';

        let result = Math.pow(number, 2); // Square the number
        history.push(`${number}^2 = ${result}`); // Add to history
        updateHistory(); // Update the history display

        currentInput = result.toString(); // Update the input
        display.value = currentInput; // Display the result
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}

function calculateSquareRoot() {
    try {
        let number = parseFloat(currentInput); // Parse the current input
        if (isNaN(number) || number < 0) throw 'Invalid Input'; // Handle invalid input

        let result = Math.sqrt(number); // Calculate square root
        history.push(`√${number} = ${result}`); // Add to history
        updateHistory(); // Update the history display

        currentInput = result.toString();
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}

function calculateInverse() {
    try {
        let number = parseFloat(currentInput); // Parse the current input
        if (isNaN(number) || number === 0) throw 'Invalid Input'; // Avoid division by zero

        let result = 1 / number; // Calculate the inverse
        history.push(`1/${number} = ${result}`); // Add to history
        updateHistory(); // Update the history display

        currentInput = result.toString();
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}


function calculatePercentage() {
    try {
        let number = parseFloat(currentInput); // Parse the current input
        if (isNaN(number)) throw 'Invalid Input';

        let result = number / 100; // Convert to percentage
        history.push(`${number}% = ${result}`); // Add to history
        updateHistory(); // Update the history display

        currentInput = result.toString();
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}




