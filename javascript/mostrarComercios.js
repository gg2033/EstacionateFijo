var drawer = new Drawer();

window.renderComercios = function renderComercios() {
    Comercios.forEach(puntoVenta => {
        drawer.drawLocationInMap(puntoVenta, myMap);
    });

}