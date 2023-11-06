const scrollEffect = () => {
    window.addEventListener("scroll", () => {
    //menu
    const menu = document.querySelector("nav");
    if (window.scrollY === 0) {
        menu.style.height = "90px";
    } else {
        menu.style.height = "50px";
    }

    //image
    const image = document.getElementById("imgImprovise");
    if (window.scrollY > 10) {
        image.style.transform = "translateX(0)";
        image.style.opacity = "1";
    } else {
        image.style.transform = "translateX(-200px)";
        image.style.opacity = "0";    }
    
    //popup
    const popup = document.getElementById("popup");
    const pageBottom = document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
    if(pageBottom) {
        popup.style.transform = "translateX(0)";
        popup.style.opacity = "1";
    } else {
        popup.style.transform = "translateX(400px)";
        popup.style.opacity = "0";
    }
        
})
}
scrollEffect();

// Faire apparaitre la popup quand on est en bas du site
const popupDelete = () => {
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
        popup.remove();
    })
};
popupDelete();
