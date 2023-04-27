function cambiarIdioma() {
    var elementosTraducibles = document.querySelectorAll("[data-traduccion]");
    var idioma = "en";
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + idioma + "&dt=t&q=";
  
    for (var i = 0; i < elementosTraducibles.length; i++) {
      var elemento = elementosTraducibles[i];
      var textoOriginal = elemento.getAttribute("data-traduccion");
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url + encodeURI(textoOriginal), false);
      xhr.send();
      var resultado = xhr.responseText;
      resultado = JSON.parse(resultado);
      var textoTraducido = resultado[0][0][0];
      elemento.textContent = textoTraducido;
    }
  
    // Cambiar el texto del botón a "Español" para que el usuario pueda cambiar de vuelta al español
    var botonIdioma = document.querySelector("button");
    botonIdioma.textContent = "English";
    botonIdioma.onclick = function() { volverAEspanol(); }
  }
  
  function volverAEspanol() {
    var elementosTraducibles = document.querySelectorAll("[data-traduccion]");
    for (var i = 0; i < elementosTraducibles.length; i++) {
      var elemento = elementosTraducibles[i];
      var textoOriginal = elemento.getAttribute("data-traduccion");
      elemento.textContent = textoOriginal;
    }
  
    // Cambiar el texto del botón a "English" para que el usuario pueda cambiar al inglés nuevamente
    var botonIdioma = document.querySelector("button");
    botonIdioma.textContent = "Español";
    botonIdioma.onclick = function() { cambiarIdioma(); }
  }
  
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function descargarCV() {
    var url = "./Cv.pdf";
    var filename = "Cv.pdf";
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  }
  
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("PowerBI");
        habilidades[1].classList.add("Python");
        habilidades[2].classList.add("Excel");
        habilidades[3].classList.add("Tableau");
        habilidades[4].classList.add("SQL");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("analisis");
        habilidades[9].classList.add("Toma");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
