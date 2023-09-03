const quote = document.querySelector(".advice-quote");
const adviceNumber = document.querySelector(".advice-number");
const btn = document.querySelector("button");

let advices = [];

const getData = async () => {
    await fetch("https://api.adviceslip.com/advice").then(res => res.json()).then((data) => (advice = data.slip));
}

const displayAdvice = async () => {
    await getData();
    quote.textContent = advice.advice;
    adviceNumber.textContent = `advice #${advice.id}`;
}

displayAdvice();
btn.addEventListener("click", displayAdvice);
