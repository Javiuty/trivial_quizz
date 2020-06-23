//Hacemos fetch a la API de Trivial
fetch(
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showData(data);
  });

//Función donde guardamos los datos obtenidos del fetch
function showData(data) {
  let container = document.getElementById("geografia__contenedor-main");
  let phase = 0;
  container.innerHTML = data.results[phase].question;
  console.log(data);
  let respuesta1 = document.getElementById("respuesta-1");
  let respuesta2 = document.getElementById("respuesta-2");
  let respuesta3 = document.getElementById("respuesta-3");
  let respuesta4 = document.getElementById("respuesta-4");
  respuesta1.innerHTML = data.results[phase].incorrect_answers[0];
  respuesta2.innerHTML = data.results[phase].correct_answer;
  respuesta3.innerHTML = data.results[phase].incorrect_answers[1];
  respuesta4.innerHTML = data.results[phase].incorrect_answers[2];
}
