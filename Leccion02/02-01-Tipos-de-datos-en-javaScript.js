//Tipo de dato
/*
Tipo de dato en Javascript
*/
var Nombre = "Cristian";
console.log (Nombre);

///Tipo de dtao númerico 
var Numero = 1000 ;
console.log (Numero);

Nombre = 10 ;
console.log (typeof Nombre)
//Tipo de dato object

var objeto = {
    Nombre : "Juan",
    Apellido : "Perez",
    Telefono : "3202067727"
}

console.log (typeof objeto)

//Tipo de dato Booleano 
var Bandera = true ;
console.log (typeof Bandera);

//Tipo de dato Function 
function MiFuncion (){}
console.log (typeof MiFuncion)

//Tipo de dato Symbol    
var Simobolo = Symbol("Mi simbolo");
console.log (typeof Simobolo)

//Tipo Clase
class Persona {
    constructor(Nombre, Apellido){
        this.Nombre = Nombre ;
        this.Apellido = Apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined

var X ;
console.log(typeof X);


//Nule = ausencia de valor 
var Y = null;
console.log(typeof Y);

var autos =  ['BMW', 'Audi', 'Volvo'];
console.log (autos);
console.log (typeof autos);

var z = '';
console.log (z);
console.log(typeof z);