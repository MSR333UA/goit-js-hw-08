import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
updateForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  console.log(formData);
}

function updateForm() {
  let saveField = localStorage.getItem(STORAGE_KEY);
  // console.log(saveField);
  if (saveField) {
    saveField = JSON.parse(saveField);
  }
  return;
}
