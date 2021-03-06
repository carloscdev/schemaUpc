// Importar Preguntas
import { preguntas } from "./preguntas.js";
var answerClass = "answer";
var logOutput = false;
(function () {
  // Captura las respuestas de manera dinámica
  var answers = Array.from(document.getElementsByClassName(answerClass)).map(
    function (e) {
      return e.textContent;
    }
  );

  var questions = preguntas;

  // Debe ser igual Cantidad de Respuestas y Preguntas
  // Las Preguntas y Respuestas deben ser en el mismo orden
  if (questions.length && answers.length) {
    var data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [],
    };

    var buildItem = (q, a) => {
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
  } else {
    console.log("No coincide las preguntas y respuestas");
  }
})(document);
