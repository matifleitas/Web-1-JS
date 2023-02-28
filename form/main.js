document.querySelector("#submit").addEventListener("click", mostrarUser);
document.querySelector("#cambioColor").addEventListener("click", cambioColor);

function mostrarUser() {
    let nombreUser = document.querySelector("#nombreUser").value;
    let apellidoUser = document.querySelector("#apellidoUser").value;

    if (nombreUser && apellidoUser != '') {

    let tittleUser = document.querySelector("#tittleUser");

    tittleUser.innerHTML = '';
    tittleUser.innerHTML += "<h1>" + "Su nombre es: " + nombreUser + " " + apellidoUser + "</h1>";
    } else {
        tittleUser.innerHTML = "<h1>" + "Porfavor complete los campos" + "</h1>";
    }
}

function cambioColor() {
    let divTittle = document.querySelector("#formulario");
    divTittle.classList.add("div");
}