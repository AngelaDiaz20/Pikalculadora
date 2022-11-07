/* Creación de "Calculadora (operaciones matemáticas)", usando clases (Razón por la cual el script es nombrado en mayúscula, debe corresponder al nombre de la clase, la cual también debe estar en mayúscula) */

//Palabra reservada "class" + "nombre de la clase"
class Calculadora {
    //método para cada operación -> nombre(argumento1, argumento2) { Valor a retornar }
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
} 