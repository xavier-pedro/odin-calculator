const buttonsData = [
  {
    label: "Limpar tudo",
    value: "icons/allclear.svg",
    type: "allClear",
    isIcon: true,
  },
  {
    label: "Limpar",
    value: "icons/clear.svg",
    type: "clear",
    isIcon: true,
  },
  {
    label: "Ícone do github",
    value: "icons/github.png",
    type: "action",
    isIcon: true,
  },
  {
    label: "÷",
    value: "/",
    type: "operator",
    isIcon: false,
  },
  {
    label: "7",
    value: "7",
    type: "number",
    isIcon: false,
  },
  {
    label: "8",
    value: "8",
    type: "number",
    isIcon: false,
  },
  {
    label: "9",
    value: "9",
    type: "number",
    isIcon: false,
  },
  {
    label: "x",
    value: "*",
    type: "operator",
    isIcon: false,
  },
  {
    label: "4",
    value: "4",
    type: "number",
    isIcon: false,
  },
  {
    label: "5",
    value: "5",
    type: "number",
    isIcon: false,
  },
  {
    label: "6",
    value: "6",
    type: "number",
    isIcon: false,
  },
  {
    label: "-",
    value: "-",
    type: "operator",
    isIcon: false,
  },
  {
    label: "1",
    value: "1",
    type: "number",
    isIcon: false,
  },
  {
    label: "2",
    value: "2",
    type: "number",
    isIcon: false,
  },
  {
    label: "3",
    value: "3",
    type: "number",
    isIcon: false,
  },
  {
    label: "+",
    value: "+",
    type: "operator",
    isIcon: false,
  },
  {
    label: "0",
    value: "0",
    type: "number",
    isIcon: false,
  },
  {
    label: ",",
    value: ",",
    type: ",",
    isIcon: false,
  },
  {
    label: "=",
    value: "=",
    type: "result",
    isIcon: false,
  },
];


function showButtons(buttons) {
  let divButtons = document.querySelector("#buttons");

  

  for (let i = 0; i < buttons.length; i++) {

    const button = document.createElement("button");
    button.classList.add("button-calculator");

    button.dataset.value = buttons[i].value
    button.dataset.type = buttons[i].type

    if(buttons[i].isIcon === true){

      const image = document.createElement('img')
      image.src = `${buttons[i].value}`;
      button.appendChild(image)
      divButtons.appendChild(button);

    } else {

    button.textContent = buttons[i].label;
    divButtons.appendChild(button);}

    if(buttons[i].label === "="){

      button.classList.add('button-result')

    }
  }
}

showButtons(buttonsData);
