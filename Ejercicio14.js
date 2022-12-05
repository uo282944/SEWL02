"use strict";
class Aplicacion {
    constructor(){
        this.a = 0;
        this.e = 0;
        this.i = 0;
        this.o = 0;
        this.u = 0;
    }

    verArchivo(){
         // Crea un elemento con DOM para los datos obtenidos con JSON
        this.borrarContenido();
        this.crearElemento("section","","footer");
        var file = document.getElementsByTagName("input")[0].files[0];
        this.leerArchivos(file);
        
    }

    borrarContenido(){
        $("section").remove();
    }

    leerArchivos(file){ 
        var tipoTexto = /text.*/;
        if (file.type.match(tipoTexto)){
            var lector = new FileReader();
            lector.onload = (evento) => {
                for (var i = 0;i<lector.result.length;i++){
                    var letra = lector.result[i];
                    if (letra == 'a' || letra == 'A'){
                        this.a = this.a +1;
                    }else if(letra == 'e' || letra == 'E'){
                        this.e = this.e +1;
                    }else if(letra == 'i' || letra == 'I'){
                        this.i = this.i +1;
                    }else if(letra == 'o' || letra == 'O'){
                        this.o = this.o +1;
                    }else if(letra == 'u' || letra == 'U'){
                        this.u = this.u +1;
                    }
                }
                var datos = "<h2>DATOS</h2>"
                datos += "<p>Número de A: "+ this.a +"</p>";
                datos += "<p>Número de E: "+ this.e +"</p>";
                datos += "<p>Número de I: "+ this.i +"</p>";
                datos += "<p>Número de O: "+ this.o +"</p>";
                datos += "<p>Número de U: "+ this.u +"</p>";
                datos += '<input type="button" value="Ampliar Gráfico" onclick="app.toggleFullScreen();">'
                datos += "<p>Gráfico circular</p>"
                datos += '<img src="https://chart.apis.google.com/chart?chs=500x400&cht=p&chd=t:'+ this.a +','+ this.e +','+ this.i +','+ this.o +','+ this.u +'&chl=A|E|I|O|U" alt="Grafica circular" />';
                
                $("section").html(datos);
            }
            lector.readAsText(file);
        }
    }

    pantallaCompleta(){
        document.addEventListener("keydown", (e) => {
            if (e.key === "a") {
                this.toggleFullScreen();
            }
        }, false);
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }




    pantallaOculta(){
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                this.borrarContenido();
            }
          });
    }

    toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.getElementsByTagName("img")[0].requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
      }
}

var app = new Aplicacion();
app.pantallaCompleta();
app.pantallaOculta();