import { resultado } from "./interfaz.js";
import {removerElementos} from './removerElems.js';

const contenedorError = document.createElement("div");
const error = document.createElement("p");
contenedorError.className = "error";

export const pizzaNoEncontrada = () => {
  removerElementos();
  error.innerHTML = "No se encontraron pizzas con ese nombre.";
  contenedorError.appendChild(error);
  resultado.append(contenedorError);
};

export const pizzaVacia = () => {
  removerElementos();
  error.innerHTML = "El campo no puede estar vacio."
  contenedorError.appendChild(error);
  resultado.append(contenedorError);
};
