"use strict";
class Meteorologia {
    constructor(){
        this.apikey = "097fe6465c4b585c49887630abb35070";
        this.ciudad = "Oviedo";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
    }
    cargarDatos(urlDada){
        $.ajax({
            dataType: "xml",
            url: urlDada,
            method: 'GET',
            success: function(datos){
                
                    //Presentación del archivo XML en modo texto
                    $("h5").text((new XMLSerializer()).serializeToString(datos));
                
                    //Extracción de los datos contenidos en el XML
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                        amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                        oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var temperaturaUnit       = $('temperature',datos).attr("unit");
                    var humedad               = $('humidity',datos).attr("value");
                    var humedadUnit           = $('humidity',datos).attr("unit");
                    var presion               = $('pressure',datos).attr("value");
                    var presionUnit           = $('pressure',datos).attr("unit");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var nombreViento          = $('speed',datos).attr("name");
                    var direccionViento       = $('direction',datos).attr("value");
                    var nubosidad             = $('clouds',datos).attr("value");
                    var visibilidad           = $('visibility',datos).attr("value");
                    var descripcion           = $('weather',datos).attr("value");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var icono                 = $('weather',datos).attr("icon");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    
                    var stringDatos = "<h2>" + ciudad +", "+ pais + "</h2>";
                    stringDatos +="<h3>Temperatura</h2>";
                    var presion               = $('pressure',datos).attr("value");
                    stringDatos += "<p>" + temperatura +" "+ temperaturaUnit + "</p>";
                    stringDatos += "<img src='https://openweathermap.org/img/w/" + icono + ".png' alt='Icono cielo'></img>";
                    stringDatos += "<p>MAX: " + temperaturaMax +" "+ temperaturaUnit+ " MIN: "+ temperaturaMin+" "+ temperaturaUnit +"</p>";
                    stringDatos +="<h3>Coordenadas</h2>";
                    stringDatos += "<p>Latitud: " + latitud + " grados</p>";
                    stringDatos += "<p>Longitud: " + longitud + " grados</p>";
                    stringDatos +="<h3>Ambiente</h2>";
                    stringDatos += "<p>Descripción: " + descripcion + "</p>";
                    stringDatos += "<ul><li>Presión: " + presion +" "+presionUnit+ "</li>";
                    stringDatos += "<li>Humedad: " + humedad + humedadUnit+"</li>";
                    stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                    stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                    stringDatos += "<li>Viento: " + nombreViento + "</li>";
                    stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                    stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + nubosidad + " %</li></ul>";
                    
                    $("section").html(stringDatos);                  
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("h5").remove();
                $("section").remove();
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

    verOviedo(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("http://api.openweathermap.org/data/2.5/weather?q=Oviedo" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verBarcelona(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("http://api.openweathermap.org/data/2.5/weather?q=Barcelona" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verSevilla(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("http://api.openweathermap.org/data/2.5/weather?q=Sevilla" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verValencia(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("http://api.openweathermap.org/data/2.5/weather?q=Valencia" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verMalaga(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("http://api.openweathermap.org/data/2.5/weather?q=Malaga" + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    borrarContenido(){
        $("section:eq(0)").remove();
    }
}
var meteorologia = new Meteorologia();