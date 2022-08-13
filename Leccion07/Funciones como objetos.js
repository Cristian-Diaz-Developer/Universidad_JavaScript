//Funciones como objetos
function miFuncion (a, b){
    console.log (arguments.length);
    return a + b;
}
let resultado = miFuncion (2,3);
console.log(resultado);

//Declaración de una función de tipo expresión

let sumar = function (a, b){return a + b};

resultado = sumar (1, 5);
console.log(resultado);

var miFuncionTexto = miFuncion.toString ();
console.log (miFuncionTexto);