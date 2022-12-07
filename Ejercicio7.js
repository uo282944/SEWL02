"use strict";
class Modificaciones {
    constructor (){

    }

    ocultar(){
        $("p").hide();
        $("table").hide();
    }

    mostrar(){
        $("p").show();
        $("table").show();
    }

    cambiarMercadona(){
        $("h1").text("Mercadona");
        $("h2").text("Carnicería Mercadona");
    }

    cambiarAlimerka(){
        $("h1").text("Alimerka");
        $("h2").text("Carnicería Alimerka");
    }

    addElementos(){
        $("p:eq(0)").append(". La mejor selección de animales")
        $("p:eq(0)").after("<p>Productos 100% producidos en Asturias</p>");        
    }

    borrarElementos(){
        $("p").remove();
        $("table").remove();
    }

    mostrarPadres(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            /*if ($(this).get(0).tagName != "TABLE" && $(this).get(0).tagName != "TR" && $(this).get(0).tagName != "TBODY"){*/
            $("main").prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    juntarElementosTablas(){
        $("p:eq(0)").after("<p></p>");
        $("table tr td").each(function() {
            var celda = $.trim($(this).text());
            $("p:eq(1)").append(celda);
        });        
    }
}

var modificaciones = new Modificaciones();

