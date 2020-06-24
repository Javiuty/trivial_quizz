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
  let totalScore = 0;
  let phase = 0;
  console.log(data);
  let container = document.getElementById("geografia__contenedor-main");
  
  container.innerHTML = data.results[phase].question;
  
  let respuesta1 = document.getElementById("respuesta-1");
  let respuesta2 = document.getElementById("respuesta-2");
  let respuesta3 = document.getElementById("respuesta-3");
  let respuesta4 = document.getElementById("respuesta-4");

  let puntos = document.querySelector(".score__puntos");

  refresh()

  function refresh() {
    container.innerHTML = data.results[phase].question;
    respuesta1.innerHTML = data.results[phase].incorrect_answers[0];
    respuesta2.innerHTML = data.results[phase].correct_answer;
    respuesta3.innerHTML = data.results[phase].incorrect_answers[1];
    respuesta4.innerHTML = data.results[phase].incorrect_answers[2];
    
    puntos.innerHTML = totalScore;

    phase;
    totalScore;

    console.log("Esto es el total Score",totalScore);
    console.log("Esto es la phase", phase);
  }

  

  respuesta1.addEventListener("click", function() {
      // Chequear que sea verdadera
      if (respuesta1.innerHTML === data.results[phase].correct_answer) {
          acertado()
      } else {
          errado()
      }

  })
  respuesta2.addEventListener("click", function() {
 

    // Chequear que sea verdadera
    if (respuesta2.innerHTML === data.results[phase].correct_answer) {
        acertado()
    } else {
      errado()
    }

})
respuesta3.addEventListener("click", function() {
    // Chequear que sea verdadera
    if (respuesta3.innerHTML === data.results[phase].correct_answer) {
        acertado()
    } else {
        errado()
    }

   
})
respuesta4.addEventListener("click", function() {
    // Chequear que sea verdadera
    if (respuesta4.innerHTML === data.results[phase].correct_answer) {
        acertado()
    } else {
         errado()
    }

})


    function acertado() {
        totalScore = totalScore + 10; 
        
        if (phase < 9) {
            phase++
            refresh();
        } else {
            finDelJuego()
        }

        

        
    }

    function errado() {
        if(phase < 9) {
            phase++
            refresh();
        } else {
            finDelJuego()
        }

    }

    function finDelJuego() {
        document.body.innerHTML = totalScore;
    }


  

}
