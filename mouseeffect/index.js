// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
const circleMaker = (size) => {
    let circle = document.createElement("div");
    circle.classList.add("circle",`${size}`);
    document.body.appendChild(circle);
    window.addEventListener('mousemove', (e) => {
        circle.style.setProperty("--left", e.pageX + "px");
        circle.style.setProperty("--y", e.pageY + "px");
    })

}

["smallCircle","mediumCircle","largeCircle"].forEach(circleMaker);
