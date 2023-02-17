"use strict"

let divCountdown = document.querySelector("#countdown");
let btnActivated = document.querySelector("#btn-Activate").addEventListener("click", iniciar);

function iniciar() {
    alert("corra, la bomba esa por explotar");
    setTimeout(iniciarCuentaRegresiva, 2000); //Ejecuta luego de cierto tiempo en este caso 5 seg
}

function iniciarCuentaRegresiva() {
    let inputTimer = document.querySelector("#timer").value;
    let interval = setInterval(function() {
        divCountdown.innerHTML = inputTimer;
        if (inputTimer !== 0) {
            inputTimer--;
        } else {
            clearInterval(interval);
            alert("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM");
        }
    }, 1000); //intervalo de 1 segundo repitiendo la funcion
}