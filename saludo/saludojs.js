function eventoSaludar() {

    let name = document.querySelector("#name").value

    console.log("hola mundo!");
    console.log("hola matias!");
    console.log("hola angel!");
    console.log("hola vanesa!");
    console.log("hola " + name +"!");
    document.querySelector("#saludo").innerHTML = "hola a todos soy " + name;
}

eventoSaludar();

// function saludo() {}