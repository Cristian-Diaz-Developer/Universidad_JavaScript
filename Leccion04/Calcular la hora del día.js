//Hora del día

let HoraDia = 12;
let Mensaje;

if (HoraDia  >= 6 && HoraDia <= 11 ){
    Mensaje = "Buenos dias";
}
else if (HoraDia >= 12 && HoraDia <= 18  ){
    Mensaje = "Buenas tardes";
}
else if (HoraDia <= 24 && HoraDia >= 19){
    Mensaje = "Buenas tardes";
}
else if (HoraDia >= 0 && HoraDia < 6){
    Mensaje = "Estoy durmiendo";
}
else{
    console.log ("Ingresó una hora no valida")
}
console.log ("Hola,", Mensaje)