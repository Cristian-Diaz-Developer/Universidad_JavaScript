let promesa = new Promise ((resolver) => {
    console.log('Inicio de promesa');
    setTimeout(()=> resolver('Saludos con promesa y Timeout'),3000);
    console.log('Fin promesa');
});

promesa.then(valor => console.log(valor));