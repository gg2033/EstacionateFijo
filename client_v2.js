
var bootstrap = function() {
	//Para el ejemplo
    var url = Config.url;
	var urlLocations = '/locations/';
	var urlStates = '/weatherstates/';
	var location_id = '4852'
	
	
    var map = createMap('mapid');
    var drawer = new Drawer();

    // OPCIÓN 3: Promises. Request asincrónico evitando el callbackhell.   ****
	
    var requestLocation = function(location_id) {
        return $.ajax(url + urlLocations + location_id);
    }
    var requestState = function(state_id) {
        return $.ajax(url + urlStates + state_id);
    }
    var responseExtract = function(attr, response) {
        console.log(response);
        return response[attr]
    }
    var extractLocation = function(response) {
        return responseExtract('location', response);
    }
    var extractState = function(response) {
        return responseExtract('state', response);
    }
    var drawLocation = function(location) {
		drawer.drawLocationInMap(location, map);
    }

    var resolveState = function(location) {
        // pedimos el estado con el state_id, y retornamos la ubicacion completa
        return requestState(location.state_id)
               .then(function(response){
                    location.state = response.state;
                    delete location.state_id;                    
                    return location;        
                });
    }

    // comenzamos la ejecución:
    
	requestLocation(location_id) 	// pedimos la ubicacion  al servidor
        .then(extractLocation) 		// extraemos la ubicacion de la respuesta del servidor 
        .then(resolveState)			// resolvemos el estado
        .then(drawLocation) 		// dibujamos la ubicacion con su estado
        .done(function() {
            console.log("Fin.");
        });

    // FIN OPCIÓN 3 ***********************************************************
};

$(bootstrap);
