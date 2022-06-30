import { mostrarTodasLasPizzas } from "./imprimirPizzas.js";
import {
  muzza,
  calabresa,
  napolitana,
  fugazzeta,
  jamonYMorron,
  faina,
} from "./pizzasCreadas.js";

const pizzas = [
  muzza,
  calabresa,
  napolitana,
  fugazzeta,
  jamonYMorron,
  faina
];

export const cargarPizzas = () => {
  localStorage.setItem("Pizzas", JSON.stringify(pizzas));
  mostrarTodasLasPizzas(pizzas);
};

