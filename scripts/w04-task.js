/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rachel Tesene",
    photo: 'images/me.jpg',
    favoriteFoods: [
        "Sushi", 
        "Sunny side up eggs",
         "pears", 
         "Ice Cream"
    ],
    hobbies: [
        "reading",
        "video games",
        "baking",
        "board games",
    ],
    placesLived: []
};

myProfile.placesLived.push(
    {
        place: 'Manhattan, KS',
        length: '20 years'
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
    




/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


