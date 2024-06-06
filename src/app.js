window.onload = () => {
  //write your code here
  //console.log("Hello Rigo from the console!");

  const elementoExcusa = document.getElementById("excusa");
  elementoExcusa.innerHTML = generarExcusa();
};

function generarExcusa() {
  let quien = [
    "El perro",
    "Mi hermanito querido",
    "El vecino",
    "Mi amigo",
    "El loro"
  ];
  let accion = ["vendio", "rompio", "regalo", "comio", "quemo"];
  let que = ["mi compu", "la heladera", "el vaso", "la pared", "la cerveza"];
  let cuando = [
    "antes de dormir",
    "demadrugada",
    "mientras pensaba",
    "en el gimnasio",
    "escuchando musica"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}`;
}
