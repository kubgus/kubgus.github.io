const HOME = document.getElementById("b1");
const RANDOM = document.getElementById("b2");
const UP = document.getElementById("b3");

UP.addEventListener("click", (e) => {
    window.scrollTo(0, -1);
});

if (window.screen.width < 500) {
    document.getElementsByTagName("h2")[0].addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}