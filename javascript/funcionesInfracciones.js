const url = "https://infraccionesweb.herokuapp.com/api/";
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
        <div class="deposito border-top mt-3 pt-2">
            <p><strong>Deposito: </strong>${dep.nombre}</p>
            <p><strong>Direccion: </strong>${dep.direccion}</p>
            <p><strong>Horarios: </strong>${dep.horarios}</p>
            <p><strong>Telefono: </strong>${dep.telefono}</p>
        </div>
    </div>`);
}

window.renderFormInfrs = function renderFormInfrs() {
    container.innerHTML = `
    <div class="containerFormInfrs m-auto d-flex align-items-center justify-content-center">
        <form action="" class="formInfrs rounded p-4 bg-light d-flex flex-column align-items-center">
            <div class="headerForm text-center my-5">
                <h2>INFRACCIONES</h2>
                <p class="text-secondary">Veamos tus infracciones</p>
            </div> 
            <input type="text" class="border rounded  mt-2 border" id="patenteSelecionada" placeholder="patente"/>
            <button class="btn btn-outline-success px-4 mt-4" id="btnBuscarPatente">BUSCAR</button>
        </form>
    </div>`;

    document.getElementById("btnBuscarPatente").addEventListener('click', (e)=> {
        e.preventDefault();
        renderInfracciones(document.getElementById('patenteSelecionada').value);
    })
}

async function renderInfracciones(patente) {
    renderHome();
    document.getElementById('mapid').classList.add('d-none');
    const contInfs = document.getElementById('containerInfracciones');
    contInfs.classList.remove('d-none');
    contInfs.innerText = '';

    let datos = (await(await fetch(`${url+patente}/infracciones`)).json()).infracciones;
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












