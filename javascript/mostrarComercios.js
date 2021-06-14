var drawer = new Drawer();

window.renderComercios = function renderComercios() {
   //Comercios.forEach(comercio => { 
        drawer.drawLocationInMap(Comercios, myMap);
  // }); 
}