var firstName = "";
var lastName = "";
var email = "";
var password = "";
var passwordConfirm = "";

function handleFirstName(e){
  firstName = e.currentTarget.value;
}

function handleLastName(e){
  lastName = e.currentTarget.value;
}

function handleEmail(e){
  email = e.currentTarget.value;
}

function checkEmail(inputemail){
  //this is all uppercase
  var uppercasePassword = inputemail.toUpperCase();
  var re = new RegExp("^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$");
  if (!re.test(uppercasePassword)){
    var emailInputErrors = document.getElementById("emailErrors");
    emailInputErrors.innerText = "Not a valid email.";
    emailInputErrors.className += " display-errors";
  }
  return re.test(uppercasePassword);
}

function handlePassword(e){
  password = e.currentTarget.value;
}

function confirmPassword(e){
  passwordConfirm = e.currentTarget.value;
}

function checkPassword(originalPass, secondPass){
  if (originalPass !== secondPass){
    return false;
  }else {
    return true;
  }
}

function checkValues(){
  var response = true;
  if (firstName.length < 1){
    var fne = document.getElementById("firstNameErrors");
    fne.innerText = "Entry can't be blank";
    fne.className += " display-errors";
    response = false;
    console.log("Entry can't be blank");
  }
  if (lastName.length < 1){
    response = false;
    console.log("Entry can't be blank");
  }
  if (email.length < 1){
    response = false;
    console.log("Entry can't be blank");
  }
  if (password.length < 6){
    response = false;
    console.log("Password must be minimum of 6 chars");
  }
  if (!checkEmail(email)){
    response = false;
    console.log("Not a good email");
  }
  if (!checkPassword(password, passwordConfirm)){
    response = false;
    console.log("passwords don't match");
  }
  submitForm(response);
}

function submitForm(response){
  if (response){
    clearForm();
    console.log("Nice job!");
  }else {
    console.log("You got work to do");
  }
}

function clearForm(){
  var inputs = document.querySelectorAll("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  var submitButton = document.getElementById('submitbutton');
  var firstNameInput = document.getElementById("firstname");
  firstNameInput.oninput = handleFirstName;
  var lastNameInput = document.getElementById("lastname");
  lastNameInput.oninput = handleLastName;
  var emailInput = document.getElementById("email");
  emailInput.oninput = handleEmail;
  var passwordInput = document.getElementById("password");
  passwordInput.oninput = handlePassword;
  var confirmInput = document.getElementById("passwordconfirm");
  confirmInput.oninput = confirmPassword;
  submitButton.addEventListener("click", checkValues);
});
