//we create an empty array for the datas from the API 
let countriesData = [];
// we create variables for DOM's elements
const countriesContainer = document.querySelector(".countries-container");
const input = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const btnSort = document.querySelectorAll(".btnSort");
// the sortMethod has a default value wich is Max to min
let sortMethod = "MaxToMin";

// first we have to fetch the datas from the API
// For that we use ASYNC AWAIT method
const fetchCountries = async () => {
    await fetch("https://restcountries.com/v3.1/all")
    // we need to turn the array into JSON element :
    .then((res) => res.json())
    // we put the element on a variable
    .then((data) => countriesData = data);

    // finally we cas run the function for display datas
    getCountries();
}

// we display datas with all filters and sorts
const getCountries = () => {
    // render the result we have to call innerHTML and using the variable "countriesData"
    countriesContainer.innerHTML = countriesData
    // we put a filter inside if the search input is'nt empty
    .filter((country) => country.translations.fra.common
        // we check if the value inside the name includes the value inside the search input
        .toLowerCase()
        .includes(input.value.toLowerCase())
    )
    // we sort the datas, using sort method (confer to the end of the page where it's call)
    .sort((a, b) => {
        if(sortMethod === "maxToMin"){
            return b.population - a.population;
        } else if (sortMethod === "minToMax") {
            return a.population - b.population;
        } else if (sortMethod === "alpha"){
            return a.translations.fra.common.localeCompare(
                b.translations.fra.common
            );
        }
    })
    // We just display the number of items that we have inside the range input (confer to the end of the page where it's call) with slice method
    .slice(0, inputRange.value)
    // finally we are using the method map to create a new array
    .map(
        (country) => 
        {
        return `
            <div class="card">
                <img class="image" src=${country.flags.svg} alt="${country.flags.alt}">
                <h2>${country.translations.fra.common}</h2>
                <h3>${country.capital}</h3>
                <p>Population : ${country.population.toLocaleString()}</p>
            </div>
        `;
        }
    ).join("");
}

//we run the fetch method even the page is loaded
window.addEventListener("load", fetchCountries);
//everytime that we put new letters inside our search input we run again getCountries()
input.addEventListener("input", getCountries);
//same when we moved the range input. The value is sended into the span
inputRange.addEventListener("input",  (e) => {
    getCountries();
    rangeValue.textContent = e.target.value;
});
// foreach button clicked, we get the id and send it to the sort method (cf l36)
btnSort.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        sortMethod = e.target.id;
        getCountries();
    })
})