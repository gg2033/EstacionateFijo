$(document).ready(function(){

var usuario = localStorage.getItem('nombre');

$('#username').html(usuario);

$("#salir").click( function() {
    localStorage.removeItem('username');
    localStorage.clear();
    location.reload();
    window.location.href = "index.html";
});
  
  });


