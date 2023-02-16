document.getElementById("btn-prender").addEventListener("click", prenderLampara);
document.getElementById("btn-apagar").addEventListener("click", apagarLampara);
apagarLampara();

function prenderLampara() {
    document.getElementById("img-lampara").src = "images/lampara_on.png"
}

function apagarLampara() {
    document.getElementById("img-lampara").src = "images/lampara_off.png"    
}