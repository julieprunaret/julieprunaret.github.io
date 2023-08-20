const colorContainer = document.getElementById("color-container");

const getColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = color;
    colorContainer.innerText= color;
}

setInterval(getColor, 2000)

