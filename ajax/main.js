let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e=> e.addEventListener("click", loadClick));//foreach debido a que pueden haber varios botones con eventos

function loadClick(event) {

  event.preventDefault(); //event, es el boton que clickeo el user ya que pueden haber varios
  document.querySelector("#use-ajax").innerHTML = "<h1>Loading...</h1>";
  fetch("archivo-nuevo.html").then( function(response){
      console.log(response);  
      response.text().then(divHtml=> document.querySelector("#use-ajax").innerHTML = divHtml);
    });

}

