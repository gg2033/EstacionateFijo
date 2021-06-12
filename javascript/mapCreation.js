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
    
}
