//La variable de persona almcena una referencia a un objeto 
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
console.log(persona.apellido);

function cambiarValorObjeto(p1) {
  p1.nombre = 'Carlos';
  p1.apellido = 'Lara';  
}
//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);