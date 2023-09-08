const letters = document.getElementById("letters");
const bar = document.getElementById("bar");
const container = document.querySelector("container");
let word = ["j","a", "v", "a", "s", "c", "r", "i", "p", "t"];
let evenLetters = [];
let oddLetters = [];

window.addEventListener("load", (e) => {
    bar.style.width = "100%";
    // créer des enfants à notre barre 
    setTimeout(() => {
      word.forEach((el) => {
        // create and style of all the letters
        const letterContainer = letters.appendChild(document.createElement("p"));
        const letter = letterContainer.appendChild(document.createElement("span"));
        letter.innerText = el.toUpperCase();
        //put the letter in the correct table
        if(word.indexOf(el) % 2 === 0) {
          evenLetters.push(el);
          letterContainer.classList.add("evenLetter");
        } else {
          oddLetters.push(el);
          letterContainer.classList.add("oddLetter");
        };
        setTimeout(() => {
          letter.classList.add("display");
        }, 100);
      })
    }, 100);
  });
