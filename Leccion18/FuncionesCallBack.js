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

