"use strict"

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-resetear").addEventListener("click", resetear);
document.querySelector("#btn-borrarUltimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sorteo);

let nombres = [];

function agregar() {
    
    let nombre = document.querySelector("#nombre").value;
    
    if(nombre !== '') {
        nombres.push(nombre);
        console.log(nombres);
        mostrar();

        nombre.value = "";
    }
}


function mostrar() {
    let lista = document.querySelector(".listado");
    lista.innerHTML = '';

    for(let nombreActual of nombres) {
        lista.innerHTML += "<li>" + nombreActual + "</li>";
    }
}

function resetear() {
    nombres = [];
    mostrar();
}

function borrarUltimo() {
    nombres.pop();
    mostrar();
}

function sorteo() {
    let cantidadDePersonas = nombres.length;
    let random = Math.floor(Math.random() * cantidadDePersonas);
    document.querySelector("#resultado").innerHTML = nombres[random];

}