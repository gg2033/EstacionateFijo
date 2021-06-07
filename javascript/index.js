$(document).ready(function(){
    
    var userRegister = [
        {email:'carrizojuancruz@hotmail.com.ar', password:123, username:'juan'},
        {email:'francocisneros147@gmail.com', password:123, username:'franco'},
        {email:'gfgustavo2015@gmail.com', password:123, username:'gustavo'},
    ]

    var usuario = localStorage.getItem('username');
    var user = userRegister.filter(user=>user.email==email && user.password==password)
    if(user && user.length>0){
        window.location.href = "home.html";
    }

    $('#login').click(function()
    {
    var email=$("#email").val();
    var password=$("#password").val();
    if($.trim(email).length>0 && $.trim(password).length>0) {
        var user = userRegister.filter(user=>user.email==email && user.password==password)
        if(user){
            localStorage.setItem('username', user.username);
            window.location.href = "home.html";
        }
        else{
            //Shake animation effect.
            $("#error").html("<span style='color:#cc0000'>Error:</span> Clave o usuarios Incorrectos. ");
        }

    }else{
        $("#error").html("<span style='color:#cc0000'>Error:</span> Invalido usuario o password ");
    }
    return false;
    });
  
});