"use strict"
document.querySelector("#division").addEventListener("click", division);

let divVacio = document.querySelector("#vacio");

function division() {
    let numeroUno = document.querySelector("#primer-digito").value
    let numeroDos = document.querySelector("#segundo-digito").value

    if (numeroUno != 0) {
    let resultado = (numeroUno/numeroDos);
    mostrarResultado(resultado);

    } else {
        divVacio.innerHTML = "<h2>" + "Error" + "</h2>";
        divVacio.classList.add("error");
    }

}

function mostrarResultado(resultado) {
   
    divVacio.innerHTML = '';
    divVacio.innerHTML += "<h2>" + "Su resultado " + resultado + "</h2>";
}