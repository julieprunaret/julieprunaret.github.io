const counterContainer = document.querySelector(".counter");
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);


    //créer la taille de la bulle
    const size = Math.random() * 100 + 150 + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // gérer si c'est un nombre positif ou negatif
    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
        counter++;
        counterContainer.innerText = counter;
        bubble.remove();
    })

    setInterval(() => {
        bubble.remove();
    }, 5000)
}

setInterval(bubbleMaker, 500);