// 4. écrire une fonction qui affiche toutes les valeurs du tableau passé en paramètre, 
// chacune séparée par un retour à la ligne. Cette fonction retourne le nombre d'éléments 
// du tableau. Prototype : print_tab(arr)

function print_tab(arr) {
    let str = "";
    // affiche toutes les valeurs du tableau 
    for (let i=0; i<arr.length; i++){

       // chacune séparée par un retour à la ligne
        str += arr[i] + "\n"; 
        

    }
    str += arr.length;// affiche le nombre d'éléments
    return str; // retourne le nombre d'éléments
}
console.log(print_tab(["a", "b", "c", "d"]));