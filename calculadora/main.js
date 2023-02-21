"use strict"

document.querySelector("#sumar").addEventListener("click", sumarNumeros);
document.querySelector("#restar").addEventListener("click", restarNumeros);
document.querySelector("#multiplicacion").addEventListener("click", multiplicarNumeros);

let divResultado = document.querySelector("#resultado");

function sumarNumeros() {
    let a = parseInt(document.querySelector("#primerInput").value);
    let b = parseInt(document.querySelector("#segundoInput").value);

    let resultado = (a + b);
    console.log(resultado)
    mostrarResultado(resultado);
}

function restarNumeros() {
    let a = parseInt(document.querySelector("#primerInput").value);
    let b = parseInt(document.querySelector("#segundoInput").value);

    let resultado = (a - b);
    mostrarResultado(resultado);
}

function multiplicarNumeros() {
    let a = parseInt(document.querySelector("#primerInput").value);
    let b = parseInt(document.querySelector("#segundoInput").value);

    let resultado = (a * b);
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    divResultado.innerHTML = '';
    divResultado.innerHTML += "<h2>" + "su resultado es: " + resultado + "</h2>" 
}