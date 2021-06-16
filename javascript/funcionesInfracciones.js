const url = "https://infraccionesweb.herokuapp.com/api/";

window.renderFormInfrs = function renderFormInfrs() {
    container.innerHTML = infraccionesForm;
    document.querySelector('footer').classList.add('d-none');
    document.getElementById("btnBuscarPatente").addEventListener('click', (e)=> {
        e.preventDefault();
        if(document.getElementById('patenteSelecionada').value.replaceAll(" ","").length >0) {
            renderInfracciones(document.getElementById('patenteSelecionada').value.replaceAll(" ",""));
        }
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
    container.innerHTML = container.innerHTML + '<img src="img/loading.svg" id="loading_img" alt="">';
    gestionarMenues();
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
    document.getElementById('loading_img').classList='d-none';
}








