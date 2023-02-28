"use strict"
document.querySelector("#registro").addEventListener("click", registrarUser);
document.querySelector("#btn-oferta").addEventListener("click", oferta);


let users = [];
let edadMin = 18; 

function registrarUser() {
    let nombreUser = document.querySelector("#nombre_user").value;
    let apellidoUser =  document.querySelector("#apellido_user").value;
    let edadUser = document.querySelector("#edad_user").value;

    if(nombreUser && apellidoUser && edadUser !== '') {
        if(edadUser >= edadMin) {
    
            let nuevoUser = {
                nombre: nombreUser,
                apellido: apellidoUser,
                edad: edadUser,
            }

            users.push(nuevoUser);
            console.log(users);
        } else {
            console.log("Venta prohibida a menores");
        }
    } else {
        console.log("Debe completar todos los campos");
    }
}

function oferta() {

}