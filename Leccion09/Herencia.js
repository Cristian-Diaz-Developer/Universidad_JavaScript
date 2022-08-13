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

    get apellido (){
        return this._apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }
    nombreCompleto (){
        return this._nombre + ' '+ this._apellido;
    }
}

class Empleado extends Persona{    
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento (){
       return this._departamento;
    }

    set departamento (departamento){
        return this._departamento = departamento;
    }  
    //Sobreescritura (modificar el comportamiento de un metodo definido en la clase padre ) se deb llamar al metodo igual como en la clase padre de lo contrario lo toma como un nuevo metodo.
    nombreCompleto(){
        // return this._nombre + ' ' + this._apellido + ', ' + this._departamento; // se utiliza super para llamar al metodo definido en la clase padre
        return super.nombreCompleto() + ', '+ this._departamento;
    }
}


let persona1 = new Persona('Cristian', 'Diaz');
console.log(persona1);

let empleado1 = new Empleado ('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);

console.log(empleado1.nombreCompleto());
