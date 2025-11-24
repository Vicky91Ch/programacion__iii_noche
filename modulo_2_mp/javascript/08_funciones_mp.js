console.log("FUNCIONES");
console.log("FUNCION SIMPLE");

function saludar(){
    console.log("Hola de parte del Poderoso Tercer Semestre")
}
saludar();

console.log("Funcion con parametros");
function suma(a,b){
    return a+b;
}
console.log("Resultado de la suma es:", suma(5,8));

console.log("Funcion flecha");
const funcionFlecha=()=>{
    console.log("Saludando desde la funcion flecha")
}
funcionFlecha;

console.log("Funcion flecha");
const funcionFlecha=()=>{
    console.log("Saludando desde la funcion flecha")
}
funcionFlecha();
const multiplicacion=(n,m)=>{
    return n*m;
}
console.log(multiplicacion(7,7));


console.log("Funcion retorno directo");
const cuadrado = x=>x*x;
console.log(cuadrado(5));

console.log("Funcion con Parametros por defecto");
function division(z, k=3){
    return z/k;
}
console.log("resultado de la division es:", division(40,8));
console.log("resultado de la division es:", division(40));