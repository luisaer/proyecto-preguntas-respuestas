class Pregunta {
    /**
     *
     * @param {string} enunciado Texto de la pregunta
     * @param {string[]} opciones Array con opciones
     * @param {string} respuesta Respuesta a la pregunta
     */

    constructor(enunciado, opciones, respuesta) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     *
     * @param {string} eleccion respuesta dada por el usuario
     * @returns {boolean} devuelve true si la respuesta es correcta
     */

    respuestaCorrecta(eleccion) {
        return eleccion === this.respuesta;
    }
}

export { Pregunta };
