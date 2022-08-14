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
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`
    }
}
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
        // console.log(tipo.departamento); No es posible ya que el atributo es de tipo Gerente y no existe en empleado 
    }
    else if (tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
}

let empleado1 = new Empleado ('Juan', 5000);
// console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente ('Cristian', 1500,'Sistemas');

// console.log(gerente1.obtenerDetalles());\
determinarTipo(empleado1);
determinarTipo(gerente1);
