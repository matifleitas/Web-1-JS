"use strict"

let botones = document.querySelectorAll(".botones");

console.log(botones);

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", verMas); 
    
}

function verMas() {
    let texto = this.nextElementSibling;//propiedad devuelve el siguiente elemento en el mismo nivel de árbol.
    texto.classList.toggle("ver");
}

