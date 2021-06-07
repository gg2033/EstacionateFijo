let container = document.getElementById('container');



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
}



renderHome();

fetch('https://infraccionesweb.herokuapp.com/api/').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/depositos').then(r => r.json()).then(s => console.log(s));
fetch('https://infraccionesweb.herokuapp.com/api/ABC123/acarreos/42').then(r => r.json()).then(s => console.log(s));








