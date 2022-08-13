//Palabra continue
inicio:

for (let Contador = 0; Contador <= 10; Contador ++){
    if (Contador % 2 !== 0){
        continue inicio; // Ir a la siguiente iteración 
    }
    console.log (Contador);
    
}