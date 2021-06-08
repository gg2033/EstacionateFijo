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


renderHome();
/*
fetch('https://infraccionesweb.herokuapp.com/api/').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/depositos').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/ABC123/acarreos/42').then(r => r.json()).then(s => console.log(s));
*/







