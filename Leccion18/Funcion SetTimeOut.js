function miFuncion1 (){
    console.log('Funcion 1');
}

function miFuncion2 (){
    console.log('Mi funcion 2');
}
miFuncion1()
miFuncion2()

///Funcion de tipo CallBack
function imprimir (mensaje){
    console.log(mensaje);
}
function sumar (op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback( `Resultado: ${res}`)
}
sumar (5,3, imprimir)

//Llamadas asincronas con uso de la funcion SetTimeOut

function miFuncionCallBack (){
    console.log('Saludo asincrono despues de 3 segundos');
}
setTimeout(miFuncionCallBack, 3000); // despues de 3 segundos 

setTimeout(function(){console.log('Saludo asincrono dos')}, 4000);

setTimeout(()=> console.log('Saludo asincrono 3'), 5000 )