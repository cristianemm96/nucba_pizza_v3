import * as UI from "./interfaz.js";
import {cargarPizzas} from './cargadorPizzas.js';
import {esVacio} from './validaciones.js';
import {buscar} from './buscadorPizzas.js';
import {pizzaVacia} from './errores.js'
import {removerElementos} from './removerElems.js';

window.addEventListener("load", () => {
  cargarPizzas();
  UI.form.addEventListener("submit", buscarPizza);
});

const buscarPizza = (e) => {
  e.preventDefault()
  if (!esVacio(UI.nombrePizza.value)) {
    buscar(UI.nombrePizza.value);
  }
  else{
    pizzaVacia();
  }
};


UI.nombrePizza.addEventListener('keyup', ()=>{
  if(esVacio(UI.nombrePizza.value)){
    removerElementos();
    cargarPizzas();
  }
})