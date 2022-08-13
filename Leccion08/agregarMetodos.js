let persona= {
    nombre: 'Cristian',
    apellido:'Diaz',
    email: 'cdiaz@gmail.com',
    edad: 22,
    nombreCompleto: function () {
       return this.nombre + ' '+ this.apellido;
    }
}
console.log(persona.nombre.length);
console.log(persona);
console.log(persona.nombreCompleto());

///////////////////////////////////////////
//Acceder a las propiedades de un objeto///
console.log(persona.nombre);
console.log(persona['apellido']);

//FOR IN

for (nombrePropiedad in persona ){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
