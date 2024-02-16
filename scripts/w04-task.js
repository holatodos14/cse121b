/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Marcos David Cambeiro Vargas",
    photo: {
        src: "images/me.PNG",
        alt: "My Profile Picture"    
    },
    favoriteFoods: ['lasagna','carne asada con pastel de papa','queso helado','Adobo arequipeño'],
    hobbies: ["Reading", "Gaming", "Playing Ukulele", "Play Soccer"],
    placesLived: [],

};

myProfile.placesLived.push(
    {
        place: 'Characato, Arequipa',
        length: '16 year'
    },
    {
        place: 'Tacna',
        length: '2 Years'
    }

);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src=myProfile.photo.src;
document.querySelector('#photo').alt =myProfile.photo.alt;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li")
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li")
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
let placesLived = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
});

console.log(myProfile);
