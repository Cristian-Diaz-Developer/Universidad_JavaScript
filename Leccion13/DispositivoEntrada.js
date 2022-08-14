class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
       return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
       this._tipoEntrada = tipoEntrada; 
    }

    get marca (){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton},  tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

let raton1 = new Raton( 'USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton ('Bluethooth', 'Dell');
console.log(raton2.toString());

class Teclado extends DispositivoEntrada {

    static contadorTeclado = 0;
    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;        
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor (marca, tamaño){//0241
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }

    // get marca(){
    //     return this._marca;
    // }
    // set marca (marca){
    //     this._marca = marca;
    // }

    // get tamaño (){
    //     return this._tamaño;
    // }    
    // set tamaño (tamaño){
    //     this._tamaño = tamaño;
    // }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._idRaton = raton;
        this._idTeclado = teclado;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._idTeclado} \n ${this._idRaton}`;
    }
}

class Orden { 
    
    static contadorOrdenes=0;
    constructor(){
       this._idOrden = ++Orden.contadorOrdenes;
       this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orde: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}


let teclado1 = new Teclado ('Bluetooth','MSI')
let teclado2 = new Teclado ('USB', 'Acer')
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('LG', 29);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora ('HP', monitor1, teclado1, raton1)
console.log(computadora1.toString());
// console.log(`${computadora1}`); // Otra opcion para no tener que llamar al metodo toString

let computadora2 = new Computadora ('Armada', monitor2, teclado2, raton2);
console.log(computadora2.toString());

let orden1 = new Orden ()
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden()
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();