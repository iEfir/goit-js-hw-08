import throttle from 'lodash.throttle';
import { saveToStorage, loadFromStorage } from './storage.js';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const dataInput = {
  email: '',
  message: '',
};
const recoverData = loadFromStorage(STORAGE_KEY);

condition();

form.addEventListener('input', throttle(saveToInput), 500);
form.addEventListener('submit', onSubmitForm);

function saveToInput(evt) {
  dataInput.email = evt.currentTarget[0].value;
  dataInput.message = evt.currentTarget[1].value;
  saveToStorage(STORAGE_KEY, dataInput);
}
function onSubmitForm(evt) {
  evt.preventDefault();
  if (form.email.value === '' || form.message.value === '') {
    return false;
  } else {
    console.log(dataInput);
  }
  formCleaner();
  storageCleaner();
}
function formCleaner() {
  form[0].value = '';
  form[1].value = '';
}
function storageCleaner() {
  localStorage.removeItem(STORAGE_KEY);
}

function condition() {
  if (recoverData === undefined) {
    return saveToStorage(STORAGE_KEY, dataInput);
  } else {
    form.email.value = recoverData.email;
    form.message.value = recoverData.message;
  }
}
