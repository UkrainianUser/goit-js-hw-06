function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createDiv);

function createDiv(amount) {
  amount = inputEl.value;
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = 30 + i*10 + 'px';
    div.style.height = 30 + i*10 + 'px';
    div.style.backgroundColor = getRandomHexColor();
    
    boxesArr.push(div);

    boxesEl.append(...boxesArr);
  }
}

destroyBtn.addEventListener('click', destroyDiv)

function destroyDiv() {
  boxesEl.innerHTML = '';
}