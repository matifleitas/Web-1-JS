document.querySelector("#btnAgregar").addEventListener("click", function() {
    let N = document.querySelector("#input-btn").value;
    for(let i = 0; i < N; i++) {
        setTimeout(function() {
            crearBoton(i)
        }, Math.random() * 3000);
    }
}) 

function crearBoton(nombre) {
    let divBtnsCreados = document.querySelector("#btn-creados");
    let btn = document.createElement("button");
    btn.nombre = nombre;
    btn.innerHTML = "Boton " + nombre;
    btn.addEventListener ("click",() => {
        alert("me hiciste click soy el boton: " + nombre)
    });
    divBtnsCreados.appendChild(btn);
}


