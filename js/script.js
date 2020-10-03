let viewAll = document.querySelector(".view-all");
let categoriesBody = document.querySelector(".categories__body");

let hide1 = document.querySelector(".hide1");
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");

viewAll.addEventListener("click", expand);

function expand(event) {
  if (event.target.textContent === "View All") {
    viewAll.textContent = "Reduce";
    categoriesBody.classList.remove("categories__body");
    categoriesBody.classList.add("ampliar");
    hide1.classList.remove("hide1");
    hide2.classList.remove("hide2");
    hide3.classList.remove("hide3");
  } else {
    viewAll.textContent = "View All";
    categoriesBody.classList.remove("ampliar");
    categoriesBody.classList.add("categories__body");
    hide1.classList.add("hide1");
    hide2.classList.add("hide2");
    hide3.classList.add("hide3");
  }
}

categoriesBody.addEventListener("click", initGame);

console.log(document.body.childNodes[1].childNodes[1]);

function initGame(event) {}
