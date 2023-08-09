const input = document.querySelector('input[name="email"]');
const errorMessageText = document.querySelector('.error-message');

const errorMessage = () => ( input.addEventListener('invalid', (e) => {
  if (e.target.validity) {  
    e.preventDefault();
    input.classList.add("errorInput");
    if (e.target.validity.valueMissing) {
      errorMessageText.textContent = 'Email required.';
    } else {
      errorMessageText.textContent = 'Valid email required.';
    }
    email.value = "";
  }
  }
));

let emailForm = document.getElementById("emailForm");
const signUpBlock = document.querySelector('.sign-up-block');
const successBlock = document.querySelector('.success-block');
const emailConfirmation = document.querySelector('.email-value');

const submitForm = () => ( emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value;
  email.value="";
  signUpBlock.remove();
  successBlock.style.display = "block";
  emailConfirmation.textContent = emailValue;
}));

const dismissButton = document.getElementById("dismiss-button");

const dismiss = () => ( dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
}));

errorMessage();
submitForm();
dismiss();