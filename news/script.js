const API_KEY = "039a6308d88f4abb97f9c37ac8b661cf";
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
const articlesBox = document.getElementById("articlesBox");

const fetchMoviesJSON = async () => {
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
};

fetchMoviesJSON().then((articles) => {
  articles = articles.articles;
  console.log(articles); // fetched articles
  let articleNumber = 0;
  articles.slice(0, 3).map((article) => {
    articleNumber += 1;
    let description = article.description.substr(0, 50);
    let title = article.title.substr(0, 20);
    articlesBox.innerHTML += `
    <li>
      <img src="${article.urlToImage} alt="" />
      <a href="${article.url}" target="_blank">
        <h2>0${articleNumber}</h2>
        <h3>${
          article.title.length > 20
            ? title.substr(0, Math.min(title.length, title.lastIndexOf(" "))) +
              "..."
            : article.title
        }</h3>
        <p>${
          article.description.length > 50
            ? description.substring(
                0,
                Math.min(description.length, description.lastIndexOf(" "))
              ) + "..."
            : article.description
        }</p>
      </a >
    </li>
    `;
  });
});

const showMenu = () => {
  const menuButton = document.getElementById("menu_button");
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu_icon");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.classList.contains("open")
      ? (menuIcon.src = "assets/images/icon-menu-close.svg")
      : (menuIcon.src = "assets/images/icon-menu.svg");
  });
};

showMenu();
