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
        <input class="opcion d-none" id="infraciones" type="button" value="Ver infracciones"/>
        <input class="opcion" type="button" value="Ver puntos de venta"/>
        <input class="opcion" type="button" value="Ver estacionamientos"/>
    </div>
    <div class="containerInfracciones d-none" id="containerInfracciones"></div>
    <div id="mapid"></div>
</div>`