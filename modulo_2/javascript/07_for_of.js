console.log("CICLOS O BUCLES");
console.log("FOR OF");

const nombres =["Jose", "Juan", "Pedro", "Simon"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}

const nombre = "francisco";
for (const letra of nombre){
    console.log("Letra", letra);
}

const numeros =[2,45,87,96,145,257,100,86];
mayor=0;
for (const numero of numeros){
    if(numero>mayor) mayor=numero;
}
console.log("El numero mayor es:", mayor);

const persona={
    nombre: "Anakin",
    apellido: "Skywalker",
    prefesion: "Jedi"
}
for (const clave in persona){
    console.log("clave", clave, ":", persona[clave]);
}


const libro={
    titulo: "El principito",
    genero: "infantil",
    anio: "1970",
}
suma_claves=0;
for (const clave in libro){
    suma_claves++;
}
console.log(suma_claves);
