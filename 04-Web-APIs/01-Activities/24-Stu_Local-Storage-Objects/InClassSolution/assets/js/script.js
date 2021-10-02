var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission

  var user = {
    firstName:firstNameInput.value.trim(),
    lastName:lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }

  console.log(firstNameInput)
  // TODO: Set new submission to local storage 
  
  // localStorage.setItem("user", JSON.stringify(user))

  var userString = JSON.stringify(user)
  localStorage.setItem("user", userString)
});
