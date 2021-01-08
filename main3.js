// 3. écrire une fonction qui retourne une chaîne de caractères composée d'autant de 'piou' 
// que la valeur de la variable passée en paramètre. Prototype: function angry_bird(nbr)

// version itérative 
// function angry_bird(nbr){
//     let piou = "";
//     for (let i = 0; i<nbr; i++){
//         piou += "piou";
// }
//     return piou;
// }
// console.log(angry_bird(3));

// version 

function angry_bird(nbr){
    if (nbr===0){
        return "";
    } else {
        return "piou" +angry_bird(nbr-1);
    }
   
}
console.log(angry_bird(4)) // Appel piou 4 fois
