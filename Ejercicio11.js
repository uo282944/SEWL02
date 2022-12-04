"use strict";
class Mapa {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    mostrarMapa(){
        mapboxgl.accessToken = 'pk.eyJ1IjoidW8yODI5NDQiLCJhIjoiY2xiM3d4MnNwMDJoMDNuczVxbXkzd2R1NyJ9.CoUhyImTRE_3w_zsY0p5Ug';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [this.longitud,this.latitud], // starting position [lng, lat]
            zoom: 15 // starting zoom
        });
        var marker = new mapboxgl.Marker().setLngLat([this.longitud,this.latitud]).addTo(map);
    }
}
var ubicacion = new Mapa();