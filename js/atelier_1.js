console.log("Hello wilders !");

// Récupérer le premier nombre via un prompt
let nb1 = parseInt(prompt("Veuillez entrer le premier nombre :"));

// Récupérer le deuxième nombre via un prompt
let nb2 = parseInt(prompt("Veuillez entrer le deuxième nombre :"));

// Récupérer l'opérateur via un prompt (par exemple : +, -, *, /)
let operateur = prompt("Veuillez entrer l'opérateur (+, -, *, /) :");

// Initialiser une variable pour stocker le résultat
let resultat;

// Effectuer l'opération selon l'opérateur
switch (operateur) {
    case "+":
        resultat = nb1 + nb2;
        break;
    case "-":
        resultat = nb1 - nb2;
        break;
    case "*":
        resultat = nb1 * nb2;
        break;
    case "/":
        resultat = (nb2 !== 0) ? nb1 / nb2 : "Erreur : Division par zéro !";
        break;
    default:
        resultat = "Opérateur non valide !";
}

// Afficher le résultat
alert("Le résultat de l'opération est : " + resultat);




let playerName = prompt("What is your name ?");
// Demande le nom du joueur
const rightPrice = Math.ceil(Math.random() * 100);
console.log(rightPrice);
// Défini le chiffre à trouver
        
let number;
// Déclaration d'une variable vide

function guess() {
    number = parseInt(prompt("Guess the right number"));
    if (number < rightPrice) {
        alert("It's more !");
        guess();
    } else if (number > rightPrice) {
        alert("It's less !");
        guess();
    } else {
        alert(`Congratulation ${playerName} !`);
    }
}
// Déclaration de la focntion guess.
guess();
// Invocation de guess