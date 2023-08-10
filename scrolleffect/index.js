let lastScroll = 0;
window.addEventListener("scroll", () => {
    const menu = document.querySelector("nav");
    if (window.scrollY > lastScroll) {
        console.log("on monte");
        menu.classList.remove("show");
    }   else {
        menu.classList.add("show");
    }

    lastScroll = window.scrollY;
})
