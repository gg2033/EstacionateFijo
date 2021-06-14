window.renderLogin = function renderLogin() {
    container.innerHTML=loginForm;
}

window.handlerLogin =  function handlerLogin() {
    let email = document.getElementById('emailLog').value;
    let pass = document.getElementById('passLog').value;
    usLogeado = validarUsuario(email, pass);
    if(usLogeado === false) {
        alert("El email o el password es INCORRECTO!!");
    } else {
        renderHome();
        gestionarVerAutos();
    }
}

function validarUsuario(email, pass) {
    let conductor = conductores.find(r =>(r.email===email, r.pass===pass));
    return conductor == undefined ? false : {
        nombre : conductor.nombre, patente : conductor.patente, 
        ubicacion: conductor.ubicacionAuto
    };
}

function gestionarVerAutos() {
    console.log(usLogeado)
    let tag = document.getElementById("ubicarAuto");
    if(usLogeado.ubicacion !== undefined) {
        tag.classList.remove('d-none');
        tag.addEventListener('click', () => {
            renderUbicacionAuto();
        })
    }
}

function renderUbicacionAuto() {
    var iconMarker = L.AwesomeMarkers.icon({
        icon: 'fa-car',
        markerColor: 'black',
        shape: 'square',
        prefix: 'fa'
    });

    L.marker(usLogeado.ubicacion, {icon: iconMarker}).addTo(myMap).bindPopup('Movil Estacionado');

 }






