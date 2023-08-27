const result = document.getElementById("result");
const form = document.querySelector('form');
const input = document.querySelector('input');
let meals= [];

input.addEventListener('input', (e) => {
    fetchMeals(e.target.value);
})

// we get the datas from API with a link
const fetchMeals = async (search) => {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
    // console.log(meals)
} 

// we treat the datas and transform them in lists of recipes
const mealsDisplay = () => {
    if (meals === null) {
        result.innerHTML = "<h2>Aucun résultat</h2>";
    } else {
        // ci-dessous on limite le résultat à 12 résultats
        meals.length = 12;
        // on utilise map pour créer le nouveau tableau
        result.innerHTML = meals.map(
            (meal) => {
                let ingredients = [];
                // console.log(meal);
                for(i=0; i<21 ; i++){
                    if(meal[`strIngredient${i}`]){
                        let ingredient = meal[`strIngredient${i}`];
                        let measure = meal[`strMeasure${i}`];

                        ingredients.push(`<li>${ingredient} - ${measure}</li>`);
                    }
                }
                // console.log(ingredients)
                return `
                    <li class="card">
                        <h2>${meal.strMeal}</h2>
                        <p>${meal.strArea}</p>
                        <img src=${meal.strMealThumb} amt=${meal.strMeal}>
                        <ul>
                            ${ingredients.join("")}
                        </ul>
                    </li>
            `
            }
        ).join("");
    }
} 

// we get what is writting in the inputs
form.addEventListener('submit', (e) => {
    e.preventDefault();
    mealsDisplay();
})