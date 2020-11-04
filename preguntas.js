//Captura la etiqueta que contiene el nombre de la Carrera
const carrera = document.getElementById("nombreCarrera");
const carreraNombre = carrera.innerHTML;
// Establece las preguntas de manera manual
// Validar URL
var URLdomain = window.location.pathname;
// var URLdomain = window.location.host;
if (URLdomain == "/schemaUpc/page2.html") {
  var subPreguntas = [
    `¿Es una prueba de ${carreraNombre}?`,
    `¿Es una segunda prueba de${carreraNombre}?`,
  ];
} else {
  var subPreguntas = [
    `¿Qué cursos lleva ${carreraNombre}? prueba`,
    `¿Donde estudiar ${carreraNombre}?`,
    `¿Cuánto dura la carrera de ${carreraNombre}?`,
    `¿Cómo es la carrera de ${carreraNombre}?`,
    `¿Cuál es el perfil de profesional de ${carreraNombre}?`,
  ];
}
export const preguntas = subPreguntas;
