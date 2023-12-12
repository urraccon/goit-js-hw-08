import throttle from 'lodash.throttle';

const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const formContainer = document.querySelector('.feedback-form');
const FORM_FEEDBACK_DATA_KEY = 'feedback-form-state';
const storedUserDataStringified = localStorage.getItem(FORM_FEEDBACK_DATA_KEY);
const storedUserData = JSON.parse(storedUserDataStringified);
let userEmail = '';
let userMessage = '';

// debugger;

formContainer.addEventListener('input', throttle(fillingInputs, 500));

function fillingInputs(currentData) {
  currentData.preventDefault();
  const savedUserDataStringified = localStorage.getItem(FORM_FEEDBACK_DATA_KEY);
  const savedUserData = JSON.parse(savedUserDataStringified);
  if (savedUserData !== null) {
    userEmail = savedUserData.email;
    userMessage = savedUserData.message;
  }
  if (currentData.target.name === 'email') {
    console.log('email entered is:', currentData.target.value);
    userEmail = currentData.target.value;
  } else {
    console.log('message entered is:', currentData.target.value);
    userMessage = currentData.target.value;
  }
  const userData = new typedText(userEmail, userMessage);
  console.log(userData);
  console.log(
    'user email is:',
    userData.email,
    'and user message is:',
    userData.message
  );
  localStorage.setItem(FORM_FEEDBACK_DATA_KEY, JSON.stringify(userData));
}

function typedText(email, message) {
  this.email = email;
  this.message = message;
}

// class userData {
//   userEmail = '';
//   userMessage = '';
//   constructor(userEmail, userMessage) {
//     this.userEmail = userEmail;
//     this.userMessage = userMessage;
//   }
// }

// debugger;

// const initialData = new userData('', '');
// localStorage.setItem(FORM_FEEDBACK_DATA_KEY, JSON.stringify(initialData));

if (storedUserData !== null) {
  emailInput.value = storedUserData.email;
  messageInput.value = storedUserData.message;

  console.log(storedUserData);

  console.log(
    'user email saved is:',
    storedUserData.email,
    'and user message saved is:',
    storedUserData.message
  );
}

console.dir(emailInput);
console.dir(messageInput);

formContainer.addEventListener('submit', formSent => {
  formSent.preventDefault();
  console.log(
    'user email sent is:',
    emailInput.value,
    'and user message sent is:',
    messageInput.value
  );
  localStorage.clear();
  emailInput.value = '';
  messageInput.value = '';
});
