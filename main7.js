// 7. écrire une fonction qui tranforme une chaîne de caractères 
// contenant du JSON en object et le retourne. 
// Prototype : function parse_json(string){...}

function parse_json(string){
    let obj = JSON.parse(string);
    return obj;
}

console.log(parse_JSON({name: "Piseth", age: 39}));