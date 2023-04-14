function checkPassword() {
  let password = document.getElementById("password").value;
  let cnfrmPassword = document.getElementById("cnfrm-password").value;
  console.log(password, cnfrmPassword);
  let message = document.getElementById("message");

  if (password.length > 0) {
    if (password == cnfrmPassword) {
      message.textContent = "Password Matched";
      message.style.color = "green";
      message.style.backgroundColor = "grey";
    } else {
      message.textContent = "Password Not Matched";
      message.style.color = "red";
      message.style.backgroundColor = "grey";
    }
  } else {
    alert("Password Box Empty!");
    message.textContent = "Password Required!";
    message.style.color = "black";
    message.style.backgroundColor = "white";
  }
}
