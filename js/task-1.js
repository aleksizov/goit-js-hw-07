const categoryItems = document.querySelectorAll('.list-item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const categoryTitle = item.textContent;
    console.log(`Categories: ${categoryTitle}`);
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Elements: ${elementsCount}`);
});

// Запит item.querySelectorAll('.h2') неправильний і не буде працювати правильно, оскільки h2 - це тег, а не клас, тому точкову нотацію для класу не слід використовувати. Він має бути виправлений на item.querySelectorAll('ul li'), якщо метою є підрахунок елементів у кожній категорії, а не тегів h2.
