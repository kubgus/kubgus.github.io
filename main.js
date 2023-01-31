const HOME = document.getElementById("b1");
const RANDOM = document.getElementById("b2");
const UP = document.getElementById("b3");

UP.addEventListener("click", (e) => {
    window.scrollTo(0, -1);
});