
const form = document.querySelector("form");
const list = document.getElementById("charactersList");
const listContainer = document.querySelector(".card");
const storageDeleteBtn = document.getElementById("storageDelete");
let characters = [];

class Character {
    constructor (name, family, level, id) {
        this.name = name;
        this.family = family;
        this.level = level;
        this.id = id;
    }
}

//Get stored characters array
window.addEventListener("load", () => {
    // we reset the form just in case the user didn't click on the submit button before reload the page
    resetForm()
    if(localStorage.characters) {
        // convert to js array with parse() method
        characters = JSON.parse(localStorage.characters);
        // we run the function to generate characters in the DOM
        createTab(characters);
    } else {
        // if there is no array in the storage we hide the button "clear characters" (no characters to clear !)
        storageDeleteBtn.style.display = "none";
    }
});

//------------
// localstorage
//------------

const storeList = () => {
    // convert to json with stringify() method
    localStorage.characters = JSON.stringify(characters);
}

storageDeleteBtn.addEventListener("click", () => {
    localStorage.clear();
    storageDeleteBtn.style.display = "none";
    characters = [];
    createTab(characters);
});

//-----------

const resetForm = () => {
    formName.value = "";
    formFamily.value ="";
    formLevel.value = 0;
}

//the id is generate randomly and automatically
const randomId = () => Math.random();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //we put a new object in the characters array using Character's class
    characters.push(new Character(formName.value, formFamily.value, formLevel.value, randomId()));
    //the array has to be generate with the new value
    createTab(characters);
    // and to be stored in the localstorage
    storeList();
    // finally, the form has to be empty
    resetForm();
})

// this function create the visual part of the array in the DOM
const createTab = (array) => {
    list.innerHTML = array.map(
        (character) => {
            return `
            <li id=${character.id}>
                <img src="./img/${character.family}.svg" alt="picture of ${character.family}" class="picture-card">
                <h2> ${character.name} </h2>
                <h3> class : ${character.family} </h3>
                <p> level : ${character.level} </p>
                <button type"text" class="trash" data-character=${character.id}>in the garbage !</button>
            </li>
            `;
        }
    ).join("");

    //to hide and show the button "clear characters"
    if(characters.length === 0){
        storageDeleteBtn.style.display = "none";
    }  else {
        storageDeleteBtn.style.display = "block";
    }

    //to delete characters
    //we push the button
    document.querySelectorAll(".trash").forEach((trash) => {
        trash.addEventListener("click", (e) => {
            //a new array is created
            let newArray = [];
            // we go through the table
            characters.map(
                (character) => {
                    //for every object who's not associate with the dataset of our button
                    if(character.id != e.target.dataset.character){
                        //we push the object inside our new array (all object except the one we want to delete)
                        newArray.push(character);
                    }
                }
            )
            // wi give the content of the new array to the characters tab
            characters = newArray;
            // we generate the DOM part
            createTab(characters);
            // and store inside localstorage
            storeList();
        })
    })
}

//Thank you for you attention ! Julie :)