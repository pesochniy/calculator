const disp = document.querySelector(".disp");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelector(".buttons")

/*console.log(num)*/
let curentInput = [];
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
    console.log(inputChar)
    if (!isNaN(inputChar)) {
        curentInput.push(inputChar);
        disp.textContent = curentInput.join('');

    } else if ("+-*/".includes(inputChar)) { 
        firstNumber = +disp.textContent; 
        operator = inputChar; 
        curentInput = [];

    } else if (inputChar == '=' || 'Enter') {
        secondNumber = +curentInput.join(''); 
        disp.textContent = calculate(firstNumber, secondNumber, operator);
        curentInput = [];

    } else if (inputChar == 'AC' || 'Delete') {
        disp.textContent = '';
        curentInput = [];
        firstNumber = 0;
        secondNumber = 0;

    } else if (inputChar == 'BS' || 'Backspace') {
        curentInput.pop();
        disp.textContent = curentInput.join('');
    }
}


function calculate(a, b, operator) {
    if (operator == '+') firstNumber = a + b;
    else if (operator == '-') firstNumber = a - b;
    else if (operator == '*') firstNumber = a * b;
    else firstNumber = a / b;

    return firstNumber;
}