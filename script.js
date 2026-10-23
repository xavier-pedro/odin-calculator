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
let operator;
let secondNumber = "";
let visor = document.querySelector("#visor");

const buttons = document.querySelectorAll(".button-calculator");

buttons.forEach((button) => {
  let typeButton = button.dataset.type;
  let valueButton = button.dataset.value;

  button.addEventListener("click", () => {
    if (
      typeButton === "operator" &&
      firstNumber === "" &&
      secondNumber === ""
    ) {
      button.disabled = true;
      button.disabled = false;
    }

    if (typeButton === "operator" && operator && firstNumber && secondNumber) {
      firstNumber = operate(operator, firstNumber, secondNumber);
      operator = valueButton;
      console.log(operator);
      secondNumber = "";
      visor.textContent = firstNumber;
    }

    if (typeButton === "result" && operator && firstNumber && secondNumber) {
      firstNumber = operate(operator, firstNumber, secondNumber);
      secondNumber = "";
      operator;
      visor.textContent = firstNumber;
    }

    // if(typeButton === "number" && !operator && firstNumber && !secondNumber){
    //   if(firstNumber.split("").length > 2){
    //   firstNumber = valueButton
    //   } 
    //   visor.textContent = firstNumber
    // }
  });
});
