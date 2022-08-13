let persona1 = {
    nombre : 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' '+ this.apellido + ' '+ tel;
    }
}
let persona2 = {
    nombre : 'Carlos',
    apellido: 'Lara',
}

//Uso de Call para usar el metodo de nombre completo que pertenece a persona1 con los datos de persona 2

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '13251511' )); //va a tomar los valores del objeto2 pero utilizando el metodo del obnjeto 1