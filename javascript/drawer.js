var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap,
        draweEstacionamientoInMap: draweEstacionamientoInMap,
    }

    function draweEstacionamientoInMap(estacionamiento, map){
       
            //console.log("Dibujando estacionamiento");        
            var info = "Codigo Estacionamiento: "+estacionamiento.codigo + " - " + "Estado: "+estacionamiento.estado; 
            var p = L.marker(L.latLng(estacionamiento.ubicacion))
            .bindPopup(info);
    
            p.addTo(map);	
            $(p._icon).addClass('estacionamientosIcon');
        
     }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(Comercios, map) {

       
                		// Creamos un marker.		
	/* 	var p = L.marker(L.latLng(comercio.ubicacion.lat, comercio.ubicacion.lon),{icon: iconComercio})
			.bindPopup(info);

		p.addTo(map);	 */
            //cluster marker
        var markers = L.markerClusterGroup();
        var arrayMarcadoresComercios=[];
        Comercios.forEach(comercio => {
            var iconComercio = L.icon({
                iconUrl: comercio.icon,
                color: 'red',
                iconSize:     [38, 46], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [38, 46], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -30] // point from which the popup should open relative to the iconAnchor
            });
            var redMarker = L.AwesomeMarkers.icon({
                icon: 'fa-store',
                markerColor: 'green',
                shape: 'square',
                prefix: 'fa'
            });
            var info = comercio.nombre + "<br>Dirección: "+comercio.direccion + "<br>Horarios de Atención: "+comercio.horariosDeAtencion +"<br>Rubro: "+comercio.rubro.nombre+"<br>Dato interesante: "+comercio.rubro.descripcion;
            var marker = L.marker(L.latLng(comercio.ubicacion.lat, comercio.ubicacion.lon),{icon:redMarker}).bindPopup(info);
            markers.addLayer(marker)
            
        });
        
        /*   markers.addLayer(marker); */
        map.addLayer(markers);
	}
}
