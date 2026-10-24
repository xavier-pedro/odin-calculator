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
    type: "github",
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
    label: ".",
    value: ".",
    type: ".",
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

  buttons.forEach((button) => {
    const buttonUI = document.createElement("button");
    buttonUI.classList.add("button-calculator");

    buttonUI.dataset.value = button.value;
    buttonUI.dataset.type = button.type;

    if (button.isIcon) {
      const image = document.createElement("img");
      image.src = `${button.value}`;
      buttonUI.appendChild(image);
      divButtons.appendChild(buttonUI);
    } else {
      buttonUI.textContent = button.label;
      divButtons.appendChild(buttonUI);
    }

    if (button.label === "=") {
      buttonUI.classList.add("button-result");
    }
  });
}

showButtons(buttonsData);
