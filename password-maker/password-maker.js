const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "&é\"'(-è_çà=$*!ù:;,§/.?µ£%+)";
const generateBtn = document.getElementById('generate-button');
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

const passwordGenerator = () => {
    let data = [];
    let password = "";

    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    // Careful! it is necessary to anticipate if the user does not enter any criteria
    if (data.length === 0) {
        alert('Veuillez entrer des critères');
        return;
    }

    // for increment element -> use += and not = (or the new element replace the old)
    for (i=0; i<rangeValue.value ; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;

    navigator.clipboard.writeText(passwordOutput.value);

    generateBtn.textContent = "Copié !";

    setTimeout(() => {
        generateBtn.textContent = "Générer mot de passe";
    }, 2000);
};

generateBtn.addEventListener("click", passwordGenerator)


 