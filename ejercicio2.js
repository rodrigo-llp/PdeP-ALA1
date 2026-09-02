const readlineSync = require('readline-sync');

const operador = readlineSync.question('Ingrese la operación deseada (+, -, *, /): ');
const num1 = Number(readlineSync.question('Ingrese el primer número: '));
const num2 = Number(readlineSync.question('Ingrese el segundo número: '));

console.log('Operador ingresado:', operador);
console.log('Primer número:', num1);
console.log('Segundo número:', num2);

let resultado;

switch (operador){
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        console.log('Operacion no valida');
}

console.log('Resultado: ', resultado);