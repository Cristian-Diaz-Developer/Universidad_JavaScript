function miFuncion (a, b){
    console.log ("Suma: " + (a + b));
    return a + b;
}
let resultado = miFuncion (4,2);
console.log(resultado);

//Declaración de una función de tipo expresión

let sumar = function (a, b){return a + b};

resultado = sumar (1, 2);
console.log(resultado);