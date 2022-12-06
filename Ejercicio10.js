"use strict";
class PrecioPetroleo {
    constructor(){
    }
    cargarDatos(urldada){
        $.ajax({
            dataType: "json",
            url: urldada,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //Presentación de los datos contenidos en JSON
                    
                    var stringDatos = "<h2>Resultados</h2>"
                    stringDatos += "<p>Fecha: "+ datos.data.date + "</p>";
                    stringDatos += "<p>Precio brent oil: " + 1/Number(datos.data.rates.BRENTOIL)+" "+ datos.data.base +"/"+ datos.data.unit + "</p>"; 
                    stringDatos += "<p>Precio wti oil: " + 1/Number(datos.data.rates.WTIOIL) +" "+ datos.data.base +"/"+ datos.data.unit +"</p>"; 
                    
                    $("section").html(stringDatos);
                },
            error:function(){
                $("section").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://commodities-api.com'>Commodities-api</a>"); 
                $("pre").remove();
            }
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

    verPrecio(){
        var urldada = "https://commodities-api.com/api/latest?access_key=xtc5w66159fbe25id8m2xplj51ae0k8yatgzb9j3kvvh94n577w8u6h4ql5h&base=EUR&symbols=WTIOIL,BRENTOIL";
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos(urldada);
    }

    verPrecioPasado(){
        var fecha = $("input:eq(1)").val();
        var urldada = "https://commodities-api.com/api/"+ fecha +"?access_key=xtc5w66159fbe25id8m2xplj51ae0k8yatgzb9j3kvvh94n577w8u6h4ql5h&base=EUR&symbols=WTIOIL,BRENTOIL";
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos(urldada);
    }

    borrarContenido(){
        $("section:eq(0)").remove();
    }
}
var consulta = new PrecioPetroleo();