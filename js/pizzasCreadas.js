import { Pizza } from "./pizza.js";

/*
  https://i.ibb.co/3zxrcgG/calabresa.webp
  https://i.ibb.co/tcbpkPN/muzza.webp
  https://i.ibb.co/MMxYp8F/napolitana.webp
  https://i.ibb.co/Z8QLnLD/fugazzeta.webp
  https://i.ibb.co/Tg7ymPR/jamon-y-morron.webp
  https://i.ibb.co/QcDntGT/faina.webp
*/ 

export const muzza = new Pizza(
  "Muzzarella",
  "https://i.ibb.co/tcbpkPN/muzza.webp",
  ["Muzzarella", "Oregano", "Salsa", "Aceitunas"],
  1000
);
export const calabresa = new Pizza(
    "Calabresa",
    "https://i.ibb.co/3zxrcgG/calabresa.webp",
    ["Muzzarella", "Oregano", "Salsa", "Salamin", "Longaniza"],
    1500
);
export const napolitana = new Pizza(
    "Napolitana",
    "https://i.ibb.co/MMxYp8F/napolitana.webp",
    ["Muzzarella", "Oregano", "Salsa", "Tomate"],
    1200
);
export const fugazzeta = new Pizza(
    "Fugazzeta",
    "https://i.ibb.co/Z8QLnLD/fugazzeta.webp",
    ["Muzzarella", "Oregano", "Cebolla"],
    1200
);
export const jamonYMorron = new Pizza(
    "Jamon y morron",
    "https://i.ibb.co/Tg7ymPR/jamon-y-morron.webp",
    ["Muzzarella", "Oregano", "Salsa", "Jamon", "Morron", "Aceituna"],
    1400
);
export const faina = new Pizza(
    "Faina",
    "https://i.ibb.co/QcDntGT/faina.webp",
    ["Muzzarella", "Oregano", "Salsa", "Faina"],
    1350
);
