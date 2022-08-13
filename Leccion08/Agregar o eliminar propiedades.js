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

