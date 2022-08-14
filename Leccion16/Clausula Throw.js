// 'use strict'
// try{
//     let x = 10;
//     // miFuncion();
//     throw 'Mi error'
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log('Termina la revision de errores');
// } 
// console.log('Continuamos');
'use strict'
let resultado = '';

try{
    x = 10;
    if (isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
    else if (resultado >= 0) throw 'Valor positivo';// no es error, es algo mas informativo
    else if(resultado < 0) throw 'Valor negativo'

}
catch(error){
    console.log(error);
    // console.log(error.name); //Si se usa throw no se puede acceder a esos atributos ya que el mensaje de error lo estamos generando nosotros 
    // console.log(error.message);
}
finally{
    console.log('Termina revision de errores');
}