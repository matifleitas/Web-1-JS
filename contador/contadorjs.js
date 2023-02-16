let contador = 0;

function eventocontador() {
    contador++;
    document.querySelector("#msj").innerHTML = "Se van haciendo " + contador + " clicks";
}

function eventocontadorResta() {
    contador--;
    document.querySelector("#msj").innerHTML = "Se van haciendo " + contador + " clicks";

}

eventocontador();
eventocontadorResta();
