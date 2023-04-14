const incrementbtn = document.getElementById("incrementBtn");
const decrementbtn = document.getElementById("decrementBtn");
const ValueReset = document.getElementById("valueReset");
const displayValue = document.getElementById("displayValue");

incrementbtn.addEventListener("click", () => {
  let value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ value is not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

decrementbtn.addEventListener("click", () => {
  let value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value is not allowed");
  }
});

ValueReset.addEventListener("click", () => {
  displayValue.innerText = 0;
});
