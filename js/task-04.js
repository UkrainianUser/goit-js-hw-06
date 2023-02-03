let counterValue = 0;

const increment = () => {
    counterValue += 1;
};

const decrement = () => {
    counterValue -= 1;
};

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementButton.addEventListener('click', function () {
    increment();
    valueEl.textContent = counterValue;  
})

decrementButton.addEventListener('click', function () {
    decrement();
    valueEl.textContent = counterValue;
})

