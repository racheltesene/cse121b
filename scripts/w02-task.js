/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Rachel Tesene";
const currentYear = 2023;
const profilePicture = 'images/me.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.getElementById('year');
const foodElement = document.getElementById("food");
const imageElement = document.querySelector("#profile-image");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", "My Profile Picture");

/* Step 5 - Array */
const favoriteFoods = ["Sushi", "Sunny side up eggs", "pears", "Ice Cream"];
const newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);

// Build the HTML content for favorite foods
let favoriteFoodsHTML = "My favorite foods are: ";

favoriteFoodsHTML += favoriteFoods.join(", ");
favoriteFoodsHTML += `, New favorite food: ${newFavoriteFood}`;

// Display favorite foods in the HTML element
foodElement.textContent = favoriteFoodsHTML;
