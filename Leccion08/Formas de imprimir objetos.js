let persona= {
    nombre: 'Cristian',
    apellido:'Diaz',
    email: 'cdiaz@gmail.com',
    edad: 22,
    nombreCompleto: function () {
       return this.nombre + ' '+ this.apellido;
    }
}
persona.tel = '58484444'
console.log(persona);
delete persona.tel
console.log(persona);

//Concatenar cada valor
console.log(persona.nombre + ' '+ persona.apellido +', '+ persona.email );

/// FOR in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
/// Object.Values
let personaArray = Object.values(persona)
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);