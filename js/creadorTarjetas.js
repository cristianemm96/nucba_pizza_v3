export const crearTarjetaDePizza = (p, div) => {
  let nombre = document.createElement("p");
  nombre.innerText = `${p.nombre}`;
  nombre.className = "nombre_pizza";
  let imagen = document.createElement("img");
  imagen.setAttribute("src", p.urlIMG);
  let precio = document.createElement("p");
  precio.className = "precio_pizza";
  precio.innerText = `$ ${p.precio}`;
  let ingredientes = document.createElement("ul");
  ingredientes.innerText = `            Ingredientes:
                                ${p.ingredientes.join(", ")}`;
  div.appendChild(nombre);
  div.appendChild(imagen);
  div.appendChild(precio);
  div.appendChild(ingredientes);
};
