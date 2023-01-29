const numberCategoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberCategoriesEl.length}`);

for (const categorie of numberCategoriesEl) {
    console.log(`Category: ${categorie.firstElementChild.textContent}`);
    console.log(`Elements: ${categorie.lastElementChild.children.length}`);
}

