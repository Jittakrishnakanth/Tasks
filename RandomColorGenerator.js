let button = document.getElementById("button");
let bgContainer = document.getElementById("bgContainer");

let colors = [
  "#e75d7c",
  "#b16cef",
  "#53cca4",
  "#efc84d",
  "#628ef0",
  "#184b73",
  "#883e7f",
  "#ed048b"
];

button.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * colors.length);
  bgContainer.style.backgroundColor = colors[randomIndex];
});