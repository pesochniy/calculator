const disp = document.querySelector(".disp");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelector(".buttons"); 
 
let currentInput = [];
let firstNumber = 0;
let secondNumber = 0;
let operator = ''; 


buttons.addEventListener("click", event => {
    if (event.target.parentElement == buttons) {
        processInput(event.target.textContent);
    };
});

document.addEventListener("keydown", event => {
    if (event.key != 'Shift') processInput(event.key)
});


function processInput (inputChar) {
    if (!isNaN(inputChar) || (inputChar == '.' && !currentInput.includes("."))) {
        processNumbers(inputChar);

    } else if (inputChar == '=' || inputChar == 'Enter') {
        processEqual();

    } else if ("+-*/".includes(inputChar)) { 
        processOperator(inputChar);

    } else if (inputChar == 'AC' || inputChar == 'Delete') {
        processAC();

    } else if (inputChar == 'BS' || inputChar == 'Backspace') {
        processBS();
    }
}

function processNumbers(inputChar) {
    if (currentInput.length < 21) {
        currentInput.push(inputChar);
        disp.textContent = currentInput.join('');
    }
};

function processEqual() {
    secondNumber = +currentInput.join(''); 
    const result = calculate(firstNumber, secondNumber, operator);
    disp.textContent = result;
    firstNumber = result;
    secondNumber = 0;
    currentInput = [];
    operator = '';
};

function processOperator(inputChar) {
    if (operator) {
        processEqual();
    };
    firstNumber = +disp.textContent; 
    operator = inputChar; 
    currentInput = [];
};

function processAC() {
    disp.textContent = '';
    currentInput = [];
    firstNumber = 0;
    secondNumber = 0;
}; 

function processBS(){
    currentInput.pop();
    disp.textContent = currentInput.join('');
}

function calculate(a, b, operator) {
    if (operator == '+') return a + b;
    else if (operator == '-') return a - b;
    else if (operator == '*') return a * b;
    else if (b == 0) return "Error";
    else return a / b;
}