//Captura la etiqueta que contiene el nombre de la Carrera
const carrera = document.getElementById("nombreCarrera");
const carreraNombre = carrera.innerHTML;
// Establece las preguntas de manera manual

export const preguntas = [
  `¿Es una prueba de ${carreraNombre}?`,
  `¿Es una segunda prueba de${carreraNombre}?`,
];
