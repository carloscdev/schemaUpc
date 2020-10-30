var answerClass = "answer";
var logOutput = false;
//Captura la etiqueta que contiene el nombre de la Carrera
var carrera = document.getElementById("nombreCarrera");
var carreraNombre = carrera.innerHTML;

(function () {
  // Captura las respuestas de manera dinámica
  var answers = Array.from(document.getElementsByClassName(answerClass)).map(
    function (e) {
      return e.textContent;
    }
  );
  // Establece las preguntas de manera manual
  var questions = [
    `¿Qué cursos lleva ${carreraNombre}?`,
    `¿Donde estudiar ${carreraNombre}?`,
    `¿Cuánto dura la carrera de ${carreraNombre}?`,
    `¿Cómo es la carrera de ${carreraNombre}?`,
    `¿Cuál es el perfil de profesional de ${carreraNombre}?`,
  ];

  // Debe ser igual Cantidad de Respuestas y Preguntas
  // Las Preguntas y Respuestas deben ser en el mismo orden
  if (questions.length && answers.length) {
    var data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [],
    };

    buildItem = (q, a) => {
      var item = {
        "@type": "Question",
        name: null,
        acceptedAnswer: {
          "@type": "Answer",
          text: null,
        },
      };
      item["name"] = q;
      item["acceptedAnswer"]["text"] = a;
      return item;
    };
    console.assert(questions.length == answers.length, {
      questions: questions.length,
      answers: answers.length,
      errorMsg: "Questions and Answers are not the same lengths",
    });

    data["mainEntity"] = questions.map(function (q, i) {
      return buildItem(q, answers[i]);
    });

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.getElementsByTagName("head")[0].appendChild(script);

    if (logOutput) {
      console.log(script.outerHTML);
    }
  }
})(document);
