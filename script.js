function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(Number(firstNumber), Number(secondNumber));

    case "-":
      return subtract(Number(firstNumber), Number(secondNumber));

    case "*":
      return multiply(Number(firstNumber), Number(secondNumber));
     
    case "/":
      return divide(Number(firstNumber), Number(secondNumber));

  }
}


let firstNumber = "0"
let operator;
let secondNumber = ""
let visor = document.querySelector("#visor")


const buttons = document.querySelectorAll(".button-calculator");

buttons.forEach(item => {
  
  item.addEventListener('click', () => {
    




  })
})