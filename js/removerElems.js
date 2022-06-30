import { resultado } from "./interfaz.js";

export const removerElementos = () =>{
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
