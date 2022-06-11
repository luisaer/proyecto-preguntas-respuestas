const botonIniciar = document.getElementById("iniciar-juego");
//const tarjetaJuego = document.querySelector(".contenedor-juego");

botonIniciar.addEventListener("click", () => {
  document.querySelector(".contenedor-juego").classList.add("visible");
  botonIniciar.classList.add("oculto");
});
