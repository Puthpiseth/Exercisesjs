// 5. écrire uen fonction qui teste les 2 variables passés en paramètre. Prototype : is_similar(a,b){...}


function is_similar(a,b){
    
    //Si les variables ont le même type et la même valeur, elle affiche "Same type and value."
    if (a===b){
         return "Same type and value.";

    // Si les variables ont la même valeur, elle affiche "Same value.". 
    } else if (a==b){
        return "Same value.";

    // Si les variables ont le même type, elle affiche "Same type.".
    } else if (a.constructor==b.constructor){
        return "same type."
    
    // Sinon elle affiche "They are different. "
    } else {
        return "They are different.";
    }
}
console.log(is_similar(5, 5)); // "Same type and value.""
console.log(is_similar(32, "32")); // "Same value."
console.log(is_similar(49, 56)); // "Same type."
console.log(is_similar("x", 5)); // "They are different"

