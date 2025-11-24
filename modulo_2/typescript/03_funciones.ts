function saludar(): string{
    return 'Hola desde una función Typescript';
}
console.log(saludar());

function suma(): number{
    return 3+7;
}
console.log(suma());

function sumar(numero1: number, numero2: number):number{
    return numero1+numero2;
}
console.log(sumar(9,6));

function sumarOpcional(numero1: number, numero2?: number): number{
    return numero1+(numero2 ? numero2 : 15);
}
console.log(sumarOpcional(19,6));
console.log(sumarOpcional(10));

const sumarFlecha = (num1: number, num2?: number): number => {
    return num1 + (num2 || 20);
}
console.log(sumarFlecha(3));
console.log(sumarFlecha(7, 40));

function mostrarMensaje(mensaje: string): void{
    console.log("Mensaje: " + mensaje);
}
mostrarMensaje("¡Este es un mensaje de prueba!");