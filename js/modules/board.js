import { Territory } from "./territory.js";

/*
class Tablero {
    constructor(territorios, ancho, alto) {
        this.territorios = territorios;
        this.ancho = ancho;
        this.alto = alto;
    }

    crearTablero() {
        let tablero = document.createElement("div");
        tablero.style.width = this.ancho + "px";
        tablero.style.height = this.alto + "px";

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");

        this.territorios.forEach(function (territorio) {
            let circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle")
            circulo.setAttributeNS(null, "cx", territorio.x);
            circulo.setAttributeNS(null, "cy", territorio.y);
            circulo.setAttributeNS(null, "r", territorio.radio);
            circulo.setAttributeNS(null, "fill", territorio.fondo);

            circulo.addEventListener("click", function () {
                console.log(territorio.id);
            });
            svg.appendChild(circulo);
        });
        tablero.appendChild(svg);
        document.body.appendChild(tablero);
    }
}
*/
class Board {

    constructor(board) {
        this.board = board;
        this.territories = [];
        
        //añadimos un objeto con atributos al array (JSON)
        let territory = new Territory("Spain")
        let objeto = {
            "positionX": 0,
            "positionY": 0,
            "territory": territory
        }
        this.territories.push(objeto)

        //mejor forma para añadir un objeto con atributos al array (JSON)
        this.territories.push({
            "positionX": 0,
            "positionY": 0,
            "territory": new Territory("Portugal")
        })
    }

    drawBoard() {
        let pos = 40;
        for (let item of this.territories) {
            //creamos el circulo svg
            let circle =document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //añadimos atributos a los circulos
            circle.setAttribute("cx", pos);
            circle.setAttribute("cy", 40);
            circle.setAttribute("r", 40);
            circle.setAttribute("fill", "red");
            //superponemos los metadatos
            item.positionX = 40;
            item.positionY = 40;
            circle.addEventListener("click", function(){
                console.log(item.territory.getName());
            })
            //cambiar la posicion x
            pos += 100;
            //añadimos el circulo al tablero
            this.board.appendChild(circle);
        }
    }
}

export { Board }