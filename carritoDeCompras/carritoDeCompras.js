"use strict"

document.querySelector("#btn-agregar1").addEventListener("click", function(e) {
    comprar(1)
});
document.querySelector("#btn-agregar2").addEventListener("click", function(e) {
    comprar(2)
});
document.querySelector("#btn-agregar3").addEventListener("click", function(e) {
    comprar(3)
});
document.querySelector("#btn-eliminarListado").addEventListener("click", eliminarListado);
document.querySelector("#btn-eliminarUltimo").addEventListener("click", eliminarUltimo);
document.querySelector("#btn-cantidadUser").addEventListener("click", cantidadByUser);

let productos = []

function comprar(cantidad) {
    
    if (document.querySelector("#producto").value !== "") {

        let producto = document.querySelector("#producto").value;
    
        let itemNuevo = {
            alimento: producto,
            cantidadAlimentos: cantidad,
        }
        productos.push(itemNuevo);
    } else {
        alert('Porfavor ingrese un producto');
    }
    mostrarListado();
}

function eliminarListado() {
    productos = [];
    mostrarListado();
} 

function eliminarUltimo() {
    productos.pop();
    mostrarListado();
}

function cantidadByUser() {
    let producto = document.querySelector("#producto").value
    let cantidad = document.querySelector("#cantidad-user").value
    console.log(cantidad);
    console.log(producto);

    let alimentoNuevo = {
        alimento: producto,
        cantidadAlimentos: cantidad,
    }

    productos.push(alimentoNuevo);
    mostrarListado();
}

function mostrarListado() {
    let listadoDom = document.querySelector("#listado");
    listadoDom.innerHTML = '';

    for (const item of productos) {
        listadoDom.innerHTML += "<li>" + "Usted compro, " + item.cantidadAlimentos + " " + item.alimento + "</li>";
    }

    console.log(productos);
}