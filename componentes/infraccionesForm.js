const infraccionesForm = `
<div class="containerFormInfrs m-auto d-flex align-items-center justify-content-center">
    <i class="fas fa-arrow-left" id="toBack" onClick="renderHome()"></i>
    <form action="" class="formInfrs rounded p-4 bg-light d-flex flex-column align-items-center">
        <div class="headerForm text-center my-5">
            <h2>INFRACCIONES</h2>
            <p class="text-secondary">Veamos tus infracciones</p>
        </div> 
        <input type="text" class="border rounded  mt-2 border" id="patenteSelecionada" placeholder="ej:ABC123"/>
        <button class="btn btn-outline-success px-4 mt-4" id="btnBuscarPatente">BUSCAR</button>
    </form>
</div>`;