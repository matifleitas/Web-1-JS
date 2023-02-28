document.querySelector("#btn-registrar").addEventListener("click", registrarUser);
document.querySelector("#ver-Personas").addEventListener("click", verCantPersonas)

let cabanias = [];

function registrarUser() {

    let numComplejo = document.querySelector("#complejo").value;
    let numCabania = document.querySelector("#cabania").value;
    let numPersonas = document.querySelector("#personas").value;
    let ocupado = !false;
    let id = 0;
    
    if (numComplejo <= 2 && numCabania <= 5 && numPersonas <= 4)  {
        let cabaniaNueva = {
            "complejo": numComplejo,
            "cabania": numCabania,
            "personas": numPersonas,
            "ocupado": ocupado,
        }

        // verificarCabania(cabaniaNueva);

        cabanias.push(cabaniaNueva);
        console.log(cabanias);
        mostrarResultado();

    } else {
        let mensajeOcupacion = document.querySelector("#mensaje_ocupacion");
        mensajeOcupacion.innerHTML += "<h3>" + "Error, excedio la cantidad" + "</h3>"
    }
}

function mostrarResultado() {
    let mensajeOcupacion = document.querySelector("#mensaje_ocupacion");
    mensajeOcupacion.innerHTML = '';

    for (const item of cabanias) {

        mensajeOcupacion.innerHTML += 
        "<ul>"
            + "<li>" + "Numero de complejo: " + item.complejo  + "</li>" 
            + "<li>" + "Numero de cabaña: " + item.cabania + "</li>" 
            + "<li>" + "Numero de personas: " + item.personas + "</li>" + 
        "</ul>" ;
    }
}

function verCantPersonas() {
    for (const item of cabanias) {
        let mensajeOcupacion = document.querySelector("#mensaje_ocupacion");
        mensajeOcupacion.innerHTML = '';

        mensajeOcupacion.innerHTML += "<h2>" + "La cantidad de personas es de: "+ 
        item.personas + "</h2>"
    }
}





// function verificarCabania(cabaniaNueva) {
//     for (const item of cabanias) {
//         if(item.cabania === cabaniaNueva.cabania) {
//             let mensajeOcupacion = document.querySelector("#mensaje_ocupacion");
//             mensajeOcupacion.innerHTML = '';
//             mensajeOcupacion.innerHTML += "<h3>" + "Error, excedio la cantidad" + "</h3>";
//         }
//     }
// }