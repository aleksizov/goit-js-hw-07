const listItem = document.querySelectorAll(".item");
console.log("Number of categories: ", listItem.length);
listItem.forEach((item) => {
  const textItem = item.querySelector("h2").textContent;
  console.log(`Categories: ${textItem}`);
  const lengthElem = item.querySelectorAll("li").length;
  console.log(`Elements: ${lengthElem}`);
});
