let counterElement = document.getElementById("counterValue");
function onIncrement() {
let previousCounterValue = counterElement.textContent;
let updatedCounterValue = parseInt(previousCounterValue) + 1;
if (updatedCounterValue > 0) {
counterElement.style.color = "green";
}
else if (updatedCounterValue < 0) {
counterElement.style.color = "red";
}
else {
counterElement.style.color = "black";
}
counterElement.textContent = updatedCounterValue;
}
function onDecrement() {
let previousCounterValue = counterElement.textContent;
let updatedCounterValue = parseInt(previousCounterValue) - 1;
if (updatedCounterValue > 0) {
counterElement.style.color = "green";
}
else if (updatedCounterValue < 0) {
counterElement.style.color = "red";
}
else {
counterElement.style.color = "black";
}
counterElement.textContent = updatedCounterValue;
}
function onReset() {
let counterValue = 0;
counterElement.textContent = counterValue;
counterElement.style.color = "black";
}


console.log(Math.random());
console.log(Math.ceil(91.906698007537561));



let randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber*1000);
console.log(Math.ceil(randomNumber*1000));
