let firstNumber = 0;
let secondNumber = "";
let operator;
let aux;

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
    } else if (typeButton === "operator" && firstNumber >= "0") {
      let operatorButtons = document.querySelectorAll('[data-type="operator"]');

      if (secondNumber != "") {
        let buttonFloat = document.querySelector('[data-value=","]');
        buttonFloat.disabled = false;
        firstNumber = operate(operator, firstNumber, secondNumber);
        secondNumber = "";
        visor.textContent = firstNumber;
      }

      operatorButtons.forEach((button) => {
        let hasClass = button.classList.contains("operator-select");

        if (button !== e.target && (hasClass === true || hasClass === false)) {
          button.classList.remove("operator-select");
        } else {
          button.classList.add("operator-select");
          operator = valueButton;
        }
      });
    } else if (operator !== undefined && typeButton === "number") {
      const buttonClass = document.querySelector(".operator-select");
      if (buttonClass) {
        buttonClass.classList.remove("operator-select");
      }
      secondNumber += valueButton;
      visor.textContent = secondNumber;
    } else if (button[i].dataset.value === "icons/allclear.svg") {
              let buttonFloat = document.querySelector('[data-value=","]');
        buttonFloat.disabled = false;

      let hasClass = document.querySelector(".operator-select");
      if (hasClass) {
        hasClass.classList.remove("operator-select");
      }
      firstNumber = "0";
      operator = undefined;
      secondNumber = "";
      visor.textContent = firstNumber;
    }

    if (
      valueButton === "," &&
      (visor.textContent === "0" || firstNumber >= "0") &&
      operator === undefined
    ) {

      if(firstNumber.split("").includes(",")){
        let buttonFloat = document.querySelector('[data-value=","]');
        buttonFloat.disabled = true;
      } else{
      firstNumber += ",";
      visor.textContent = firstNumber;
      }
    } else if (
      valueButton === "," &&
      firstNumber >= "0" &&
      operator !== undefined
    ) {
      if (secondNumber.split("").includes(",")) {
        let buttonFloat = document.querySelector('[data-value=","]');
        buttonFloat.disabled = true;
      } else if (secondNumber === "") {
        let buttonFloat = document.querySelector('[data-value=","]');
        secondNumber = "0,";
        buttonFloat.disabled = false;
        visor.textContent = secondNumber;
      } else {
        let buttonFloat = document.querySelector('[data-value=","]');
        secondNumber += ",";
        buttonFloat.disabled = false;
        visor.textContent = secondNumber;
      }
    }

    if (valueButton === "=" && operator !== undefined) {
      let buttonFloat = document.querySelector('[data-value=","]');
      buttonFloat.disabled = false;
      let result = operate(operator, firstNumber, secondNumber);
      firstNumber = "";
      operator = undefined;
      secondNumber = "";
      console.log(firstNumber);
      visor.textContent = result;
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
  switch (operator) {
    case "+":
      return add(Number(firstNumber), Number(secondNumber));
      break;
    case "-":
      return subtract(Number(firstNumber), Number(secondNumber));
      break;
    case "*":
      return multiply(Number(firstNumber), Number(secondNumber));
      break;
    case "/":
      return divide(Number(firstNumber), Number(secondNumber));
      break;
  }
}
