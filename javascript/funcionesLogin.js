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
    }
}

function validarUsuario(email, pass) {
    let conductor = conductores.find(r =>(r.email===email, r.pass===pass));
    return conductor == undefined ? false : {nombre : conductor.nombre, patente : conductor.patente};
}
