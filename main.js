// ELEMENTS
const NAV = document.getElementsByTagName("nav")[0];
const UP = document.getElementById("b1");
const WELCOME = document.getElementById("qlinks");

const STARS_EL = document.getElementsByClassName("stars")[0];
const TWINK_EL = document.getElementsByClassName("twinkling")[0];
const CLOUD_EL = document.getElementsByClassName("clouds")[0];

const TOOLTIP = document.getElementById("tooltip");

const ACHEIVEMENTS = document.getElementById("acheivementsys");

// CONSTANT VALUES
const SCROLL_FADE = getPosition(WELCOME).top + WELCOME.offsetHeight - 20;

// ACHIEVEMENT JSON IMPORT
// import acheivements from './acheivements.json' assert { type: 'json' };
const acheivements = await fetch('./acheivements.json').then(res => res.json()).then(data => { return data; });

// ACHEIVEMENT JSON PARSE
let acheivementsParsed = [];
acheivements.forEach((type) => {
    type.stages.forEach((stage) => {
        const _acheivement = {
            name: type.name + " " + stage.ext,
            description: stage.description,
            icon: type.icon,
            rarity: stage.rarity,
            locked: stage.locked ? stage.locked : false
        }
        acheivementsParsed.push(_acheivement);
    });
});

// SORT ACHEIVEMENTS BY RARITY
const acheivementsSorted = acheivementsParsed.sort((a, b) => {
    if (a.rarity > b.rarity && !a.locked || b.locked) {
        return -1;
    }
});

// RARITY COLOR TABLE
const colorTable = {
    0: "rgb(79, 79, 79)",
    1: "rgb(70, 114, 81)",
    2: "rgb(69, 96, 184)",
    3: "rgb(132, 57, 156)",
    4: "rgb(173, 132, 36)",
};

// ACHEIVEMENT HTML CREATE
acheivementsSorted.forEach((a) => {
    const template = document.getElementById("acheivement_template");
    const ael = template.content.cloneNode(true).children[0];

    if (a.locked) ael.classList.add("faded");
    ael.style.backgroundColor = colorTable[a.rarity];

    ael.getElementsByTagName("img")[0].src = a.icon;
    ael.getElementsByTagName("img")[0].alt = a.icon.split("/").slice(-1); //format alt string
    ael.getElementsByClassName("tip")[0].innerText = a.locked ? `🔒 ${a.name}` : a.name;
    ael.getElementsByClassName("tip")[1].innerText = a.description;

    ACHEIVEMENTS.appendChild(ael);
});

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

// FADE OUT BACKGROUND WITH SCROLL
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

// ACHEIVEMENT TOOLTIP BACKEND
document.querySelectorAll(".acheivement").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
        TOOLTIP.children[0].innerText = el.getElementsByClassName("tip")[0].innerHTML; // h2
        TOOLTIP.children[1].innerText = el.getElementsByClassName("tip")[1].innerHTML; // p

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

// GET EL POS
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