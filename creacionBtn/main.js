document.querySelector("#btnAgregar").addEventListener("click", function() {
    let N = document.querySelector("#input-btn").value;

    for(let i = 0; i < N; i++) {
        setTimeout(function() {
            crearBoton(i) 
    }, Math.random() * 3000);
    }
}) 

function crearBoton(numero) {
    let divBtnsCreados = document.querySelector("#btn-creados");
    let btn = document.createElement("button");
    
    btn.innerHTML = "Boton " + numero;
    btn.addEventListener ("click",() => {
        alert("me hiciste click soy el boton: " + numero)
    });
    divBtnsCreados.appendChild(btn);
}


