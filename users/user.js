let userData = [];

const fetchUser = async () => {
    await fetch('https://randomuser.me/api/?results=24')
    .then((res) => res.json())
    .then((data) => (userData = data.results));
    // Carefull ! we need to wait for data
    // setTimeout(() => {
    //     console.log(userData);
    // }, 2000)
    console.log(userData);
    
}

const userDisplay = async () => {
    await fetchUser();
    
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return newDate;
    };

    //to calcul the number of days
    const dayCalc = (date) => {
        let today = new Date();
        let todayTimeStamp = Date.parse(today);
        let timeStamp = Date.parse(date);
        //to get the number of days :
        return Math.ceil((todayTimeStamp - timeStamp) / 8.64e7);
    }

    document.body.innerHTML = userData
        .map(
            (user) =>
        `
            <div class="card">
                <img src=${user.picture.large} alt="picture of ${user.name.last}">
                <h3> ${user.name.first} ${user.name.last} </h3>
                <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
                <em>Membre depuis : ${dayCalc(user.registered.date)} jours</em>
            </div>
        `
        )
        .join("")
}

userDisplay();
