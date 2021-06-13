var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap,
        draweEstacionamientoInMap: draweEstacionamientoInMap,
    }

    function draweEstacionamientoInMap(estacionamiento, map){
        if($('.estacionamientosIcon').length<1){
            console.log("Dibujando estacionamiento");
            var customMarker =  L.AwesomeMarkers.icon({
                markerColor: 'green'
                });
            var iconEstacionamiento = L.icon({
                iconUrl: estacionamiento.icon,
            });
            var info = "Codigo Estacionamiento: "+estacionamiento.codigo + " - " + "Estado: "+estacionamiento.estado;
    
    
            var p = L.marker(L.latLng(estacionamiento.ubicacion),{icon:customMarker})
            .bindPopup(info);
    
            p.addTo(map);	
            $(p._icon).addClass('estacionamientosIcon');
        }else{
            console.log("ya estan dibujadas");
        }
      
    
            
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
                    iconSize:     [38, 46], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [38, 46], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -30] // point from which the popup should open relative to the iconAnchor
                });
                var info = comercio.nombre + "<br>Dirección: "+comercio.direccion + "<br>Horarios de Atención: "+comercio.horariosDeAtencion +"<br>Rubro: "+comercio.rubro.nombre+"<br>Dato interesante: "+comercio.rubro.descripcion;

                var marker = L.marker(L.latLng(comercio.ubicacion.lat, comercio.ubicacion.lon)).bindPopup(info);
               
                markers.addLayer(marker)
              
            });
           
          /*   markers.addLayer(marker); */
            map.addLayer(markers);
        
        
       
      

     
	}
}
