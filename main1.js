// Suite d'exercices permettant d’appliquer les notions de bases.
// Pour chaque exercice vous devrez :
// 1. crée un fichier .js
// 2. faire a minima un 'commit' et 'push' sur un repo distant (gitHub)
// 3. TESTER VOTRE CODE, celui-ci ne doit pas sortir d'erreur dans 
//le cas ou on ne renseigne pas les parametres de la fonction ou alors 
//qu'on renseigne une valeur du mauvais type, etc... !

/*1. écrie une fonction qui affiche ‘Site interdit aux mineurs.’ 
si la variable passée en paramètre est inférieure à 18, ou ‘Vous pouvez 
entrer !’ si elle supérieure ou égale à 18.*/

function checkAge(age) {
    if (age <18){
    return "Site interdit aux mineurs !";
    } else {
    return "Vous pouvez entrer !";
    }
    
    }
    console.log(checkAge()); // "Vous pouvez entrer !""
    console.log(checkAge(10)); // "Site interdit aux mineurs !"
    console.log(checkAge("10")); // "Site interdit aux mineurs !"
    console.log(checkAge(18)); // "Vous pouvez entrer !""
    console.log(checkAge(19)); // "Vous pouvez entrer !""