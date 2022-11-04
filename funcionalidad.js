//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var clear = document.getElementById('clear');
    var addition = document.getElementById('addition');
    var subtraction = document.getElementById('subtraction');
    var multiplication = document.getElementById('multiplication');
    var division = document.getElementById('division');
    var equal = document.getElementById('equal');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');
}

//Eventos de click
one.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
two.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
three.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
four.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
five.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
six.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
seven.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
eight.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nine.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
zero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
clear.onclick = function (e) {
    resetear();
}
addition.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
subtraction.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplication.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
equal.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}



