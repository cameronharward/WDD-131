
const subtitle = "Creating elements and appending them to the DOM."
const content = "New Content";
const newSection = document.createElement("section");
newSection.innerHTML = `
<h1>${content}</h1>
<p>${subtitle}</p>`;

document.body.appendChild(newSection);

const ingredientData = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 Tbsp", "8"];

const newList = document.createElement("ul");
newList.classList.add("dark");
newList.innerHTML = `
<li>${portionData[0]} ${ingredientData[0]}</li>
<li>${portionData[1]} ${ingredientData[1]}</li>
<li>${portionData[2]} ${ingredientData[2]}</li>
<li>${portionData[3]} ${ingredientData[3]}</li>`;

document.body.append(newList);


