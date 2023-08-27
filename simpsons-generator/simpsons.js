// https://api.blablagues.net/?rub=blagues


const header = document.getElementById("header");
const text = document.getElementById("content");
const img = document.getElementById("image");


// const getJoke = () => {
//     fetch("https://api.blablagues.net/?rub=blagues")
//     .then((res) => res.json())
//     .then((data) => {    
//             // header.textContent = data.data.content.text_head
//             // content.textContent = data.data.content.text !== "" 
//             // ? data.data.content.text
//             // : data.data.content.text_hidden
//             //on peut raccourcir grâce au destructuring :
//             const {content} = data.data;
//             header.textContent = content.text_head
//             text.textContent = content.text !== "" 
//             ? content.text
//             : content.text_hidden
//         }
//     );
// }

// const getJoke = () => {
//     fetch("https://api.chucknorris.io/jokes/random")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         header.textContent = data.value;
//     })
// }

// getJoke();
// document.addEventListener("click", getJoke)

const getSimpson = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(res => res.json())
    .then((data) => {
        console.log(data[0])
        img.setAttribute("src", data[0].image);
        header.textContent = "\" "+data[0].quote+" \" ";
        text.textContent = data[0].character;
    })
}

getSimpson();
document.body.addEventListener("click", getSimpson);

