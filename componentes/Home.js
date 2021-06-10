const home =`
<div class="homeContainer">
    <div id="header">
       <h1 id="title">Estacionate Fijo</h1>
       <nav>
            <button class="btn btn-outline-light px-3 mx-3 shadow" id="btnLogin" onclick="renderLogin()">Logear Conductor</button>
            <span id="usuario" class="d-none"></span>
       </nav>
    </div>
    <div id="actionsContainer">
        <span class="opcion px-3" id="infraciones" onclick="renderFormInfrs();">Ver Infracciones</span>
        <span class="opcion">Ver Puntos de venta</span>
        <span class="opcion">Ver Estacionamientos</span>
    </div>
    <div class="containerInfracciones d-none" id="containerInfracciones"></div>
    <div id="mapid"></div>
</div>`