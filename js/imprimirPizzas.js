import { crearTarjetaDePizza } from "./creadorTarjetas.js";
import { resultado } from "./interfaz.js";
import {removerElementos} from './removerElems.js';

export const mostrarPizza = (pizza) => {
  removerElementos();
  let div = document.createElement("div");
  div.className = "tarjeta_pizza";
  crearTarjetaDePizza(pizza, div);
  resultado.appendChild(div);
};

export const mostrarTodasLasPizzas = (pizzas) => {
  pizzas.map((p) => {
    let div = document.createElement("div");
    div.className = "tarjeta_pizza";
    crearTarjetaDePizza(p, div);
    resultado.appendChild(div);
  });
};
