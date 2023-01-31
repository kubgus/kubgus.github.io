const HOME = document.getElementById("b1");
const RANDOM = document.getElementById("b2");
const UP = document.getElementById("b3");

UP.addEventListener("click", (e) => {
    const sb = 50; // Scroll Bump
    window.scrollTo(0, sb);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 200);
});