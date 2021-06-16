window.renderHome = function renderHome() {
    container.innerHTML = home;
    document.querySelector('footer').classList.remove('d-none');
    createMap('mapid');

    if(usLogeado !== false) {
        document.getElementById("btnLogin").className="d-none";
        document.getElementById("usuario").innerText=usLogeado.nombre;
        document.getElementById("usuario").classList.remove('d-none');
        gestionarVerAutos();
        document.getElementById('logout').classList.remove('d-none');
        document.getElementById('logout').onclick = () =>{
            usLogeado = false;
            renderHome();
        }
    }
}

function gestionarMenues() {
    let m1 = document.getElementById('menu_1');
    let m2 =document.getElementById('menu_2');
    if(m1.classList.contains('d-none')) {
        m1.classList.remove('d-none');
        m2.classList.add('d-none');
    }
    else {
        m1.classList.add('d-none');
        m2.classList.remove('d-none');
        document.getElementById('toHome').onclick = () => {
            renderHome();
        }
    }
}




