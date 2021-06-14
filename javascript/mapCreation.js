/******************************************************************************
 * Función para crear un mapa.
 */

var myMap;
function createMap(nodeId) {
    var ungsLocation = [-34.5221554, -58.7000067];
    myMap = L.map(nodeId).setView(ungsLocation, 13);

    // renderizamos el mapa
    const tileprovider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    L.tileLayer(tileprovider,
        {
            maxZoom: 25,
        }).addTo(myMap);

    Zonas.forEach(zona => {
        L.polygon(zona.region, {color:zona.color}
        ).addTo(myMap);
    })
 /*    let marker = L.marker(ungsLocation).addTo(myMap);  */


    /*myMap.on('zoomend', function() {
        console.log(myMap.getZoom());
        if (myMap.getZoom() <17){
            $('#mapid .comerciosIcon').css({'display':'none'}); 
            
            
        }
        if (myMap.getZoom()>17){
            $('#mapid .comerciosIcon').css({'display':'block'}); 
        }

        if (myMap.getZoom() <14){
            $('#mapid .estacionamientosIcon').css({'display':'none'}); 
        }
        if (myMap.getZoom()>14){
            $('#mapid .estacionamientosIcon').css({'display':'block'}); 
        }
       */ 
      /*   var newzoom = '' + (myMap.getZoom()*2) +'px'; */
    
        
    //});
}
