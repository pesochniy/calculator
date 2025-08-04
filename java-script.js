const disp = document.querySelector(".disp");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelector(".buttons")

/*console.log(num)*/
let curentInput = [];
let firstNumber = 0;
let secondNumber = 0;
let operator = '';






buttons.addEventListener("click", event => {
    console.log(firstNumber)
    console.log(curentInput)
    if (event.target.classList.contains("number")) {
        event.target.textContent;
        curentInput.push(event.target.textContent);
        disp.textContent = curentInput.join('');

    } else if (event.target.classList.contains("operator")) { 
        firstNumber = +disp.textContent; 
        operator = event.target.textContent; 
        curentInput = [];

    } else if (event.target.classList.contains("equal")) {
        secondNumber = +curentInput.join('');
        console.log(firstNumber, secondNumber)
        disp.textContent = calculate(firstNumber, secondNumber, operator);
        curentInput = [];

    } else if (event.target.classList.contains("clear")) {
        disp.textContent = '';
        curentInput = [];
        firstNumber = 0;
        secondNumber = 0;

    } else if (event.target.classList.contains("backspace")) {
        curentInput.pop();
        disp.textContent = curentInput.join('');
    }
})


function calculate(a, b, operator) {
    if (operator == '+') firstNumber = a + b;
    else if (operator == '-') firstNumber = a - b;
    else if (operator == '*') firstNumber = a * b;
    else firstNumber = a / b;

    return firstNumber;
}