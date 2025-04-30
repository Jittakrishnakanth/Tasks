
document.getElementById("calculateButton").addEventListener("click", function () {
    const billAmount = document.getElementById("billAmount").value;
    const percentageTip = document.getElementById("percentageTip").value;
    const tipAmountEl = document.getElementById("tipAmount");
    const totalAmountEl = document.getElementById("totalAmount");
    const errorMessage = document.getElementById("errorMessage");
  
    
    tipAmountEl.value = "";
    totalAmountEl.value = "";
    errorMessage.textContent = "";
  
    if (billAmount === "" && percentageTip === "") {
      errorMessage.textContent = "Enter Bill Amount & Percentage Tip";
    } else if (billAmount === "") {
      errorMessage.textContent = "Enter Bill Amount";
    } else if (percentageTip === "") {
      errorMessage.textContent = "Enter Percentage Tip";
    } else {
      const tip = (parseInt(percentageTip) / 100) * parseInt(billAmount);
      const total = parseInt(billAmount) + tip;
  
      tipAmountEl.value = tip.toFixed(2);
      totalAmountEl.value = total.toFixed(2);
    }
  });