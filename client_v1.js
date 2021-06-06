
/******************************************************************************
 * Funciones para request asincrónico y sincrónico utilizando XMLHttpRequest
 */
var asyncQuery = function(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // https://stackoverflow.com/questions/13293617/why-is-my-ajax-function-calling-the-callback-multiple-times
        if (this.readyState === 4) {
            if (this.status === 200) {
                // parseamos el resultado para obtener el objeto JavaScript
                resObj = JSON.parse(xhttp.responseText)
                // llamamos a la función callback con el objeto parseado como parámetro.
                callback(resObj);
            }
        }
    };
    xhttp.open("GET", url, true);
    var ret = xhttp.send();
    return ret;
}

var syncQuery = function(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    // El browser (Chrome) dispara una excepción:
    // [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental
    // effects to the end user's experience.
    // For more help, check https://xhr.spec.whatwg.org/.
    xhttp.send();

    if (xhttp.status === 200) {
        resObj = JSON.parse(xhttp.responseText)
        return resObj;
    }
    return null;
}

/******************************************************************************
 * Inicio.
 */
var bootstrap = function() {
	//Para el ejemplo
    var url = Config.url;
	var urlLocations = '/locations/';
	var urlStates = '/weatherstates/';
	var location_id = '4852'

    var map = createMap('mapid');
    var drawer = new Drawer();

    // OPCIÓN 1: Request asincrónico. *****************************************
    // dibujar de manera asincrónica
    // pedimos los estados
	
	var callback = function(response) {
		drawer.drawStatesInList(response.states, 'states');
		
		var states = response.states.reduce(function(dict, state) {
			dict[state.id] = state;			
			return dict;
		}, {});

		// funcion para la ubicacion, cuando ya tenemos los estados		
		var callback2 = function(response) {
			console.log(states);
			var  location = response.location;

            console.log(location);

            location.state = states[response.location.state_id];            
            delete location.state_id;

            console.log(location);

			drawer.drawLocationInMap(location, map);
        }
		
		//pedimos la ubicacion, segundo pedido
		asyncQuery(url + urlLocations + location_id, callback2);
		//

    };
    asyncQuery(url + urlStates, callback);
	
    // Esta opción deriva en el callbackhell
    // Referencias:
    // 1. http://callbackhell.com/
    // 2. https://stackoverflow.com/questions/25098066/what-the-hell-is-callback-hell-and-how-and-why-rx-solves-it
    // FIN OPCIÓN 1 ***********************************************************

    // OPCIÓN 2: Request sincrónico.  *****************************************
    // dibujar las gruas de manera sincrónica
	var skip = function(response) {
	};
	
	//pedimos la ubicacion
    var response1 = syncQuery(url + urlLocations + location_id, skip);
    
    if (response1) {
		var state_id = response1.location.state_id;
		
		var response2 = syncQuery(url + urlStates + state_id, skip);
		
        if (response2) {
		    var location = response1.location;
		    
            location.state = response2.state;
            delete location.state_id;

		    drawer.drawLocationInMap(location, map);
        }    

    }

    // FIN OPCIÓN 2 ***********************************************************

};

$(bootstrap);
