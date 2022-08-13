let persona1 = {
    nombre : 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' '+ this.apellido + ', '+ tel;
    }
}
let persona2 = {
    nombre : 'Carlos',
    apellido: 'Lara',
}

//Uso de Apply para usar el metodo de nombre completo que pertenece a persona1 con los datos de persona 2

console.log(persona1.nombreCompleto('Licenciado', '123456'));
let arreglo = ['Ing', '369963'];

console.log(persona1.nombreCompleto.apply(persona2, arreglo)); // A diferencia de Call los parametros del metodo que se llama de la persona 1 se deben enviar en un arreglo, es por esto que se crea una variable la cual tendrá los dos parametros que vamos a usar al invocar el metodo. 