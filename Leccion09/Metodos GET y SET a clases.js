//NO es posible crear Objetos antes de declarar la clase, ya que no aplica el concepto de Hoisting
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre (){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Cristian', 'Diaz');
persona1.nombre = 'Juan Carlos'; // Set nombre
console.log(persona1.nombre); // Get nombre