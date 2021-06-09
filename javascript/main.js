let container = document.getElementById('container');
let usLogeado = false;


function renderHome() {
    container.innerHTML = home;
    createMap('mapid');
}

window.renderLogin = function renderLogin() {
    container.innerHTML=loginForm;
}


window.handlerLogin =  function handlerLogin() {
    let email = document.getElementById('emailLog').value;
    let pass = document.getElementById('passLog').value;
    console.log(email);
    console.log(pass);
    usLogeado = validarUsuario(email, pass);
    console.log(usLogeado);
    if(usLogeado === false) {
        alert("El email o el password es INCORRECTO!!");
    } else {
        renderHome();
        document.getElementById("btnLogin").className="d-none";
        document.getElementById("usuario").innerText=usLogeado.nombre;
        document.getElementById("usuario").classList.remove('d-none');
        document.getElementById("infraciones").className="opcion";
    }
}


function validarUsuario(email, pass) {
    let conductor = conductores.find(r =>(r.email===email, r.pass===pass));
    return conductor == undefined ? false : {nombre : conductor.nombre, patente : conductor.patente} ;
}



async function renderInfracciones(patente) {
    document.getElementById('mapid').classList.add('d-none');
    const contInfs = document.getElementById('containerInfracciones');
    contInfs.classList.remove('d-none');
    contInfs.innerText = '';

    let datos = (await(await fetch(`https://infraccionesweb.herokuapp.com/api/${patente}/infracciones`)).json()).infracciones;
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
    let dep = (await(await fetch(`https://infraccionesweb.herokuapp.com/api/${inf.patente}/acarreos/${inf.id}`)).json()).acarreo.deposito;
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








renderHome();
/*setTimeout(()=> {
    renderInfracciones('ABC123');
},2000)*/

//renderInfracciones('ABC123');

/*fetch('https://infraccionesweb.herokuapp.com/api/').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/depositos').then(r => r.json()).then(s => console.log(s));
*/
fetch('https://infraccionesweb.herokuapp.com/api/ABC123/acarreos/42').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/ABC123/infracciones').then(r => r.json()).then(s => console.log(s));








