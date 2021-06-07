/******************************************************************************
 * Función para crear un mapa.
 */


function createMap(nodeId) {
    var ungsLocation = [-34.5221554, -58.7000067];
    let myMap = L.map(nodeId).setView(ungsLocation, 13);

    // renderizamos el mapa
    const tileprovider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    L.tileLayer(tileprovider,
        {
            maxZoom: 18,
        }).addTo(myMap);

    L.polygon(
        [
            L.latLng(-34.515594, - 58.705654),
            L.latLng(-34.523503, -58.714062),
            L.latLng(-34.519177, -58.719890),
            L.latLng(-34.511089, -58.707909),
            L.latLng(-34.514062, -58.707909),
            L.latLng(-34.513824, -58.707584)
        ]
    ).addTo(myMap);

    let marker = L.marker(ungsLocation).addTo(myMap); 
}
