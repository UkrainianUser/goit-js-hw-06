const bodyEl = document.querySelector('body');
const colorName = document.querySelector('.color');
const changeColorBtn =document.querySelector('.change-color');

console.dir(bodyEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}