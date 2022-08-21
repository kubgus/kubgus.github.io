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

    if (url)
        copy.children[0].children[0].href = url;

    if (title)
        copy.children[0].children[0].children[1].children[0].children[0].innerText = title;

    if (description)
        copy.children[0].children[0].children[1].children[0].children[1].innerText = description;

    if (icon)
        copy.children[0].children[0].children[1].children[1].innerText = icon;

    if (image) {

        copy.children[0].children[0].children[0].src = image;

        if (alt)
            copy.children[0].children[0].children[0].alt = alt;

    } else {

        copy.children[0].children[0].children[0].remove();

    }


    return copy;
}

// Add content to website
addArticle(`I publish decent websites on the internet. I like programming, browsing Reddit, listening to music, playing video games, and sometimes other things. I want to own a tech-related company one day.`);
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
addGridSection("My Side Projects:", [
    createGridCard("https://github.com/kubgus/Learning-CPP", "Learning C++", "My journey learning C++.", "", "", "code"),
    createGridCard("https://github.com/kubgus/KudoEngine", "KudoEngine", "A low-level 2D C# game engine.", "", "", "code"),
    createGridCard("https://github.com/kubgus/IPComs", "IPComs", "Communicate between two local IP adresses.", "", "", "code"),
    createGridCard("https://github.com/kubgus/Pygorithms", "Pygorithms", "A collection of algorithms in Python.", "", "", "code"),
    createGridCard("https://github.com/kubgus/Node-Projects", "Node Projects", "Some random Node.js stuff I made in like 2 seconds.", "", "", "code"),
    createGridCard("https://github.com/kubgus/FirstTMod", "FirstTMod", "My very first (very serious) Terraria mod.", "", "", "code"),
    createGridCard("https://github.com/kubgus/Planet-Generator", "Planet Generator", "A website that generates random planets. It's really inefficient but it works.", "", "", "code"),
    createGridCard("https://github.com/kubgus/Speed-Read", "Speed Read", "A website for speed reading. I am actually quite proud of this one.", "", "", "code"),
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
    createGridCard("https://scratch.mit.edu/users/LaIQ79/", "Scratch", "LaIQ79", "media/thumbnails/scratch.jpg"),
]);


// Make links clickable
// const links = document.getElementsByClassName("clickable-card");
// for (var i = 0; i < links.length; i++) {

//     links[i].addEventListener("click", (event) => {

//         const element = event.target.closest(".clickable-card");

//         const url = element.id;

//         window.open(url, '_blank').focus();

//     });

// }
