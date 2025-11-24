console.log("CONDICIONALES");
console.log("CONDICIONAL IF");

let temperatura=45;
if(temperatura>30){
    console.log("Hace calor");
}
console.log("CONDICIONAL if else");
const password="password123";
if(password=="password123"){
    console.log("Usuario logueado");
}else{
    console.log("Usuario No Autorizado");
}

console.log("CONDICIONAL ANIDADOS");
const edad=19;
const tieneLicencia=True;
if(edad>18){
    if(tieneLicencia==true){
        console.log("Puede conducir");
    }else{
        console.log("Necesita Licencia");
    }
}else{
    console.log("Es menor de edad");
}


if(edad>18 && tieneLicencia){
        console.log("Puede conducir");
}else if(edad>18){
        console.log("Necesita licencia");
}else{
    console.log("Es menor de edad");
}

console.log("CONDICIONAL SWITCH");
const dia = "lunes";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("Dia no valido");
}