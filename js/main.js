import { Tablero } from "./modules/tablero.js";
import { Territorio } from "./modules/tablero.js";

let territorio1 = new Territorio(200, 200, 20, terrrito1);
let territorio2 = new Territorio(800, 200, 20, terrrito2);
let territorio3 = new Territorio(200, 800, 20, terrrito3);
let territorio4 = new Territorio(800, 800, 20, terrrito4);

let territorios = [territorio1, territorio2, territorio3, territorio4];

let tablero = new Tablero(territorios ,1200, 1200);

tablero.crearTablero();