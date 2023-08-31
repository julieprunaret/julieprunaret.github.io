const main = document.querySelector('main');

// this array is the original, we call it when we need to reboot or use the application without datas in the localstorage
const basicArray = [
    { pic : 0, min : 1 },
    { pic : 1, min : 1 },
    { pic : 2, min : 1 },
    { pic : 3, min : 1 },
    { pic : 4, min : 1 },
    { pic : 5, min : 1 },
    { pic : 6, min : 1 },
    { pic : 7, min : 1 },
    { pic : 8, min : 1 },
    { pic : 9, min : 1 },
];

// this array gonna change, depends of the context and be replace with map() method
let exerciseArray = [];

//Get stored exercise array
// the function doesn't need to be called !
(() => {
    if(localStorage.exercises) {
        exerciseArray = JSON.parse(localStorage.exercises);
    } else {
        exerciseArray = basicArray;
    }
})();

// the exercise Class is made to control the exercise progress after we started
class Exercise {
    constructor() {
        this.index = 0;
        this.minutes = exerciseArray[this.index].min;
        this.seconds = 0;
    }

    // the updatecountdown give the rhythm of the exercise
    updateCountdown() {
        // if the second looks like 9:2 it's not aesthetic so we put a new "0" before the number who's alone to get 9:02
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    
        // we are using the setTimeOut method with recursion, easier to manage that SetInterval
        setTimeout(() => {
          // if all are in 0, we put +1 to the index to go to the next exercise
          if (this.minutes === 0 && this.seconds === "00") {
            // we go to the next exercise
            this.index++;
            // we call the function (in the object => so with this.) ring()
            this.ring();
            // if the index in under the limit of the array (so all the exercises are not played again)
            if (this.index < exerciseArray.length) {
              //we get the number of minutes that we planned
              this.minutes = exerciseArray[this.index].min;
              // we put the start value to the seconds
              this.seconds = 0;
              this.updateCountdown();
            } else {
              // if the index is over (all exercises already played)
              return page.finish();
            }
          // if only the seconds are at 0 (expl: 4:00)
          } else if (this.seconds === "00") {
            this.minutes--;
            this.seconds = 59;
            this.updateCountdown();
          } else {
            this.seconds--;
            this.updateCountdown();
          }
        }, 1000);
    
        // we send this dynamic render
        return (main.innerHTML = `
          <div class="exercice-container">
            <p>${this.minutes}:${this.seconds}</p>
            <img src="./img/${exerciseArray[this.index].pic}.png" />
            <div>${this.index + 1}/${exerciseArray.length}</div>
          </div>`);
      }

      // the ring function calls the native object Audio
      ring() {
        const audio = new Audio();
        audio.src = "ring.mp3";
        audio.play();
      }
};

// page content global
const utils = {
    // for all the pages, the content has the same structure
    pageContent: function(title, content, btn) {
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector(".btn-container").innerHTML = btn;
    },

    //we put the result of the input (the number of minutes) inside the array
    handleEventMinutes: function () {
        // we trigger the inputs
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            // we call the event 
            input.addEventListener("input", (e) => {
                //we create a new tab with map() method
                exerciseArray.map((exo) => {
                    // to trigger just the element concerned and not all elements (without that "if" we would change all the values in the array)
                    if(exo.pic == e.target.id) {
                        // we change the type into number (the result of the input is a string)
                        exo.min = parseInt(e.target.value);
                        // you should always check the new tab :
                        //console.log(exerciseArray);
                        //finally we send the result into our localstorage method
                        this.store();
                    }
                })
            })
        })
    },

    // this function change the exercises positions
    handleEventArrow: function () {
        // we trigger the arrows buttons
            document.querySelectorAll('.arrow').forEach((arrow) => {
                arrow.addEventListener("click", (e) => {
                    // we identify the position we have to create a variable
                    let position = 0;
                    // we create a new array with the map() method
                    exerciseArray.map((exo) => {
                        //if the element were we click has the good dataset, and his position is not 0, we can manage it
                        if(exo.pic == e.target.dataset.pic && position !== 0) {
                            // we exchange the exercise on the right with the exercise on the left
                            [exerciseArray[position],exerciseArray[position - 1]] = [exerciseArray[position - 1],exerciseArray[position]];
                            // we call again the function lobby and stock inside the local storage
                            page.lobby(); 
                            this.store();
                            // console.log(exerciseArray);
                        } else {
                            position ++;
                            // console.log(position);
                        }
                    })
            })
        })
    },

    //this function delete elements
    deleteItem: function () {
        document.querySelectorAll('.deleteBtn').forEach((btn) => {
            btn.addEventListener("click", (e) => {
                // we create an empty array to welcome the new number of exercises
                let newArray = [];
                exerciseArray.map((exo) => {
                    // we take all the exercises except the one we clicked to put them inside a new tab
                    if(exo.pic != e.target.dataset.pic) {
                        newArray.push(exo);
                        // console.log(exerciseArray);
                    } 
                })
                // we give the new value to the array who's on content
                exerciseArray = newArray;
                // we call again the function lobby and stock inside the local storage
                page.lobby();
                this.store();
            })
        })
    },

    reboot: function () {
        // we call the original tab that we kept in the beginning of our code page
        exerciseArray = basicArray;
        page.lobby();
        this.store();
    },

    store: function () {
        // we put all the exercises inside the local storage, and turn them into JSON datas (or the local storage can't understand)
        localStorage.exercises = JSON.stringify(exerciseArray);
    }
};

// page content details
const page = {
    
    lobby: function()  {
        let mapArray = exerciseArray.map((exo) => 
            `
                <li>
                    <div class="card-header">
                        <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
                    </div>
                    <img  src="./img/${exo.pic}.png" />
                    <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
                    <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
                </li>
            `    
        ).join("")

        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
            "<ul>" + mapArray + "</ul>",
            "<button id='start'>Commencer <i class='far fa-play-circle'></i></button>"
        );

        // we have to call the function handleEventMinutes here and not at the end to run with the array
        utils.handleEventMinutes();
        utils.handleEventArrow();
        utils.deleteItem();
        reboot.addEventListener('click', () => utils.reboot());
        start.addEventListener('click', () => this.routine());
    },

    routine: function() {
        const exercise = new Exercise();
        utils.pageContent("Routine", exercise.updateCountdown(), null);
    },

    finish: function() {
        utils.pageContent(
            "C'est terminé !",
            "<button id='start'>Recommencer <i class='far fa-play-circle'></i></button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='far fa-times-circle'></i></button>"
            );
        
        start.addEventListener('click', () => this.routine());
        reboot.addEventListener('click', () => utils.reboot());
    },
};

page.lobby();