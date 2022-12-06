"use strict";
class Meteorologia {
    constructor(){
        this.apikey = "097fe6465c4b585c49887630abb35070";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
    }

    cargarDatos(urlDada){
        $.ajax({
            dataType: "json",
            url: urlDada,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                    
                    //Presentación de los datos contenidos en JSON
                    var stringDatos = "<h2>" + datos.name +", "+ datos.sys.country + "</h2>";
                    stringDatos +="<h3>Temperatura</h2>";
                    stringDatos += "<p>" + datos.main.temp + " ºC</p>";
                    stringDatos += "<img src='https://openweathermap.org/img/w/" + datos.weather[0].icon + ".png' alt='Icono cielo'></img>";
                    stringDatos += "<p>MAX: " + datos.main.temp_max + " ºC MIN: "+ datos.main.temp_min +"ºC</p>";
                    stringDatos +="<h3>Coordenadas</h2>";
                    stringDatos += "<p>Latitud: " + datos.coord.lat + " grados</p>";
                    stringDatos += "<p>Longitud: " + datos.coord.lon + " grados</p>";
                    stringDatos +="<h3>Ambiente</h2>";
                    stringDatos += "<p>Descripción: " + datos.weather[0].description + "</p>";
                    stringDatos += "<ul><li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    

                    $("section").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
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
        this.cargarDatos("https://api.openweathermap.org/data/2.5/weather?q=" + "Oviedo" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verBarcelona(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("https://api.openweathermap.org/data/2.5/weather?q=" + "Barcelona" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verSevilla(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("https://api.openweathermap.org/data/2.5/weather?q=" + "Sevilla" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verValencia(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("https://api.openweathermap.org/data/2.5/weather?q=" + "Valencia" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    verMalaga(){
        this.borrarContenido();
        this.crearElemento("section","","footer"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos("https://api.openweathermap.org/data/2.5/weather?q=" + "Malaga" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey);
    }

    borrarContenido(){
        $("section:eq(0)").remove();
    }
}

var meteorologia = new Meteorologia();