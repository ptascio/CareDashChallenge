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
  var uppercasePassword = inputemail.toUpperCase();
  var re = new RegExp("^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$");
  if (inputemail.length > 0 && !re.test(uppercasePassword)){
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
    var pce = document.getElementById("passwordConfirmErrors");
    pce.innerText = "Passwords must match";
    pce.className += " display-errors";
    return false;
  }else {
    resetErrors("passwordConfirmErrors");
    return true;
  }
}

function resetErrors(elId){
  var thisEl = document.getElementById(elId);
  thisEl.innerText = "";
  thisEl.className -= " display-errors";
}

function setEntryCantBeBlank(elId){
  var thisEl = document.getElementById(elId);
  thisEl.innerText = "Entry can't be blank";
  thisEl.className += " display-errors";
}

function checkValues(){
  var response = true;
  if (firstName.length < 1){
    response = false;
    setEntryCantBeBlank("firstNameErrors");
  }else {
    resetErrors("firstNameErrors");
  }
  if (lastName.length < 1){
    response = false;
    setEntryCantBeBlank("lastNameErrors");
  }else {
    resetErrors("lastNameErrors");
  }
  if (email.length < 1){
    response = false;
    setEntryCantBeBlank("emailErrors");
  } else if (email.length > 1 && checkEmail(email)){
    resetErrors("emailErrors");
  }

  if (password.length < 1){
    response = false;
    setEntryCantBeBlank("passwordErrors");
  }else if (password.length < 6){
    var pe = document.getElementById("passwordErrors");
    pe.innerText = "Password must be minimum of 6 characters";
    pe.className += " display-errors";
  } else {
    resetErrors("passwordErrors");
  }
  if (!checkEmail(email)){
    response = false;
  }
  if (!checkPassword(password, passwordConfirm)){
    response = false;
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
