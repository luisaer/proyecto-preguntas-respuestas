import { Pregunta } from "/clases/clase-pregunta.js";

class Trivia {
  preguntasIndice = 0;
  puntaje = 0;
  nivel = 1;

  /**
   *
   * @param {Pregunta[]} PREGUNTAS
   */
  constructor(PREGUNTAS) {
    this.PREGUNTAS = PREGUNTAS;
  }

  /**
   *
   * @returns {Pregunta} Devuelve la pregunta encontrada
   */
  obtenerIndicePregunta() {
    return this.PREGUNTAS[this.preguntasIndice];
  }

  finDelJuego() {
    return this.PREGUNTAS.length === this.preguntasIndice;
  }

  /**
   *
   * @param {string} respuesta
   */
  responderPregunta(respuesta) {
    console.log(respuesta);
    if (this.obtenerIndicePregunta().respuestaCorrecta(respuesta)) {
      this.puntaje = this.puntaje + 4;
    }
    this.preguntasIndice++;
  }
}

export { Trivia };
