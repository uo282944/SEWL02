"use strict";
class Mapa {
    constructor (){
    }
    
    mostrarMapa(longitud,latitud,z,continente){
        mapboxgl.accessToken = 'pk.eyJ1IjoidW8yODI5NDQiLCJhIjoiY2xiM3d4MnNwMDJoMDNuczVxbXkzd2R1NyJ9.CoUhyImTRE_3w_zsY0p5Ug';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [longitud,latitud], // starting position [lng, lat]
            zoom: z // starting zoom
        });
        if (continente == "Europa"){
            var marker = new mapboxgl.Marker().setLngLat([-3.7025600,40.4165000]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([2.3486000,48.8534000]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([13.4105300,52.5243700]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([4.3487800,50.8504500]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([11.7181900,45.5838300]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([37.6155600,55.7522200]).addTo(map);
            var marker7 = new mapboxgl.Marker().setLngLat([-0.1257400,51.5085300]).addTo(map);
            var marker8 = new mapboxgl.Marker().setLngLat([30.5238000,50.4546600]).addTo(map);
            var marker9 = new mapboxgl.Marker().setLngLat([21.0117800,52.2297700]).addTo(map);
            var marker10 = new mapboxgl.Marker().setLngLat([26.1062600,44.4322500]).addTo(map);
            var marker11 = new mapboxgl.Marker().setLngLat([4.8896900,52.3740300]).addTo(map);
            var marker12 = new mapboxgl.Marker().setLngLat([23.7162200,37.9794500]).addTo(map);
            var marker13 = new mapboxgl.Marker().setLngLat([-9.1333300,38.7166700]).addTo(map);
            var marker14 = new mapboxgl.Marker().setLngLat([18.0649000,59.3325800]).addTo(map);
            var marker15 = new mapboxgl.Marker().setLngLat([24.9354500,60.1695200]).addTo(map);
            var marker16 = new mapboxgl.Marker().setLngLat([19.0399100,47.4980100]).addTo(map);
            var marker17 = new mapboxgl.Marker().setLngLat([10.7460900,59.9127300]).addTo(map);
            var marker18 = new mapboxgl.Marker().setLngLat([-6.2488900,53.3330600]).addTo(map);
            var marker19 = new mapboxgl.Marker().setLngLat([14.4207600,50.0880400]).addTo(map);
            var marker20 = new mapboxgl.Marker().setLngLat([15.9779800,45.8144400]).addTo(map);
            var marker21 = new mapboxgl.Marker().setLngLat([7.4474400,46.9480900]).addTo(map);
            var marker22 = new mapboxgl.Marker().setLngLat([24.1058900,56.9460000]).addTo(map);
            var marker23 = new mapboxgl.Marker().setLngLat([24.7535300,59.4369600]).addTo(map);
            var marker24 = new mapboxgl.Marker().setLngLat([25.2798000,54.6891600]).addTo(map);
            var marker25 = new mapboxgl.Marker().setLngLat([23.3241500,42.6975100]).addTo(map);
            var marker26 = new mapboxgl.Marker().setLngLat([12.5655300,55.6759400]).addTo(map);
            var marker27 = new mapboxgl.Marker().setLngLat([18.3564400,43.8486400]).addTo(map);
            var marker28 = new mapboxgl.Marker().setLngLat([20.4651300,44.8040100]).addTo(map);
            var marker29 = new mapboxgl.Marker().setLngLat([19.8188900,41.3275000]).addTo(map);
            var marker30 = new mapboxgl.Marker().setLngLat([19.2636100,42.4411100]).addTo(map);
            var marker31 = new mapboxgl.Marker().setLngLat([-21.8954100,64.1354800]).addTo(map);
            var marker32 = new mapboxgl.Marker().setLngLat([16.3716900,48.2082000]).addTo(map);
            var marker33 = new mapboxgl.Marker().setLngLat([27.5666700,53.9000000]).addTo(map);
        }else if(continente == "Norte America"){
            var marker = new mapboxgl.Marker().setLngLat([-75.6981200,45.4111700]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([-77.0363700,38.8951100]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([-99.1276600,19.4284700]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([-90.5132700,14.6407200]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([-84.0833300,9.9333300]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([-82.3830400,23.1330200]).addTo(map);
        }else if (continente == "Sudamerica"){
            var marker = new mapboxgl.Marker().setLngLat([-58.3772300,-34.6131500]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([-65.2627400,-19.0333200]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([-47.9297200,-15.7797200]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([-70.6482700,-33.4569400]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([-74.0817500,4.6097100]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([-78.5249500,-0.2298500]).addTo(map);
            var marker7 = new mapboxgl.Marker().setLngLat([-77.0282400,-12.0431800]).addTo(map);
            var marker8 = new mapboxgl.Marker().setLngLat([-57.6359100,-25.3006600]).addTo(map);
            var marker9 = new mapboxgl.Marker().setLngLat([-56.1881600,-34.9032800]).addTo(map);
            var marker10 = new mapboxgl.Marker().setLngLat([-66.8791900,10.4880100]).addTo(map);
            var marker11 = new mapboxgl.Marker().setLngLat([-55.1668200,5.8663800]).addTo(map);
        }else if (continente == "Africa"){
            var marker = new mapboxgl.Marker().setLngLat([13.2343200,-8.8368200]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([3.0419700,36.7525000]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([-25.0647100,17.0196900]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([25.9085900,-24.6545100]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([-1.5338800,12.3656600]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([29.9308000,-3.4264000]).addTo(map);
            var marker7 = new mapboxgl.Marker().setLngLat([-23.5125400,14.9315200]).addTo(map);
            var marker8 = new mapboxgl.Marker().setLngLat([11.5166700,3.8666700]).addTo(map);
            var marker9 = new mapboxgl.Marker().setLngLat([-5.2767400,6.8205500]).addTo(map);
            var marker10 = new mapboxgl.Marker().setLngLat([31.2496700,30.0626300]).addTo(map);
            var marker11 = new mapboxgl.Marker().setLngLat([-0.1969000,5.5560200]).addTo(map);
            var marker12 = new mapboxgl.Marker().setLngLat([36.8166700,-1.2833300]).addTo(map);
            var marker13 = new mapboxgl.Marker().setLngLat([47.5361300,-18.9136800]).addTo(map);
            var marker14 = new mapboxgl.Marker().setLngLat([-6.8325500,34.0132500]).addTo(map);
            var marker15 = new mapboxgl.Marker().setLngLat([-17.3333300,14.7500000]).addTo(map);
            var marker16 = new mapboxgl.Marker().setLngLat([18.4232200,-33.9258400]).addTo(map);
            var marker17 = new mapboxgl.Marker().setLngLat([32.5821900,0.3162800]).addTo(map);
            var marker18 = new mapboxgl.Marker().setLngLat([7.4950800,9.0578500]).addTo(map);
            var marker19 = new mapboxgl.Marker().setLngLat([15.0444,12.10672]).addTo(map);
            var marker20 = new mapboxgl.Marker().setLngLat([32.5324100,15.5517700]).addTo(map);
            var marker21 = new mapboxgl.Marker().setLngLat([2.1098000,13.5136600]).addTo(map);
            var marker22 = new mapboxgl.Marker().setLngLat([28.2871300,-15.4066900]).addTo(map);
            var marker23 = new mapboxgl.Marker().setLngLat([17.0832300,-22.5594100]).addTo(map);
            var marker24 = new mapboxgl.Marker().setLngLat([15.28318,-4.26613]).addTo(map);
            var marker25 = new mapboxgl.Marker().setLngLat([18.5549600,4.3612200]).addTo(map);
            var marker26 = new mapboxgl.Marker().setLngLat([15.3135700,-4.3275800]).addTo(map);
            var marker27 = new mapboxgl.Marker().setLngLat([30.0588500,-1.9499500]).addTo(map);
            var marker28 = new mapboxgl.Marker().setLngLat([38.7468900,9.0249700]).addTo(map);
            var marker29 = new mapboxgl.Marker().setLngLat([13.1874600,32.8751900]).addTo(map);
        }else if (continente == "Asia"){
            var marker = new mapboxgl.Marker().setLngLat([139.6917100,35.6895000]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([116.3972300,39.9075000]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([126.9784000,37.5660000]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([125.7543200,39.0338500]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([69.1723300,34.5281300]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([46.7218500,24.6877300]).addTo(map);
            var marker7 = new mapboxgl.Marker().setLngLat([49.8920100,40.3776700]).addTo(map);
            var marker8 = new mapboxgl.Marker().setLngLat([50.5832000,26.2153600]).addTo(map);
            var marker9 = new mapboxgl.Marker().setLngLat([90.4074400,23.7104000]).addTo(map);
            var marker10 = new mapboxgl.Marker().setLngLat([51.5224500,25.2793200]).addTo(map);
            var marker11 = new mapboxgl.Marker().setLngLat([77.2244500,28.6357600]).addTo(map);
            var marker12 = new mapboxgl.Marker().setLngLat([35.2163300,31.7690400]).addTo(map);
            var marker13 = new mapboxgl.Marker().setLngLat([36.2912800,33.5102000]).addTo(map);
            var marker14 = new mapboxgl.Marker().setLngLat([100.5014400,13.7539800]).addTo(map);
            var marker15 = new mapboxgl.Marker().setLngLat([32.8333300,39.9166700]).addTo(map);
            var marker16 = new mapboxgl.Marker().setLngLat([105.8411700,21.0245000]).addTo(map);
            var marker17 = new mapboxgl.Marker().setLngLat([106.8832400,47.9077100]).addTo(map);
            var marker18 = new mapboxgl.Marker().setLngLat([54.3666700,24.4666700]).addTo(map);
            var marker19 = new mapboxgl.Marker().setLngLat([35.4944200,33.8889400]).addTo(map);
            var marker20 = new mapboxgl.Marker().setLngLat([69.2162700,41.2646500]).addTo(map);
            var marker21 = new mapboxgl.Marker().setLngLat([44.4008800,33.3405800]).addTo(map);
            var marker20 = new mapboxgl.Marker().setLngLat([51.4215100,35.6943900]).addTo(map);
            var marker21 = new mapboxgl.Marker().setLngLat([73.0432900,33.7214800]).addTo(map);
            var marker22 = new mapboxgl.Marker().setLngLat([71.4459800,51.1801000]).addTo(map);
        }else if (continente == "Oceania"){
            var marker = new mapboxgl.Marker().setLngLat([149.1280700,-35.2834600]).addTo(map);
            var marker2 = new mapboxgl.Marker().setLngLat([174.7755700,-41.2866400]).addTo(map);
            var marker3 = new mapboxgl.Marker().setLngLat([147.1797200,-9.4431400]).addTo(map);
            var marker4 = new mapboxgl.Marker().setLngLat([178.4414900,-18.1416100]).addTo(map);
            var marker5 = new mapboxgl.Marker().setLngLat([171.3802700,7.0897100]).addTo(map);
            var marker6 = new mapboxgl.Marker().setLngLat([172.9840000,1.4190000]).addTo(map);
        }
    }
}
var ubicacion = new Mapa();
ubicacion.mostrarMapa();