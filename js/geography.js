fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple")
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        let container = document.getElementById("geografia__contenedor-main")
        container.innerHTML = data.results[0].question
        
    });

