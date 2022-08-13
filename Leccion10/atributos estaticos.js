class Persona {
 static contadorDeObjetosPersona = 0; // Atributos de nuestra clase

 email = 'Valor default del email';  //Atributos de nuestros Objetos 

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorDeObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorDeObjetosPersona);
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
    toString(){ // se aplica Polimorfismo en esta llamada (multiples formas en tiempo de ejecución) El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde metodo Static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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

console.log(empleado1.nombreCompleto()); // Polimorfismo ya que estamos usando el metodo de nombreCompleto pero de la clase empleado

console.log(empleado1.toString());

// console.log(persona1.saludar()); No es posible llamar un metodo Static desde una Objeto pero sí desde una CLASE

Persona.saludar();

Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

///Solo podemos acceder a los atributos estaticos desde la clase al igual que los metodos

console.log(Persona.contadorDeObjetosPersona);
console.log(Empleado.contadorDeObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Empleado.email);// Esto no es atributo estatico por ende se asocia al objeto y no a la clase