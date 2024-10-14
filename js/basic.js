window.onload = (event) => {
// Sécurité : on attend que la fenêtre soit charger.
    document.addEventListener("DOMContentLoaded", (event) => { 
    // Sécurité : on attend que DOM soit charger.
        
        console.log ("Hello world !");
        // Permet d'afficher du text dans la console.

        /**
        * Ceci est un commentaire
        * sur plusieurs
        * lignes
        */

        //  Opérations arithmétiques
        console.log (1 + 1);
        // Addition : 1 + 1 => 2
        console.log (2 - 2);
        // Soustraction : 2 - 2 => 0 
        console.log (2 * 3);
        // Muliplication : 2 * 3 => 6
        console.log (6 / 2);
        // Division : 6 / 2 => 3
        console.log (12 % 10);
        // Modulo : 12 % 10 => 12 / 10 = 1.2 => 2

        // Comparaisons
        // Valeur égale et type égal
        console.log (1 === 1);
        // true
        console.log ("Bob" === "Bob");
        // true
        console.log ("Bob" === "bob");
        // false
        console.log (1 === "1");
        //false

        // Valeur égale
        console.log (1 == 1); 
        // true
        console.log (1 == "1");
        // true

        // Différentes de
        console.log (1 != 2);
        // true
        console.log (1 != "1"); 
        // false

        //Valeur différente ou type différent
        console.log (1 !== "1");
        // true
        console.log (1 !== 1);
        // faux

        // Supérieur à, supérieur ou égal
        console.log (2 > 1); 
        // true
        console.log (2 >= 2); 
        // true
        //Ça fonctionne aussi dans l'autre sens avec le symbole inférieur <.
        console.log (2 < 3); 
        // true
        console.log (2 <= 2); 
        // true

        // Variables
        let myString = "Bob";
        // variable de type String
        let myNumbers = 30
        // variable de type Numbers
        let myArray = ["Bob", "Henrie", "Jean"];
        // variable de type Array
        let myObject = {
            age: 30,
            metier: Dev
        }
        // variable de type Object
        let myFunction = function () {
            console.log ("My name is Bob");
        };
        // variable de type Function

        myString = "Pierre";
        // Change la valeur de la variable myString
        console.log (myString);
        // Pierre

        const mySecondString = "Maxime";
        // Const défini une constante et ne peux pas etre modifié.

        //Opérateurs d'incrément
        let myBudget = 0;

        myBudget++;
        console.log(myBudget); 
        // affiche 1

        myBudget += 2; 
        console.log(myBudget); 
        // affiche 3

        myBudget = myBudget + 1;
        console.log(myBudget); 
        // affiche 4

        myBudget--;
        console.log(myBudget); 
        // affiche 3

        myBudget -= 2; 
        console.log(myBudget); 
        // affiche 1

        myBudget = myBudget - 1;
        console.log(myBudget); 
        // affiche 0

        let hello = "Hello";
        hello += ", World!";
        console.log(hello);
        //  "Hello, World!"

        //L'opérateur "typeof"
        console.log (typeof 1);
        // type "numbers"

        // Les types primitifs
        console.log (typeof true);
        // "boolean"
        console.log (typeof "Hello, World !");
        // "string"
        console.log (typeof 1234);
        // "number"
        console.log (typeof 12.54);
        // "number"
        let empty = null;
        
        console.log (typeof empty);
        // "object"

        let notDefined;
        console.log (typeof notDefined);
        // "undefined"

        console.log (typeof nothing);
        // ReferenceError: nothing is not defined

        //Types complexes (non-primitifs)
        console.log (typeof console.log);
        // "function"

        const person = {
            name: "Bob", 
            age: 25, 
            sayHello: function(){
              console.log("Hello");
            }
          }
          
          person.sayHello();
          // "Hello"
          
          typeof person;
          // "object"

        const colors = ["Red", "Blue", "Yellow"];
        typeof colors;
        // "object"

        // Conditions
        if (condition) {
            // Do something if the condition is true
        } else {
            // Do something if the condition is false
        }

        const persons = "Bob";
        if (persons === "Bob") {
            console.log("Hello, Bob!");
        } else {
            console.log("You're not Bob, go away!");
        }

        // Prompt
        //  We create the variable password and we assign the result of prompt on it
        const password = prompt("What is the magic password?");

        // We compare the value assigned to pass to the string "secret"
        if (password === "secret") {
            // If the pass matches the string we print Welcome
            console.log("Welcome! 👋");
        } else {
            // If the pass doesn't match the string we print Welcome
            console.log("Wrong password! ❌");	
        }

        const age = prompt("How old are you?");
        console.log(typeof(age));
        // String

        const ageNumber = parseInt(age);
        console.log(typeof(ageNumber));
        // Number

        const user = prompt("What's your name?");

        if(user === "Paul"){
            console.log("Hello, Paul!");
        }
        else if(user === "John"){
            console.log("Hello, John!");
        }
        else if(user === "Ringo"){
            console.log("Hello, Ringo!");
        }
        else{
            console.log("Sorry, not today...");
        }

        const userAge = parseInt(prompt("How old are you?"));

        if (userAge < 3) {
        console.log("Hello, Baby 🍼!");
        } else if (userAge < 18) {
        console.log("Hi! 👋");
        } else if (userAge < 100) {
        console.log("Greetings 🖖");
        } else {
        console.log("Wow... 😲");
        }

        const userName = "Paul";
        const passwords = "secret";

        if(userName === "Paul" || userName === "Bob"){
            console.log("Welcome!");
        }

        if(userName === "Paul" && passwords === "secret"){
            console.log("Welcome!");
        }

        let userCountry = prompt("Where are you from");

        const today = new Date().getDay();
        console.log(today);
        
        switch(today){
          case 0:
            console.log("it's Sunday");
            break;
          case 1:
            console.log("it's Monday");
            break;
          case 2:
            console.log("it's Tuesday");
            break;
          case 3:
            console.log("it's Wednesday");
            break;
          case 4:
            console.log("it's Thursday");
            break;
          case 5:
            console.log("it's Friday");
            break;
          case 6:
            console.log("it's Saturday");
            break;
          default:
            console.log("Invalid date");
            break;
        }

        // Les tenaires
        names === "Bob" ? console.log("Hello, Bob") : console.log("Go Away!");



        let arr = [1, 2, 3, 4]
        arr.splice(1)
        console.log(arr);
        arr = [1, 2, 3, 4];
        arr.splice(2, 1)
        console.log(arr);
        arr = [1, 2, 3, 4];
        arr.splice(1, 2)
        console.log(arr);
        arr = [1, 2, 3, 4];
        arr.splice(1, 2, "two", "three")
        console.log(arr);
    });
    
};