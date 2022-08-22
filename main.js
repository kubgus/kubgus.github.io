async function getGitInfo(url) {
    var a = [];
    await $.ajax({
        url: "https://textance.herokuapp.com/title/" + url.substr(8),
        complete: function (data) {
            var title = data.responseText;
            a.push(title.substr(title.indexOf('/') + 1, title.indexOf(":") - title.indexOf("/") - 1).replaceAll("-", " "));
            a.push(title.substr(title.indexOf(":") + 2));
            a.push(title);
        }
    });
    return a;
}

function updateWithGit(url, titleP, descriptionP) {
    if (url.startsWith("https://github.com/kubgus/"))
        getGitInfo(url).then((info) => {
            titleP.innerText = info[0];
            descriptionP.innerText = info[1];
        })
}

// Content functions
function addTitle(content) {
    const template = document.getElementById("title-template");
    const copy = template.content.cloneNode(true);

    if (content)
        copy.children[0].innerText = content;

    document.body.appendChild(copy);
}

function addArticle(content) {
    const template = document.getElementById("article-template");
    const copy = template.content.cloneNode(true);

    if (content)
        copy.children[0].children[0].innerText = content;

    document.body.appendChild(copy);
}

function addGridSection(title, cards) {
    const template = document.getElementById("grid-template");
    const copy = template.content.cloneNode(true);

    if (title)
        copy.children[0].children[0].innerText = title;

    if (cards)
        cards.forEach((card) => {

            copy.children[0].children[1].appendChild(card);

        });

    document.body.appendChild(copy);
}

function createGridCard(url, title, description, image, alt, icon) {
    const template = document.getElementById("card-template");
    const copy = template.content.cloneNode(true);

    const titleP = copy.children[0].children[0].children[1].children[0].children[0];
    const descriptionP = copy.children[0].children[0].children[1].children[0].children[1];
    const iconP = copy.children[0].children[0].children[1].children[1];
    const imgP = copy.children[0].children[0].children[0];

    if (title)
        titleP.innerText = title;

    if (description)
        descriptionP.innerText = description;

    if (icon)
        iconP.innerText = icon;

    if (image) {

        imgP.src = image;

        if (alt)
            imgP = alt;

    } else {

        imgP.remove();

    }

    if (url) {
        copy.children[0].children[0].href = url;
        updateWithGit(url, titleP, descriptionP)
    }

    return copy;
}

// Add content to website
addArticle(`I publish decent stuff on the internet. I like programming, browsing Reddit, listening to music, playing video games, and sometimes other things. I usually create websites, services and software, but I don't hesitate to experiment. I want to start a tech-related company one day.`);
addGridSection("Links:", [
    createGridCard("https://github.com/kubgus", "GitHub", "kubgus", "media/thumbnails/github.jpg"),
    createGridCard("https://discord.com/users/643898809193332786/", "Discord", "Kubo#2383", "media/thumbnails/discord.jpg"),
    createGridCard("https://www.reddit.com/user/LennyMemes_1", "Reddit", "LennyMemes_1", "media/thumbnails/reddit.jpg"),
    createGridCard("https://steamcommunity.com/id/laiq79/", "Steam", "LaIQ79", "media/thumbnails/steam.jpg"),
]);
addGridSection("Active Projects:", [
    createGridCard("empty", "StepEngine", "A 3D low-level C# game engine with great focus on consistency and ease of use.", "", "", "sports_esports"),
    createGridCard("http://instant.gustafik.com/", "Instant", "A public chat board that is all about safety and freedom of speech.", "", "", "chat_bubble"),
]);
addGridSection("Side Projects:", [
    createGridCard("https://github.com/kubgus/Learning-CPP", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/KudoEngine", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/IPComs", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Pygorithms", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Node-Projects", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/FirstTMod", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Planet-Generator", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Speed-Read", "", "", "", "", "code"),
]);
addGridSection("Languages I have mastered:", [
    createGridCard("https://docs.microsoft.com/en-us/dotnet/csharp/", "C#", "My current favorite language. A jack of all trades. I mostly use it to make apps and games.", "media/thumbnails/cs.jpg"),
    createGridCard("https://www.python.org/", "Python", "Python was my first real programming language. I usually use it for side projects.", "media/thumbnails/python.jpg"),
    createGridCard("https://www.javascript.com/", "Javascript", "A language very close to my heart. I used it for a long period of time in my programming career and still do from time to time.", "media/thumbnails/javascript.jpg"),
    createGridCard("empty", "HTML & CSS", "These aren't languages, but I included them anyways.", "media/thumbnails/html.jpg"),
]);
addGridSection("Languages I have yet to master:", [
    createGridCard("https://en.wikipedia.org/wiki/C%2B%2B", "C++", "I have basics in this language, but I'm still not a pro.", "media/thumbnails/cpp.jpg"),
]);
addGridSection("Other weird places you can find me:", [
    createGridCard("https://laiq.itch.io/", "Itch.io", "LaIQ", "media/thumbnails/itch.jpg"),
    createGridCard("https://scratch.mit.edu/users/LaIQ79/", "Scratch", "LaIQ79", "media/thumbnails/scratch.jpg"),
]);

// Remove loading blur
// document.getElementById("loading").removeAttribute("id", "loading");


// Make links clickable
// const links = document.getElementsByClassName("clickable-card");
// for (var i = 0; i < links.length; i++) {

//     links[i].addEventListener("click", (event) => {

//         const element = event.target.closest(".clickable-card");

//         const url = element.id;

//         window.open(url, '_blank').focus();

//     });

// }

// BG parallax effect
(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 + (_mouseX - _w) * 0.003}% ${50 + (_mouseY - _h) * 0.015}%`;
        let x = `${_depth1}`;
        // console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
