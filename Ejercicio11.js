"use strict";
class Mapa {
    constructor (){
    }
    
    mostrarMapa(){
        mapboxgl.accessToken = 'pk.eyJ1IjoidW8yODI5NDQiLCJhIjoiY2xiM3d4MnNwMDJoMDNuczVxbXkzd2R1NyJ9.CoUhyImTRE_3w_zsY0p5Ug';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [51.2500000,25.5000000], // starting position [lng, lat]
            zoom: 5 // starting zoom
        });
        var marker = new mapboxgl.Marker().setLngLat([51.2500000,25.5000000]).addTo(map);
        
    }
}
var ubicacion = new Mapa();
ubicacion.mostrarMapa();