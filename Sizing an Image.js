let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");
let dogImage = document.getElementById("dogImage");
let imageWidthText = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");

let currentWidth = 200;

function updateImageWidth() {
  dogImage.style.width ='200px';
  imageWidthText.textContent = currentWidth;
}

incrementButton.addEventListener("click", () => {
  if (currentWidth < 300) {
    currentWidth += 5;
    warningMessage.textContent = "";
    updateImageWidth();
  } else {
    warningMessage.textContent = "Width cannot be more than 300px.";
  }
});

decrementButton.addEventListener("click", () => {
  if (currentWidth > 100) {
    currentWidth -= 5;
    warningMessage.textContent = "";
    updateImageWidth();
  } else {
    warningMessage.textContent = "Width cannot be less than 100px.";
  }
});