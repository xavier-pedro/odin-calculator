let firstNumber = 0;
let secondNumber;
let operator;

const visor = document.querySelector("#visor");
visor.textContent = firstNumber;

const button = document.querySelectorAll(".button-calculator");

for (let i = 0; i < button.length; i++) {
  let typeButton = button[i].dataset.type;
  let valueButton = button[i].dataset.value;

  if (operator === undefined) {
    button[i].addEventListener("click", (e) => {
      if (visor.textContent === "0" && typeButton === "number") {
        firstNumber = valueButton;
        visor.textContent = firstNumber;
      } else if (operator === undefined && typeButton === "number") {
        firstNumber += valueButton;
        visor.textContent = firstNumber;
      } else if (typeButton === "operator" && firstNumber > 0) {
        let operatorButtons = document.querySelectorAll(
          '[data-type="operator"]',
        );

        operatorButtons.forEach((button) => {
          let hasClass = button.classList.contains("operator-select");

          if (
            button !== e.target &&
            (hasClass === true || hasClass === false)
          ) {
            button.classList.remove("operator-select");
          } else {
            button.classList.add("operator-select");
            operator = valueButton;
            console.log(operator)
          }
        });

        
      }
    });
  }
}

/*
se o tipo de botão for um operador e ele for menor do que 0
selecione todos os outros botões exceto esse clicado e remova a class operator-select
atribua a classe operator-select ao botão clicado

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
