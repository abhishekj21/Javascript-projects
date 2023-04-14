const txtinput = document.querySelector("#inputs1"),
  checkBtn = document.querySelector(".inputs button"),
  infoText = document.querySelector(".info-txt");

checkBtn.addEventListener("click", () => {
  const reverseInput = txtinput.value.split("").reverse().join("");
  console.log(reverseInput);
  infoText.style.display = "block";
  infoText.style.fontWeight = "bold";
  if (txtinput.value != reverseInput) {
    return (infoText.innerHTML = `No, <span>'${txtinput.value}'</span> isn't a palindrome!`);
  }
  infoText.innerHTML = `Yes, <span>'${txtinput.value}'</span> is a palindrome`;
});
