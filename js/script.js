
/*const imagesArray = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg"
];*/
let currentIndex = 0;
const listaImmagini = document.getElementsByClassName("item");
const next = document.querySelector(".next");
next.addEventListener("click", function () {
  listaImmagini[currentIndex].classList.remove("active");
  currentIndex += 1;
  if (currentIndex > 4) {currentIndex = 0}
  listaImmagini[currentIndex].classList.add("active");
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
    listaImmagini[currentIndex].classList.remove("active");
    currentIndex -= 1;
    if (currentIndex < 0) {currentIndex = 4}
    listaImmagini[currentIndex].classList.add("active");
  })


