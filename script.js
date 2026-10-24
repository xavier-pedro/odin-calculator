function operate(operator, firstNumber, secondNumber) {
  if(operator === "/" & firstNumber >= "0" && secondNumber === "0"){
    return "Erro!"
  } else{
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
  if(result === "Erro!"){
    result = "";
  }

  let selectOperator = document.querySelector(".operator-select");

  if(selectOperator){
  selectOperator.classList.remove("operator-select");
  }

    }

    if (typeButton === "operator" && operator && (firstNumber || result) && secondNumber) {
      result = operate(operator, firstNumber, secondNumber);
      firstNumber = "";
      operator = valueButton;
      secondNumber = "";
      visor.textContent = result;
      if (result === "Erro!") {
        result = "";
      }
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

      if (selectOperator) {
        selectOperator.classList.remove("operator-select");
      }
    }

    if(typeButton === "operator" && operator && (firstNumber || result) && !secondNumber){
     let selectOperator = document.querySelector(".operator-select");

     if (selectOperator) {
       selectOperator.classList.remove("operator-select");
     }

     operator = valueButton;
     button.classList.add("operator-select")
    }

    if(typeButton === ","){
        if(result && !operator && !secondNumber && !firstNumber){
          firstNumber = "0,"
          visor.textContent = firstNumber;
          result = "";
        } else if(!firstNumber && !operator && !secondNumber && !result){
          firstNumber = "0,"
          visor.textContent = firstNumber
        }else if (firstNumber && !operator && !secondNumber && !result) {

          if(!firstNumber.includes(",")){
              firstNumber += ",";
              visor.textContent = firstNumber;
          }
          
        } else if ((firstNumber || result) && operator && !secondNumber){
          secondNumber = "0,"
          visor.textContent = secondNumber;
        } else if ((firstNumber || result) && operator && secondNumber){

          if (!secondNumber.includes(",")) {
            secondNumber += ",";
            visor.textContent = secondNumber;
          }
          
        }
          
    }

  



    


  });
});
