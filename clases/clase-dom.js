class EditarDOM {
  constructor() {}

  /**
   *
   * @param {string} textoPregunta Se muestra la pregunta en pantalla
   */
  mostrarPregunta(textoPregunta) {
    const enunciadoPregunta = document.getElementById("enunciadoPregunta");
    enunciadoPregunta.innerText = textoPregunta;
  }
  /**
   *
   * @param {string[]} opcionesRespuesta Muestra las opciones de respuesta
   */
  mostrarOpciones(opcionesRespuesta, callback) {
    const contenedorOpciones = document.getElementById("contenedor-opciones");

    contenedorOpciones.innerHTML = "";

    for (let i = 0; i < opcionesRespuesta.length; i++) {
      let opcionBoton = document.createElement("button");
      opcionBoton.innerText = opcionesRespuesta[i];
      opcionBoton.className = "opciones";
      opcionBoton.addEventListener("click", () =>
        callback(opcionesRespuesta[i])
      );

      contenedorOpciones.append(opcionBoton);
    }
  }

  mostrarProgresoNivel(indiceActual) {
    const contenedorNivel = document.getElementById("nivel-numero");
    contenedorNivel.innerHTML = `${indiceActual}`;
  }

  mostrarProgresoPuntos(puntaje) {
    const contenedorPuntos = document.getElementById("puntaje-numero");
    contenedorPuntos.innerHTML = `${puntaje}`;
  }

  /**
   *
   * @param {number} puntaje
   */
  mostrarPuntajeFinal(puntaje) {
    const tarjetaFinalJuego = document.querySelector(".contenedor-juego");

    const tarjetaFinalMensaje = `
        <div>
        <p class="mensaje-final">¡Terminaste todas las preguntas 🏆!

            <div class="contenedor-puntaje-final">
                <p class="mensaje-puntaje-final"> Tu puntaje final es:</p>
                <p class="texto-puntaje-final">${puntaje}</p>
            </div>

        </div>
        `;

    tarjetaFinalJuego.innerHTML = tarjetaFinalMensaje;
  }
}

export { EditarDOM };
