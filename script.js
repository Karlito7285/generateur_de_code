const passwordOutput = document.getElementById(`password-output`);
const dataLowercase = `azertyuiopqsdfghjklmwxcvbn`.split(``); //array
const dataUppercase = `AZERTYUIOPQSDFGHJKLMWXCVBN`.split(``);
const dataNumbers = `0123456789`.split(``);
const dataSymbols = `<,;:!ù*^$>?./§%µ¨£`.split(``)


function generatePassword(){

    const data = [].concat( //concat des array
        lowercase.checked ? dataLowercase : [],         // si lowercase est selectionner alors cela envoi un élément de dataLowercase sinon cela envoi du vide
        uppercase.checked ? dataUppercase : [],
        numbers.checked ? dataNumbers : [],
        symbols.checked ? dataSymbols : [],
    );
    
    let passwordLenght = parseInt(document.getElementById('display-password-lenght').value);   //recuperer la valeur du mot de passe souhaité
    let newPassword = '';

    if (data.length === 0) {
        passwordOutput.innerHTML = "Générateur de MDP";
        alert(`Veuillez sélectionner des critères`);
        return;
    }

    for(let i =0; i <passwordLenght; i++){      // relance la boucle jusqu'à atteindre la longueur du mot de passe souhaité
        newPassword += data[Math.floor(Math.random() * data.length)];  // prend un caractère aléatoirement dans data
    }
    passwordOutput.value = newPassword;

    //COPIE AUTOMATIQUE
    passwordOutput.select();
    document.execCommand(`copy`);
    generateButton.innerHTML = "Copié";
    setTimeout(() => {generateButton.innerHTML = "Générer un mot de passe"},3000);
}