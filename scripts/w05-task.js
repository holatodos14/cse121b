/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = ''; // Clear existing content
    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok) {
            templeList = await response.json();
            console.log(templeList); // Log the fetched data
        } else {
            console.error('Error fetching temples:', response.status);
        }
    } catch (error) {
        console.error('Error fetching temples:', error);
    }
    displayTemples(templeList);
}

/* reset Function */
function reset() {
    templesElement.innerHTML = ""; // Clear the content inside the temples container
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Clear the output

    const filter = document.getElementById('filtered').value; // Get the filter value from the dropdown menu

    if (!Array.isArray(temples)) {
        console.error('Invalid input. Temples must be an array.');
        return;
    }

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().indexOf("Utah") === -1));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
}


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Fetch temples on page load
getTemples();




