function operate(operator, firstNumber, secondNumber) {
  let result;
  if ((operator === "/") & (firstNumber >= "0") && secondNumber === "0") {
    return "Erro!";
  } else {
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        return isFloat(result);
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        return isFloat(result);
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        return isFloat(result);
      case "/":
        result = Number(firstNumber) / Number(secondNumber);
        return isFloat(result);
    }
  }
}

function isFloat(result){
  if(!Number.isInteger(result)){
    return result.toFixed(2)
  } else {
    return result
  }
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
let visor = document.querySelector("#visor");

// visor.textContent = result

const buttons = document.querySelectorAll(".button-calculator");

buttons.forEach((button) => {
  let typeButton = button.dataset.type;
  let valueButton = button.dataset.value;
  let selectOperator = document.querySelector(".operator-select");

  button.addEventListener("click", () => {
    if (
      typeButton === "result" &&
      operator &&
      (firstNumber || result) &&
      secondNumber
    ) {
      if (firstNumber) {
        result = operate(operator, firstNumber, secondNumber);
      } else {
        result = operate(operator, result, secondNumber);
      }

      firstNumber = "";
      secondNumber = "";
      operator = "";
      visor.textContent = result;
      if (result === "Erro!") {
        result = "";
      }

      let selectOperator = document.querySelector(".operator-select");

      if (selectOperator) {
        selectOperator.classList.remove("operator-select");
      }
    }

    if (
      typeButton === "operator" &&
      operator &&
      (firstNumber || result) &&
      secondNumber
    ) {
      result = operate(operator, firstNumber, secondNumber);
      firstNumber = "";
      operator = valueButton;
      secondNumber = "";
      visor.textContent = result;
      if (result === "Erro!") {
        result = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
      }
    }

    if (
      typeButton === "operator" &&
      !operator &&
      (result || firstNumber) &&
      !secondNumber
    ) {
      operator = valueButton;
      button.classList.add("operator-select");
    }

    if (
      typeButton === "number" &&
      !operator &&
      (result || !result) &&
      !secondNumber
    ) {
      if (result) {
        result = "";
        firstNumber = valueButton;
      } else if (firstNumber === "0"){
        firstNumber = valueButton;
      }else {
        firstNumber += valueButton;}

      visor.textContent = firstNumber;
    }

    if (typeButton === "number" && operator && (result || firstNumber)) {
      if(secondNumber === "0"){
        secondNumber = valueButton
      } else{
      secondNumber += valueButton;
      }
      visor.textContent = secondNumber;
      let selectOperator = document.querySelector(".operator-select");
      if (selectOperator) {
        selectOperator.classList.remove("operator-select");
      }
    }

    if (typeButton === "allClear") {
      result = "";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      visor.textContent = "0";

      let selectOperator = document.querySelector(".operator-select");

      if (selectOperator) {
        selectOperator.classList.remove("operator-select");
      }
    }

    if (
      typeButton === "operator" &&
      operator &&
      (firstNumber || result) &&
      !secondNumber
    ) {
      let selectOperator = document.querySelector(".operator-select");

      if (selectOperator) {
        selectOperator.classList.remove("operator-select");
      }

      operator = valueButton;
      button.classList.add("operator-select");
    }

    if (typeButton === ".") {
      if (result && !operator && !secondNumber && !firstNumber) {
        firstNumber = "0.";
        visor.textContent = firstNumber;
        result = "";
      } else if (!firstNumber && !operator && !secondNumber && !result) {
        firstNumber = "0.";
        visor.textContent = firstNumber;
      } else if (firstNumber && !operator && !secondNumber && !result) {
        if (!firstNumber.includes(".")) {
          firstNumber += ".";
          visor.textContent = firstNumber;
        }
      } else if ((firstNumber || result) && operator && !secondNumber) {
        secondNumber = "0.";
        visor.textContent = secondNumber;
      } else if ((firstNumber || result) && operator && secondNumber) {
        if (!secondNumber.includes(".")) {
          secondNumber += ".";
          visor.textContent = secondNumber;
        }
      }
    }

    if(typeButton === "clear"){
      if(!operator && !result && !firstNumber && !secondNumber){
        button.disabled = true;
        button.disabled = false;
      }

      if(result && !operator && !secondNumber){
        result = "";
        visor.textContent = 0
      }

      

      if(firstNumber && !operator && !secondNumber){
        firstNumber = firstNumber.substring(0, firstNumber.length - 1)
        firstNumber = firstNumber ? firstNumber : "0"
        visor.textContent = firstNumber
      }

      if ((result || firstNumber) && operator && !secondNumber) {
        operator = "";
        let selectOperator = document.querySelector(".operator-select");
        selectOperator.classList.remove("operator-select");
      }

      if((result || firstNumber) && operator && secondNumber){
        secondNumber = secondNumber.substring(0, secondNumber.length - 1);
        secondNumber = secondNumber ? secondNumber : "0";
        visor.textContent = secondNumber;
      }
      

    }
  });
});
