console.log("CICLOS O BUCLES");
console.log("WHILE");

let i=1;
while(i<=3){
    console.log("Contador: ",i);
    i++;
}

let valores=[3,4,2,4,5];
let indice=0;
while (valores[indice]>0){
    console.log("Valor valido:", valores[indice]);
    indice++;
}


let n=1;
while (n<10){
    if(n%2!==0){
        console.log(n, "Es impar:");
    }
    n++;
}


let x=5;
do{
    console.log(" iteracion",x);
    x++;
} while(x<5);

let contador=1;
suma=0;
do{
    suma+=contador;
    contador++;
} while(x<=5);
console.log(" la suma es", suma);

let reduccion=1;
do {
    console.log("reduccion", reduccion);
    reduccion--;
} while (reduccion>=0);

let tabladel6 = 6;
let multiplicador = 1;

do{
    let resultado = tabladel6 * multiplicador;
    console.log(`${tabladel6} x ${multiplicador} = ${resultado}`);
    multiplicador++;
} while(multiplicador <=10);