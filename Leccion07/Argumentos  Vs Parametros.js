let sumar = function (a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b

};// Dentro de los parentesis se han definido variables es decir estás variables se conocen como parametros (Lista de valores que va a recibir una función)

resultado = sumar (3, 2);// Argumentos son los valores que realmente pasamos a nuestra función (valores que se usan al llamar una función)
console.log (resultado);

// Los parametros son reemplazados por los argumentos al llamarse la función 