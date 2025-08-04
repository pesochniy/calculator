const disp = document.querySelector(".disp");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelector(".buttons")

/*console.log(num)*/
let curentInput = [];
let firstNumber = 0;
let secondNumber = 0;
let operator = '';






buttons.addEventListener("click", event => {
    if (event.target.classList.contains("number")) {
        disp.textContent += event.target.textContent;
        curentInput.push(event.target.textContent);
        console.log(curentInput);
    } else if (event.target.classList.contains("operator")) {
        firstNumber = +curentInput.join('');
        operator = event.target.textContent;
        disp.textContent = '';
        curentInput = [];
    } else if (event.target.classList.contains("equal")) {
        secondNumber = +curentInput.join('');
        disp.textContent = calculate(firstNumber, secondNumber, operator);
    } else if (event.target.classList.contains("clear")) {
        disp.textContent = '';
        curentInput = [];
        firstNumber = 0;
        secondNumber = 0;
    } else if (event.target.classList.contains("backspace")) {
        curentInput
    }
})


function calculate(a, b, operator) {
    if (operator == '+') return a + b;
    if (operator == '-') return a - b;
    if (operator == '*') return a * b;
    else return a / b;
}