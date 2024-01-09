const categoryItems = document.querySelectorAll('.item');
console.log(`Кількість категорій: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const categoryTitle = item.textContent;
    console.log(`Categories: ${categoryTitle}`);
    const elementsCount = item.querySelectorAll('.h2').length;
    console.log(`Elements: ${elementsCount}`);
});
