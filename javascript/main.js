let container = document.getElementById('container');
let usLogeado = false;


function renderHome() {
    container.innerHTML = home;
    createMap('mapid');
    if(usLogeado !== false) {
        document.getElementById("btnLogin").className="d-none";
        document.getElementById("usuario").innerText=usLogeado.nombre;
        document.getElementById("usuario").classList.remove('d-none');
        //document.getElementById("infraciones").className="opcion";
    }
}



renderHome();
//renderFormInfrs();

//renderInfracciones("ABC123")




