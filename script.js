// console.log("check if the connection is working")

function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  // Validation Check
  if (isNaN(bill) || isNaN(tipPercent)) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  document.getElementById("result").innerText = `Tip: $${tip.toFixed(
    2
  )} | Total: $${total.toFixed(2)}`;
}
