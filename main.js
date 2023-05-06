// ELEMENTS
const NAV = document.getElementsByTagName("nav")[0];
const UP = document.getElementById("b1");
const WELCOME = document.getElementById("qlinks");

const STARS_EL = document.getElementsByClassName("stars")[0];
const TWINK_EL = document.getElementsByClassName("twinkling")[0];
const CLOUD_EL = document.getElementsByClassName("clouds")[0];
const FLICKER = document.getElementsByClassName("flicker")[0];

const TOOLTIP = document.getElementById("tooltip");

// CONSTANT VALUES
const SCROLL_FADE = getPosition(WELCOME).top + WELCOME.offsetHeight - 20;

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

// SCROLL UP BUTTON
UP.addEventListener("click", (e) => {
    window.scrollTo(0, -1);
});

// SCROLL BACK TO TOP BY CLICKING TITLE ON SMALL DEVICES
setInterval(() => {
    if (window.screen.width < 500) {
        NAV.addEventListener("click", enableScrollTitle);
    } else {
        NAV.removeEventListener("click", enableScrollTitle);
    }
}, 1000);
function enableScrollTitle() {
    window.scrollTo(0, 0);
}

// FADE OUT STAR BACKGROUND WITH SCROLL
window.addEventListener("scroll", fadeElementsOnScroll);
fadeElementsOnScroll();
function fadeElementsOnScroll() {
    const opacity = (SCROLL_FADE - scrollY) / SCROLL_FADE;
    STARS_EL.style.opacity = opacity + 0.1;
    TWINK_EL.style.opacity = opacity - 0.3;
    CLOUD_EL.style.opacity = opacity * 1.5;
}

// SHOW NAV WHEN SCROLLED DOWN
window.addEventListener("scroll", showNav);
showNav()
function showNav() {
    const scrollY = window.scrollY;
    if (scrollY >= SCROLL_FADE)
        NAV.classList.add("show");
    else
        NAV.classList.remove("show");
}

// TOOLTIP BACKEND
document.querySelectorAll(".tooltip-target").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
        TOOLTIP.children[0].innerText = el.querySelectorAll(".tooltip-title")[0].innerHTML; // h2
        TOOLTIP.children[1].innerText = el.querySelectorAll(".tooltip-description")[0].innerHTML; // p

        TOOLTIP.style.top = `${getPosition(el).top - el.clientHeight * 1.5}px`;
        const left = getPosition(el).left - TOOLTIP.clientWidth / 2 + el.clientWidth / 2;
        const leftOut = left < 0 ? 0 : left;
        TOOLTIP.style.left = `${leftOut}px`;
        TOOLTIP.style.opacity = 1;
    });

    el.addEventListener("mouseleave", (e) => {
        TOOLTIP.style.top = "0px";
        TOOLTIP.style.left = "0px";
        TOOLTIP.style.opacity = 0;
    });
});

// GET POSITION OF ELEMENT ON SCREEN
function getPosition(el) {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: y, left: x };
}