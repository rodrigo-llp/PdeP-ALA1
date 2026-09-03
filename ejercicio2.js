const readlineSync = require('readline-sync');

const operador = readlineSync.question('Ingrese la operación deseada (+, -, *, /): ');
const cantidad = Number(readlineSync.question('¿Cuántos operandos desea ingresar?'));

let operandos = [];

for(let i = 0; i < cantidad; i++){ 
    const numero = Number(readlineSync.question(`Ingrese el operando ${i + 1}: `));
    //El template `${...}` permite insertar el calor de una variable dentro del texto
    operandos.push(numero);
    //.push() agrega el número al final del array "operandos"
}

let resultado = operandos[0];

//El for recorre el array (desde la posicion 1) aplicando la operación acumulada
for(let i = 1; i < operandos.length; i++){
    switch (operador){
        case '+':
            resultado = resultado + operandos[i];
            break;
        case '-':
            resultado = resultado - operandos[i];
            break;
        case '*':
            resultado = resultado * operandos[i];
            break;
        case '/':
            resultado = resultado / operandos[i];
            break;
        default:
            console.log('Operacion no valida');
    }
}

console.log('Resultado: ', resultado);