const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkInput);

function checkInput () {
    if (inputEl.value.length >= inputEl.dataset.length) {
        inputEl.classList = 'valid';
    } if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList = 'invalid';
    }
}