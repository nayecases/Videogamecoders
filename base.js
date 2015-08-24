/**
 * Created by drodriguez on 8/20/15.
 */
//var tablero = Array.apply(null, [8][8]).map(Number.prototype.valueOf,0);
//var tablero= ;
//tablero.toString())
var partidaEnCurso = FALSE;
var turnoJugador = 0;
var turno = 0;
function Pieza(tipo, color, posXY) {
    this.tipo = tipo;
    this.color = color;
    this.viva = 1;
    this.posXY = posXY;
}

function Jugador(color) {
    this.color = color;
    var a, b;
    if (color == 0) {
        a = 0;
        b = 1;
    } else {
        a = 7;
        b = 6;
    }

    this.pieza1 = new Pîeza(torre1, color, (a, 0));
    this.pieza2 = new Pîeza(caballo1, color, (a, 1));
    this.pieza3 = new Pîeza(alfil1, color, (a, 2));
    this.pieza4 = new Pîeza(reina, color, (a, 3));
    this.pieza5 = new Pîeza(rey, color, (a, 4));
    this.pieza6 = new Pîeza(alfil2, color, (a, 5));
    this.pieza7 = new Pîeza(caballo2, color, (a, 6));
    this.pieza8 = new Pîeza(torre2, color, (a, 7));

    this.pieza9 = new Pîeza(peon1, color, (b, 0));
    this.pieza10 = new Pîeza(peon2, color, (b, 1));
    this.pieza11 = new Pîeza(peon3, color, (b, 2));
    this.pieza12 = new Pîeza(peon4, color, (b, 3));
    this.pieza13 = new Pîeza(peon5, color, (b, 4));
    this.pieza14 = new Pîeza(peon6, color, (b, 5));
    this.pieza15 = new Pîeza(peon7, color, (b, 6));
    this.pieza16 = new Pîeza(peon8, color, (b, 7));
};
var jugadores = [new Jugador(0), new Jugador(1)];
var partidaEnCurso = TRUE;
var lastMove;

while (partidaEnCurso) {
    turno++;
    // Leemos la entrada con la forma ("NombreDeLaPieza", nuevaPosiciónX, nuevaPosicionY)
    lastMove = document.getElementById('textbox_id').value.split(" ");
    if (move.size() != 3) {
        print("No maaaaaacho, que aqui leemos la entrada con la forma (\"NombreDeLaPieza\", nuevaPosiciónX, nuevaPosicionY)");
        continue;
    }
    if (checkMove(move(0), (move(1), move(2))) == FALSE) {
        print("Haleee, tiiiiira, o aqui no sabemos cómo se mueve un %s, o no se mueve asín", move(0));
        continue;
    }

    if (checkPartidaAcabada()) {
        print("Lo petaste mushasho, que tiemble el Kaspiriña ese del Ajedrez");
        break;
    }

    print("Todo bien, gran turno, estás ya a puntito de que el chaval se rinda. Pero ahora déjale jugar su turno. A ver qué puede hacer, que se piense que aun tiene alguna oportunidad.")


    //cambio de turno
    if (turnoJugador == 0) turnoJugador = 1 else turnoJugador = 0;
}