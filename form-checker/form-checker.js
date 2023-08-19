const inputs = document.querySelectorAll('input[type="text"], input[type="password"');
let pseudo, email, password, confirmPass;
const progressBar = document.getElementById("progress-bar");
const form = document.querySelector("form");

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");
    if (!valid) {
        container.classList.add('error');
        span.textContent = message;
    } else {
        container.classList.remove('error');
        span.textContent = message;
    }
} 

const pseudoChecker = (value) => {
    if (value.length > 0  && (value.length < 3 || value.length > 20)) {
        errorDisplay("pseudo", "The email adress must contain between 3 and 20 caracters", "");
        pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9_/-]*$/)) {
        errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères spéciaux");
        pseudo = null;
    } else {
        errorDisplay("pseudo", "", true);
        pseudo = value;
    }
};

const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay("email", "the email address is not valid", "");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }
};

const passwordChecker = (value) => {
    progressBar.classList = "";
    if(!value.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )) {
        errorDisplay("password", "Minimum of 8 characters including a capital letter, a number and a special character", "");
        progressBar.classList.add('progressRed');
        password = null;
    } else if (value.length < 12) {
        progressBar.classList.add('progressBlue');
        errorDisplay("password", "", true);
        password = value;
    } else {
        progressBar.classList.add('progressGreen');
        errorDisplay("password", "", true);
        password = value;
    }
    if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
    if (value !== password){
        errorDisplay("confirm", "Passwords do not match");
        confirmPass = null;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true;
    };
};


//on récupère l'id de l'even et on regarde sur quel champs on est
inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "pseudo": 
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;   
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default:
                null;        
        }
    })
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pseudo && email && password && confirmPass) {
        const data = {
            pseudo: pseudo,
            email: email,
            password: password,
        };
        console.log(data);
        inputs.forEach((input) => {
            input.value = "";
        })
        progressBar.classList = "";

        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Thank you for registration !");
    } else {
        alert("Please complete the fields")
    }
})