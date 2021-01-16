// 6. créer une fonction "convert_number" qui affiche 
// la valeur ASCII du nombre donné en paramètre. 
// Prototype : function convert_number(nbr){...}

function convert_number(nbr){
    console.log(nbr.toString().charCodeAt());
}

convert_number(3); // 51
convert_number("b"); // 98
convert_number(""); // NaN
convert_number("D"); // 68
