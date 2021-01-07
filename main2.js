
// 2. écrire une fonction qui affiche tous les entiers de 0 à la valeur de la variable 
// passée en paramètre et retourne 'true'. Prototype : function print_until(max)

function print_until(max=null){
    for (let nbr=0; nbr<=max; nbr++){
        console.log(nbr);
    }
    return true;
}
print_until();

