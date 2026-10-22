let firstNumber = 0;
let secondNumber = "";
let operator;

const visor = document.querySelector("#visor");
visor.textContent = firstNumber;

const button = document.querySelectorAll(".button-calculator");

for (let i = 0; i < button.length; i++) {
  let typeButton = button[i].dataset.type;
  let valueButton = button[i].dataset.value;

  button[i].addEventListener("click", (e) => {
    if (visor.textContent === "0" && typeButton === "number") {
      firstNumber = valueButton;
      visor.textContent = firstNumber;
    } else if (operator === undefined && typeButton === "number") {
      firstNumber += valueButton;
      visor.textContent = firstNumber;
    } else if (typeButton === "operator" && firstNumber > 0) {
      let operatorButtons = document.querySelectorAll('[data-type="operator"]');

      operatorButtons.forEach((button) => {
        let hasClass = button.classList.contains("operator-select");

        if (button !== e.target && (hasClass === true || hasClass === false)) {
          button.classList.remove("operator-select");
        } else {
          button.classList.add("operator-select");
          operator = valueButton;
          console.log(operator);
        }
      });
    } else if (operator !== undefined && typeButton !== "action") {
      const buttonClass = document.querySelector(".operator-select");
      if (buttonClass) {
        buttonClass.classList.remove("operator-select");
      }
      secondNumber += valueButton;
      visor.textContent = secondNumber;
    } 

    if(valueButton === "="){
      switch (operator) {
        case "+":
          visor.textContent = add(Number(firstNumber), Number(secondNumber));
          break;
        case "-":
          visor.textContent = subtract(Number(firstNumber), Number(secondNumber));
          break;
        case "*":
          visor.textContent = multiply(Number(firstNumber), Number(secondNumber));
          break;
        case "/":
          visor.textContent = divide(Number(firstNumber), Number(secondNumber));
          break;
      }
    }

  });
}

/*
se o operador for definido
quando a pessoa clicar no proximo botao, atualiza a variavel do segundo numero

*/

button.forEach((item) => {
  item.addEventListener("click", () => {});
});

function add(firstNumber, secondNumber) {

  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    divide(firstNumber, secondNumber);
  }
}
