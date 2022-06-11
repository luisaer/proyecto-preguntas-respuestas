import { Pregunta } from "/clases/clase-pregunta.js";
import { DATOS } from "/datos/lista-datos.js";

const PREGUNTAS = DATOS.map(pregunta => new Pregunta(pregunta.enunciado, pregunta.opciones, pregunta.respuesta));

export { PREGUNTAS };

