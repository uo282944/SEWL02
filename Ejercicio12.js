"use strict";
class CargarArchivos {
    constructor(){
    }

    leerArchivos(file, numero){ 
        var stringDatos = "";
        var archivo = file;

        stringDatos += "<h2>"+archivo.name+"</h2>";
        stringDatos += "<p>Tipo archivo: "+archivo.type+"</p>";
        stringDatos += "<p>Tamaño: "+archivo.size+"</p>";
        stringDatos += "<h3>Contenido:</h3>";
        var tipoTexto = /text.*/;
        var tipoJson = "application/json";
        if (archivo.type.match(tipoTexto) || archivo.type.match(tipoJson)){
            var lector = new FileReader();
            lector.onload = (evento)=> {
                stringDatos += "<pre></pre>";
                $("section:eq("+ numero +")").html(stringDatos);
                $("pre:eq("+ numero +")").text(lector.result);
                
            }
            lector.readAsText(archivo);
        }else{
            stringDatos += "<p>Error : ¡¡¡ Archivo no válido !!!</p>";
            $("section:eq("+ numero +")").html(stringDatos);
        }
    }
    
    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    verArchivos(){
        this.borrarContenido();
         // Crea un elemento con DOM para los datos obtenidos con JSON
        var files = document.getElementsByTagName("input")[0].files;
        var len = files.length;
        for (var i = 0;i<len;i++){
            this.crearElemento("section","","footer");
            this.leerArchivos(files[i],i);
        }
    }

    borrarContenido(){
        $("section").remove();
    }

}

var cargarArchivos = new CargarArchivos();