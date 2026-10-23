function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return Number(firstNumber) + Number(secondNumber);
    case "-":
      return Number(firstNumber) - Number(secondNumber);
    case "*":
      return Number(firstNumber) * Number(secondNumber);
    case "/":
      return Number(firstNumber) / Number(secondNumber);
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

    if (typeButton === "result" && operator && (firstNumber || result) && secondNumber) {
  if (firstNumber) {
    result = operate(operator, firstNumber, secondNumber);
  } else {
    result = operate(operator, result, secondNumber);
  }

  firstNumber = "";
  secondNumber = "";
  operator = "";
  visor.textContent = result;
  let selectOperator = document.querySelector(".operator-select");

  if(selectOperator){
  selectOperator.classList.remove("operator-select");
  }

    }

    if (typeButton === "operator" && operator && (firstNumber || result) && secondNumber) {
      firstNumber = operate(operator, firstNumber, secondNumber);
      operator = valueButton;
      console.log(operator);
      secondNumber = "";
      visor.textContent = firstNumber;
    }

    if (typeButton === "operator" && !operator && (result || firstNumber) && !secondNumber) {
      operator = valueButton;
      button.classList.add("operator-select");
    }

    if (typeButton === "number" && !operator && (result || !result) && !secondNumber) {
      if(result){
        result = "";
        firstNumber = valueButton;
      } else{
        firstNumber += valueButton;
      }

      visor.textContent = firstNumber

    }

    if (typeButton === "number" && operator && (result || firstNumber)) {
      secondNumber += valueButton;
      visor.textContent = secondNumber;
      let selectOperator = document.querySelector(".operator-select");
      if(selectOperator){
      selectOperator.classList.remove("operator-select");
      }
    }

    if(typeButton === "allClear"){
      result = "";
      firstNumber = ""
      secondNumber = ""
      operator = ""
      visor.textContent = "0"

      let selectOperator = document.querySelector(".operator-select");
      if(secondNumber){
      selectOperator.classList.remove("operator-select");
      }
    }

  



    


  });
});
