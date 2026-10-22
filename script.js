let firstNumber = 0;
let secondNumber;
let operator;
const numbers = ["0","1","2","3","4","5","6","7","8","9"]

const visor = document.querySelector("#visor")
visor.textContent = firstNumber

const button = document.querySelectorAll(".button-calculator")


for(let i = 0; i < button.length; i++){

    let valueButton = button[i].dataset.value

    button[i].addEventListener("click", () => {
       if (visor.textContent === "0" && numbers.includes(valueButton)) {
         firstNumber = valueButton;
         visor.textContent = firstNumber;
       } else if (operator === undefined && numbers.includes(valueButton)) {
         firstNumber += valueButton;
         visor.textContent = firstNumber;
       }
    })
}

button.forEach(item => {
    item.addEventListener("click", () => {
        
    })
})


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function operate(operator, firstNumber, secondNumber){
    if (operator === "+"){
        add(firstNumber,secondNumber)
    }
    else if (operator === "-") {
      subtract(firstNumber, secondNumber);
    }
    else if (operator === "*") {
      multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
      divide(firstNumber, secondNumber);
    }

}