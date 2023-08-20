
let date = new Date();
//the input format for date is YYYY-MM-DD
const today = date.toISOString().split("T")[0];
start_date.value = today;

// to allow the reservations before today :
start_date.min = today;

//Tomorrow date calc
let tomorrow = new Date();
//we can have the day after with the method getDate()+1
tomorrow.setDate(tomorrow.getDate() + 1);
//the input format for date is YYYY-MM-DD
tomorrowFormat = tomorrow.toISOString().split("T")[0];
//to put the value inside te input
end_date.value = tomorrowFormat;
// to allow the reservations before today :
end_date.min = tomorrowFormat;


//If the start=date change, the date of end change too
start_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split("T")[0];
    }
});

end_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() - 1);
        start_date.value = day.toISOString().split("T")[0];
    }
});

const bookingCalc = () => {
    // to calculate dates, we need a timestamp (re-convert to new Date() )
    let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));
    //diffTime in seconds between the inputs
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    total.textContent = diffDays*nightPrice.textContent;
};

console.log(nightPrice.value)

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();