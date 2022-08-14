class Empleado{
    constructor (nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }    
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}` // Sobreescritura del metododo la clase padre 
    }
}

let empleado1 = new Empleado ('Juan', 5000);
console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente ('Cristian', 1500,'Sistemas');
console.log(gerente1);
console.log(gerente1.obtenerDetalles());