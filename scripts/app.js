import { PREGUNTAS } from "/datos/preguntas.js";
import { Trivia } from "/clases/clase-trivia.js";
import { EditarDOM } from "/clases/clase-dom.js";

/**
 *
 * @param {Trivia} trivia Objeto Trivia
 * @param {EditarDOM} editarDom  Objeto EditarDOM
 */
const cargarPagina = (trivia, editarDom) => {
  if (trivia.finDelJuego()) {
    console.log(trivia.puntaje);
    editarDom.mostrarPuntajeFinal(trivia.puntaje);
  } else {
    editarDom.mostrarPregunta(trivia.obtenerIndicePregunta().enunciado);

    editarDom.mostrarOpciones(
      trivia.obtenerIndicePregunta().opciones,
      (eleccionActual) => {
        trivia.responderPregunta(eleccionActual);
        cargarPagina(trivia, editarDom);
      }
    );
  }

  editarDom.mostrarProgresoNivel(trivia.preguntasIndice + 1);
  editarDom.mostrarProgresoPuntos(trivia.puntaje);
};

function main() {
  const trivia = new Trivia(PREGUNTAS);

  const editarDom = new EditarDOM();

  cargarPagina(trivia, editarDom);
}

main();
