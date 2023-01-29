const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const createIngredientsItems = (items) => {
  return items.map(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredient;
  
    return item;
  });
};

const itemsEl = createIngredientsItems(ingredients);

ingredientsContainerEl.append(...itemsEl);
console.log(ingredientsContainerEl);