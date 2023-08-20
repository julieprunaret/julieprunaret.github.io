const counter = document.getElementById("countdownDisplay");
const form = document.getElementById("form");
let totalSeconds;
let interval;

const countDown = () => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;

    counter.textContent = `${minutes} : ${sec}`;
    console.log(minutes, seconds);

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        counter.textContent = "Over !";
        clearInterval(interval);
    }
}

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // get the value of the input
        if(isNaN(choice.value)) {
            alert("It's not a number");
        } else {
            totalSeconds = choice.value * 60;
            choice.value = "";
            //you need to clear interval before
            clearInterval(interval);
            setInterval(countDown, 1000);
        }
    })

countDown();