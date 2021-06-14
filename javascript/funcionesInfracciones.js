const url = "https://infraccionesweb.herokuapp.com/api/";

window.renderFormInfrs = function renderFormInfrs() {
    container.innerHTML = infraccionesForm;
    document.getElementById("btnBuscarPatente").addEventListener('click', (e)=> {
        e.preventDefault();
        renderInfracciones(document.getElementById('patenteSelecionada').value);
    })
}

function infrSinAcarreo(inf) {
    let ret = 
    `<div class="infraccion">
        <div class="infraccionInfo">
            <p><strong>Infraccion: </strong>${inf.id}</p>
            <p><strong>Responsable: </strong>${inf.patente}</p>
            <p><strong>Registracion: </strong>${inf.fechaHoraRegistro}</p>
            <p><strong>Actualizacion: </strong>${inf.fechaHoraActualizacion}</p>
            <p><strong>monto a pagar:</strong>${inf.montoAPagar}</p>
            <p><strong>Tipo infraccion: </strong>${inf.tipoInfraccion}</p>
            <p><strong>Direccion Registrada: </strong>${inf.direccionRegistrada}</p>
            <p><strong>Existe Acarreo: </strong>NO</p>
        </div>
    </div>`;
    return ret;
}

async function infrConAcarreo(inf, call) {
    let dep = (await(await fetch(`${url+inf.patente}/acarreos/${inf.id}`)).json()).acarreo.deposito;
   call(
    `<div class="infraccion">
        <div class="infraccionInfo">
            <p><strong>Infraccion: </strong>${inf.id}</p>
            <p><strong>Responsable: </strong>${inf.patente}</p>
            <p><strong>Registracion: </strong>${inf.fechaHoraRegistro}</p>
            <p><strong>Actualizacion: </strong>${inf.fechaHoraActualizacion}</p>
            <p><strong>monto a pagar:</strong>${inf.montoAPagar}</p>
            <p><strong>Tipo infraccion: </strong>${inf.tipoInfraccion}</p>
            <p><strong>Direccion Registrada: </strong>${inf.direccionRegistrada}</p>
            <p><strong>Existe Acarreo: </strong>SI</p>
        </div>
        <div class="deposito border-top pt-1 mt-3 ">
            <div class="pt-2 mb-3">
                <p><strong>Deposito: </strong>${dep.nombre}</p>
                <p><strong>Direccion: </strong>${dep.direccion}</p>
                <p><strong>Horarios: </strong>${dep.horarios}</p>
                <p><strong>Telefono: </strong>${dep.telefono}</p>
            </div>
            <div id="depositoMap-${inf.id}" class="mapaDepositos border"></div>
        </div>
    </div>`);
    createMapDepositos(`depositoMap-${inf.id}`, dep);
}

async function renderInfracciones(patente) {
    renderHome();
    document.getElementById('mapid').classList.add('d-none');
    const contInfs = document.getElementById('containerInfracciones');
    contInfs.classList.remove('d-none');
    contInfs.innerText = '';
    let datos = (await(await fetch(`${url+patente}/infracciones`)).json()).infracciones;
    contInfs.innerHTML = `<div id="contResultados"><span>Resultados econtrados: ${datos.length}</span><span>${patente}</span></div>`;
    datos.forEach(element => {
        if(element.existeAcarreo === true){
            infrConAcarreo(element,(data) =>{
                contInfs.innerHTML = contInfs.innerHTML + data;
            });
        }
        else {
            contInfs.innerHTML = contInfs.innerHTML + infrSinAcarreo(element);
        }
    });
}


function createMapDepositos(nodeId, dep) {
    let coordenadas = [dep.ubicacion.lat, dep.ubicacion.lon];
    let myMap = L.map(nodeId).setView(coordenadas, 13);

    // renderizamos el mapa
    const tileprovider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let marker = L.marker(coordenadas).addTo(myMap)
    .bindPopup(`${dep.nombre}<br/><span class="depDir">${dep.direccion}</span>`); 
    L.tileLayer(tileprovider,
        {
            maxZoom: 13,
        }).addTo(myMap);
}









