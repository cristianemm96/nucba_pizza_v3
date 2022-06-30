import { mostrarPizza } from "./imprimirPizzas.js";
import { pizzaNoEncontrada } from "./errores.js";

const pizzas = JSON.parse(localStorage.getItem("Pizzas"));

export const buscar = (nombre) => {
  const pizzaAMostrar = pizzas.find(
    (p) => p.nombre.toLowerCase() == nombre.toLowerCase()
  );
  !pizzaAMostrar ? pizzaNoEncontrada() : mostrarPizza(pizzaAMostrar);
};

