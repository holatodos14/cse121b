/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeslist = []; // Global array to store a list of temples
let templesContainer = document.getElementById('temples'); // Declare templesContainer as a global variable

/* async getTemples Function using fetch() */
async function getTemples() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            templeslist = await response.json(); // Update the global temples array
            displayTemples(templeslist); // Display temples on page load
        } else {
            console.error('Error fetching temples:', response.status);
        }
    } catch (error) {
        console.error('Error fetching temples:', error);
    }
}

/* async displayTemples Function */
function displayTemples(temples) {
    reset();

    temples.forEach(temple => {
        // Create an HTML <article> element
        const templeArticle = document.createElement('article');

        // Create an HTML <h3> element and add the temple's templeName property
        const templeHeading = document.createElement('h3');
        templeHeading.textContent = temple.name;

        // Create an HTML <img> element
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl; // Set imageUrl property to src attribute
        templeImage.alt = temple.location; // Set location property to alt attribute

        // Append the <h3> element and the <img> element to the <article> element
        templeArticle.appendChild(templeHeading);
        templeArticle.appendChild(templeImage);

        // Append the <article> element to the global templesContainer variable
        templesContainer.appendChild(templeArticle);
    });
}

/* reset Function */
function reset() {
    templesContainer.innerHTML = ''; // Clear the content inside the temples container
}

/* filterTemples Function */
function filterTemples() {
    reset();
    let filter = document.getElementById('filtered').value.toLowerCase();

    switch (filter) {
        case 'utah':
            const utahTemples = templeslist.filter(temple => temple.location.toLowerCase().includes('utah'));
            displayTemples(utahTemples);
            break;
        case 'outsideofUtah':
            const outsideofutahTemples = templeslist.filter(temple => temple.location.toLowerCase().includes('outside of utah'));
            displayTemples(outsideofutahTemples);
            break;
        case 'buildbefore1950':
            const buildbefore1950Temples = templeslist.filter(temple => temple.location.toLowerCase().includes('build before 1950'));
            displayTemples(buildbefore1950Temples);
            break;
        // Add more cases for other filters if needed
        default:
            // If no filter selected or an invalid filter, display all temples
            displayTemples(templeslist);
            break;
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Fetch temples on page load
getTemples();
