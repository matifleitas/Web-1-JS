"use strict"

document.querySelector("#btn-play").addEventListener('click', jugar);

let opciones = ["PIEDRA", "PAPEL", "TIJERA"];

function jugar() {

    let random = Math.floor(Math.random() * 3); //ELIJE UNA OPCION RANDOM DESDE 0 A 2

    console.log(random);
    let opcion = opciones[random];

    let resultado = document.querySelector(".result");
    resultado.innerHTML = opcion;
}