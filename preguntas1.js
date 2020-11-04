//Captura la etiqueta que contiene el nombre de la Carrera
const carrera = document.getElementById("nombreCarrera");
const carreraNombre = carrera.innerHTML;
// Establece las preguntas de manera manual

export const preguntas = [
  `¿Qué cursos lleva ${carreraNombre}? prueba`,
  `¿Donde estudiar ${carreraNombre}?`,
  `¿Cuánto dura la carrera de ${carreraNombre}?`,
  `¿Cómo es la carrera de ${carreraNombre}?`,
  `¿Cuál es el perfil de profesional de ${carreraNombre}?`,
];
