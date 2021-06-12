var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap,
        draweEstacionamientoInMap: draweEstacionamientoInMap,
    }

    function draweEstacionamientoInMap(estacionamiento, map){
        console.log("Dibujando estacionamiento");

        var iconEstacionamiento = L.icon({
            iconUrl: estacionamiento.icon,
            iconSize:     [38, 46], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [38, 46], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -30] // point from which the popup should open relative to the iconAnchor
        });
		var info = "Codigo Estacionamiento: "+estacionamiento.codigo + " - " + "Estado: "+estacionamiento.estado;

        var p = L.marker(L.latLng(estacionamiento.ubicacion),{icon: iconEstacionamiento})
        .bindPopup(info);
        p.addTo(map);		
            
     }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(comercio, map) {
        console.log("Dibujando la ubicacion del comercio.");
        var iconComercio = L.icon({
            iconUrl: comercio.icon,
            iconSize:     [38, 46], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [38, 46], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -30] // point from which the popup should open relative to the iconAnchor
        });
		var info = comercio.nombre + "<br>Dirección: "+comercio.direccion + "<br>Horarios de Atención: "+comercio.horariosDeAtencion +"<br>Rubro: "+comercio.rubro.nombre+"<br>Dato interesante: "+comercio.rubro.descripcion;

		// Creamos un marker.		
		var p = L.marker(L.latLng(comercio.ubicacion.lat, comercio.ubicacion.lon),{icon: iconComercio})
			.bindPopup(info);

		p.addTo(map);		
	}
}
