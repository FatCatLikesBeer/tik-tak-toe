// Quick little tik-tak-toe game

// Layout
document.body.bgColor = "#242424";
function buttonMaker() {
  const button = document.createElement("button");
  button.innerText = "X";
  return button;
};

const [button1, button2, button3] = [buttonMaker(), buttonMaker(), buttonMaker()];

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
