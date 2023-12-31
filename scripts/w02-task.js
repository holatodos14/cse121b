/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Marcos David Cambeiro Vargas";
let currentYear = new Date().getFullYear(); 
const profilePicture = 'images/me.PNG'



/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
nameElement.innerHTML = `<strong>${fullName}</strong>`;
nameElement.style.fontSize='16px';
nameElement.style.padding='1rem';

let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
let imgElement = document.querySelector('img');
imgElement.setAttribute('src', profilePicture);
imgElement.setAttribute('alt', profilePicture);
imgElement.setAttribute('title', profilePicture)

/* Step 5 - Array */
let array = ['lasagna','carne asada con pastel de papa','queso helado','adobo arequipeño'];
let anotherFavoriteFood = 'ice cream';

let elements = array.length;

array.map( (item, index)=>{
                           index < elements-1 ? foodElement.innerHTML +=`<strong>${item}</strong>, `: foodElement.innerHTML +=` <strong>${item}</strong>.<br>`;   
                          });
array.push(anotherFavoriteFood);

array.map( (item, index)=>{ 
    index < elements ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
   });

array.shift();   

array.map( (item, index)=>{ 
    index < elements-1 ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
   });

array.pop();

array.map( (item, index)=>{ 
    index < elements-2 ? foodElement.innerHTML +=`<em>${item}</em>, `: foodElement.innerHTML +=` ${item}.<br>`;   
   });