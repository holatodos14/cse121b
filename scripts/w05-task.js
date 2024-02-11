/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach (temple => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    let img = document.createElement("img");
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.location);
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
}
);
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList);
}


/* reset Function */
function reset() {
    templesElement.remove();
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered');
    switch (filter) {
        case "utah":
            temples.filter(temple => temple.location.includes("Utah"));
            break;
        case "nonutah":
            temples.filter(temple => temple.location.indexOf("Utah") === -1);
            break;
        case "outsideof":
            temples.filter(temple => temple.dedicated > new Date(1950, 0, 1));
            break;
        default:
            temples;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });



