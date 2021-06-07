const home =`
<div class="homeContainer">
    <div id="header">
       <h1 id="title">Estacionate Fijo</h1>
       <nav>
            <button class="btn btn-outline-primary">Registrar Conductor</button>
            <button class="btn btn-outline-primary px-3 mx-3" onclick="renderLogin()">Logear Conductor</button>
       </nav>
    </div>
    <div id="actionsContainer">
        <h4>ACCIONES</h4>
        <input class="opcion" type="button" id="pass" value="Ver infracciones"/>
        <input class="opcion" type="button" id="nombre" value="Ver puntos de venta"/>
        <input class="opcion" type="button" id="pass" value="Ver estacionamientos"/>
    </div>
    <div id="mapid"></div>
</div>`