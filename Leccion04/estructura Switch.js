//Estructura Switch

let Numero = 1;
let NumeroTexto = 'Valor desconocido';

switch (Numero) {
    case 1:
        NumeroTexto = 'Número uno';
        break;
    case 2:
        NumeroTexto = 'Número dos';
        break;
    case 3:
        NumeroTexto = 'Número tres';
        break;
    case 4:
        NumeroTexto = 'Número cuatro';
        break;
    default:
        NumeroTexto = 'Caso no encontrado';
}
console.log(NumeroTexto);
