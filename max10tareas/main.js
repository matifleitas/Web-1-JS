document.querySelector("#marcar-tarea").addEventListener("click", marcarTarea);

let vacio = document.querySelector("#vacio");

let tareas = [];
// let len = tareas.length;

function marcarTarea() {
    let tarea = document.querySelector("#input-tareas").value;

    for(let i = 0; i<tareas.length; i++) {
        if(tarea.indexOf(tareas[i]) === -1) {
            tareas.push(tarea);
            console.log(tareas);  
        }
    }

    if(tareas.length < 10) {

        tareas.push(tarea);

        console.log(tareas);
        mostarTareas(tarea);

    } else {
        vacio.innerHTML += "<h2>" + "Sobrepaso la cantidad de tareas" + "</h2>" 
    }
}
function mostarTareas(tarea) {

    vacio.innerHTML += "<li>" + tarea + "" + "</li>"   
    
}