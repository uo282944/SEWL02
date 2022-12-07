"use strict";
class CargarKML {
    constructor(){
        this.pilaCor = new Array();
        this.lats= new Array();
        this.lons= new Array();
    }

    leerArchivos(file){ 
        var s = 0;
        var pilaEtiquetas = new Array();
        var pilaCoords = new Array();
        var archivo = file;
        if (archivo.name.substring(archivo.name.length-3,archivo.name.length)== "kml"){
            var lector = new FileReader();
            lector.onload = (evento) => {
                $("Placemark",lector.result).each(function(){
                    var nombre = $('name',this).text();
                    var coords = $('Point coordinates',this).text();
                    pilaEtiquetas.push(nombre);
                    pilaCoords.push(coords);
                    s++;
                });
                for (var i = 0;i<s;i++){
                    this.pilaCor.push(pilaCoords.pop());
                }
                this.size = s;
                this.separarCoordenadas();

                mapboxgl.accessToken = 'pk.eyJ1IjoidW8yODI5NDQiLCJhIjoiY2xiM3d4MnNwMDJoMDNuczVxbXkzd2R1NyJ9.CoUhyImTRE_3w_zsY0p5Ug';
                const map = new mapboxgl.Map({
                    container: 'map', // container ID
                    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
                    style: 'mapbox://styles/mapbox/streets-v12', // style URL
                    center: [-5.84476,43.36029], // starting position [lng, lat]
                    zoom: 3 // starting zoom
                });
                
                for (var j = 0;j<this.size;j++){
                    new mapboxgl.Marker().setLngLat([Number(this.lats.pop()),Number(this.lons.pop())]).addTo(map);
                }
            };
            lector.readAsText(archivo);
        }
    }

    separarCoordenadas(){
        var ncomas = 0;
        var lat = "";
        var lon = "";
        for (var i = 0;i<this.size;i++){
            var cor = this.pilaCor.pop();
            for (var j = 0;j<cor.length;j++){
                if (cor[j] == ","){
                    ncomas++;
                }else{
                    if (ncomas == 1){
                        lon += cor[j];
                    }else if(ncomas == 0){
                        lat += cor[j];
                    }
                }
            }
            this.lats.push(lat);
            this.lons.push(lon);
            lat = "";
            lon = "";
            ncomas = 0;
        }
    }

    verArchivos(){
         // Crea un elemento con DOM para los datos obtenidos con JSON
        var archivos = document.getElementsByTagName("input")[0].files;
        this.leerArchivos(archivos[0]);
    }

}

var cargarKML = new CargarKML();