//Función de objetos de tipo persona
function Persona (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' '+ this.apellido
    }
} 


Persona.prototype.tel = '4433322'

let padre = new Persona ('Cristian', 'Diaz', 'cdiaz@gmail.com');
padre.tel = '112233'
console.log(padre.nombreCompleto());
console.log(padre.tel);

let madre = new Persona ('Nidia', 'Diaz', 'mariadiaz@mail.com')
console.log(madre.nombreCompleto());
console.log(madre.tel);

let miObjeto = new Object();
let miObjeto2 = {};

// let miCadena1 = new String('Hola');
// let miCadena2 = 'Hola';