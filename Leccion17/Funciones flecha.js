// function miFuncion (){
//     console.log('Saludos desde mi funcion');
// }

let miFuncion = function(){
    console.log('Saludos desde mi funcion');
}

// const miFuncionFlecha = () =>{
//     console.log('Saludos desde mi funcion flecha');
// }

// const miFuncionFlecha = ()=> console.log('Saludos desde mi funcion flecha');


miFuncion();
// miFuncionFlecha();  

// const saludar = ()=> {
//     return 'Saludos desde funcion flecha'
// }
const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido:'Diaz'});
console.log(regresaObjeto());

const funcionConParametrosClasico = function (mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje)=> console.log(mensaje);
const funcionConParametros = mensaje=> console.log(mensaje) // Cuando se recibe solo un parametro no es necesario los parentesis
funcionConParametros('Saludos con parametros');

const funcionConVariosParametros = (op1, op2) => op1 + op2
console.log(funcionConVariosParametros(1,2));

