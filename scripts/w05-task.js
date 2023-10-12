/* W05: Programming Tasks */

const templesElement = document.getElementById(sortby);

/* Declare and initialize global variables */
let templeList = [];
const displayTemples = (temples) => {};


templeList.forEach((temple) => {

    const articleElement = document.createElement('article');
  
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
  
    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;
  
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
  
    templesElement.appendChild(articleElement);
  });
  
  const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121-ww-course/resources/temples.json");
      if (response.ok) {
        const data = await response.json(); // Convert the response to a JavaScript object
        templeList = data; // Assign the result to the templeList global variable
  
        // Call displayTemples here or any other code that depends on templeList
        displayTemples(templeList);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const reset = () => {
    templesElement.innerHTML = ''; // Set the innerHTML of templesElement to an empty string to clear its content
  };

  
  

getTemples();


