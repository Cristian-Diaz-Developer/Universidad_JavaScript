class Cliente extends Persona{

    static contadorClientes = 0

    constructor (fechaRegistro){
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get _idCliente(){
        return this._idCliente;
    }
    get _fechaRegistro (){
        return this._fechaRegistro
    }
    set _fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} 
        ${this._idCliente} 
        ${this._fechaRegistro}`
    }
}