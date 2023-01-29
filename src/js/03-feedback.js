import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};
const STOREAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

condition();

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STOREAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  const dataStoreage = JSON.parse(localStorage.getItem(STOREAGE_KEY));
  console.log('dataStoreage', dataStoreage);
  e.currentTarget.reset();
  localStorage.removeItem(STOREAGE_KEY);
}

function condition() {
  const dataStoreage = JSON.parse(localStorage.getItem(STOREAGE_KEY));
  const email = document.querySelector('input');
  const message = document.querySelector('textarea');

  if (dataStoreage) {
    email.value = dataStoreage.email;
    message.value = dataStoreage.message;
  }
}
