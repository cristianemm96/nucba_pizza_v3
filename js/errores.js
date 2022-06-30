import { resultado } from "./interfaz.js";
import {removerElementos} from './removerElems.js';

const errorContainer = document.createElement("div");
const error = document.createElement("p");
errorContainer.className = "error";

export const pizzaNoEncontrada = () => {
  removerElementos();
  error.innerHTML = "No se encontraron pizzas con ese nombre.";
  errorContainer.appendChild(error);
  resultado.append(errorContainer);
};

export const pizzaVacia = () => {
  removerElementos();
  error.innerHTML = "El campo no puede estar vacio."
  errorContainer.appendChild(error);
  resultado.append(errorContainer);
};
