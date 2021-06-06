
var bootstrap = function() {
	//Para el ejemplo
    var url = Config.url;
	var urlLocations = '/locations/';
	var urlStates = '/weatherstates/';
	var location_id = '4852'
	
	
    var map = createMap('mapid');
    var drawer = new Drawer();

    fetch(url + urlLocations + location_id)  //pedimos la ubicacion al servidor
    .then(data => data.json() ) //parseamos la respuesta a un JSON
    .then(data => data['location'] ) // extraemos la ubicacion de la respuesta del servidor 
    .then(localizacion => {
        fetch(url+urlStates+localizacion.state_id) // resolvemos el estado
        .then( data => data.json())
        .then(data => {  // dibujamos la ubicacion con su estado
            localizacion.state = data.state;
			console.log(localizacion);
            drawer.drawLocationInMap(localizacion, map);
        })
    })




}

$(bootstrap)
