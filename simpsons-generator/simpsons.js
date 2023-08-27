const header = document.getElementById("header");
const text = document.getElementById("content");
const img = document.getElementById("image");

const getSimpson = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(res => res.json())
    .then((data) => {
        img.setAttribute("src", data[0].image);
        header.textContent = "\" "+data[0].quote+" \" ";
        text.textContent = data[0].character;
    })
}

getSimpson();
document.body.addEventListener("click", getSimpson);