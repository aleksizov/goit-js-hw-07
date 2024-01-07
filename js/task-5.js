function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
const btnForm = document.querySelector('.js-widget');
const spanForm = document.querySelector('.js-span');
btnForm.addEventListener('click', onButtonForm);
function onButtonForm() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    spanForm.textContent = newColor;
}

// const button = document.querySelector('.my-button');
//
// button.addEventListener('click', () => {
//     console.log('The button was pressed and now the next image will appear');
// });
