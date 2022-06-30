export class Pizza {
    constructor(nombre, urlIMG,ingredientes, precio) {
      this.nombre = nombre;
      this.urlIMG = urlIMG;
      this.ingredientes = ingredientes;
      this.precio = precio;
    }
    getNombre = () => this.nombre;
    getURL = () => this.urlIMG;
    getIngredientes = () => this.ingredientes;
    getPrecio = () => this.precio;
  }
  