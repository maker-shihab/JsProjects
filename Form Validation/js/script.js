// Get All Ids in Variable
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const formSubmit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
})
function checkInputs() {
  // Get The valus for the inputs
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(userNameValue === ''){
    // Set error
    // Add error class
    setErrorFor(userName, "Username can't be blank");
  }
  else{
    // add success class
    setSuccessFor(userName);
  }
  if(emailValue === ''){
    setErrorFor(email, 'Email Cannot be blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid')
  } else{
    setSuccessFor(email);
  }

  if(passwordValue === ''){
    setErrorFor(password, 'Password Cannot be blank');
  } else{
    setSuccessFor(password);
  }
  
  if(password2Value === ''){
    setErrorFor(password2, 'Password2 Cannot be blank');
  } else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Password does not mach');
  }  else{
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;
  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  // add error class
  formControl.className = 'form-control success';

}

function isEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}