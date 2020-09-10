// Left form
const inputLeftEmail = document.querySelector('.form__input');

inputLeftEmail.addEventListener('focus', () => {
    inputLeftEmail.previousElementSibling.classList.add('form__label--focus');
})

inputLeftEmail.addEventListener('blur', () => {
    inputLeftEmail.previousElementSibling.classList.remove('form__label--focus');
})

// Submit left form
const leftFormBtn = document.querySelector('.form__btn');
const leftForm = document.querySelector('.form__submit');

function submitForm(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type=text]').value;
    const input = event.target

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
        email.classList.add('error');
        email.previousElementSibling.classList.add('error');
    }
}

leftForm.addEventListener('submit', submitForm);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

// Right form
const inputs = document.querySelectorAll('.extended__input');

function funcFocus() {
    inputs.forEach(i => i.previousElementSibling.classList.remove("extended__label--focus"));
    this.previousElementSibling.classList.add("extended__label--focus");
    this.classList.add("extended__input--focus");
}

function funcBlur() {
    inputs.forEach(i => i.previousElementSibling.classList.remove("extended__label--focus"));
    inputs.forEach(i => i.classList.remove("extended__input--focus"));
}

inputs.forEach(a => a.addEventListener('focus', funcFocus));
inputs.forEach(a => a.addEventListener('blur', funcBlur));