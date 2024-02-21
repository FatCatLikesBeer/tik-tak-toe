// Quick little tik-tak-toe game

// Layout
document.body.bgColor = "#242424";
function buttonMaker(id) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.innerText = "X";
  console.log(button);
  document.body.appendChild(button);
  return button;
};

const [
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
] = [
  buttonMaker(1),
  buttonMaker(2),
  buttonMaker(3),
  buttonMaker(4),
  buttonMaker(5),
  buttonMaker(6),
  buttonMaker(7),
  buttonMaker(8),
  buttonMaker(9),
  ];
