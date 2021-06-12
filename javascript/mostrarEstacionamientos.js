var drawer = new Drawer();

window.renderEstacionamientos = function renderEstacionamientos() {
    Estacionamientos.filter(e=>e.estado=="DISPONIBLE").forEach(estacionamiento => {
        drawer.draweEstacionamientoInMap(estacionamiento, myMap);
    });

}