const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkInput);

function checkInput () {
    if (inputEl.value.length < inputEl.dataset.length || inputEl.value.length > inputEl.dataset.length) {
       return inputEl.classList = 'invalid';
    }
    inputEl.classList = 'valid';
}