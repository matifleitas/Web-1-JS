"use strict"

document.querySelector("#btn-incrementar").addEventListener("click", function(e) {
    incrementar(1)
});

document.querySelector("#btn-decrementar").addEventListener("click", function(e) {
    incrementar(-1)
});

document.querySelector("#agregar-manual").addEventListener("click", agregarManual);


let totalPasos = 0;

function agregarManual() {
    let pasos = document.querySelector("#input-number").value;
   
    let pasosNumero = parseInt(pasos);
    incrementar(pasosNumero);

}

function incrementar(pasos) {   
    totalPasos += pasos;

    document.querySelector(".pasos").innerHTML = totalPasos;
}