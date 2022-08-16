let promesa = new Promise ((resolver) => {
    //console.log('Inicio de promesa');
    setTimeout(()=> resolver('Saludos con promesa y Timeout'),3000);
    //console.log('Fin promesa');
});

//Async es porque va a regresar una promesa

async function miFuncionConPromesa (){
    return 'Saludos con promesa y Async';
}
//miFuncionConPromesa().then(valor => console.log(valor));
//Async con Await

async function functionConPromesaYAwait(){
    let miPromesa = new Promise (resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa );
} 
//functionConPromesaYAwait();

//Promesas, Await y setTimeOut

async function funcionConPromesaAwaitYTimeout(){
    console.log('Inicio de promesa');
    let miPromesa = new Promise (resolver => {
        setTimeout(()=> resolver ('Promesa con Await y Timeoput'),3000);
    });
    console.log( await miPromesa);
    console.log('Fin de promesa');
}
funcionConPromesaAwaitYTimeout();