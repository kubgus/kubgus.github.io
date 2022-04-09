// Content functions
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

function createGridCard(url, title, description, image, alt) {
    const template = document.getElementById("card-template");
    const copy = template.content.cloneNode(true);

    if (url)
        copy.children[0].id = url;

    if (title)
        copy.children[0].children[1].children[0].innerText = title;

    if (description)
        copy.children[0].children[1].children[1].innerText = description;

    if (image) {

        copy.children[0].children[0].src = image;

        if (alt)
            copy.children[0].children[0].alt = alt;
    } else {

        copy.children[0].children[0].remove();

    }

    return copy;
}

// Add content to website
addArticle(`I publish decent websites on the internet. I like programming, browsing Reddit, listening to music, playing videogames, and not much else. I want to get a coding job one day. I also have some strong opinions and weak relationships. I'm doing fine...`);
addGridSection("Links:", [
    createGridCard("https://github.com/kubgus", "GitHub", "kubgus", "media/thumbnails/github.jpg"),
    createGridCard("https://discord.com/users/643898809193332786/", "Discord", "Kubo#2383", "media/thumbnails/discord.jpg"),
    createGridCard("https://www.reddit.com/user/LennyMemes_1", "Reddit", "LennyMemes_1", "media/thumbnails/reddit.jpg"),
    createGridCard("https://steamcommunity.com/id/laiq79/", "Steam", "LaIQ79", "media/thumbnails/steam.jpg"),
]);
addArticle(
    `I hope the first paragraph didn't sound too depressing. Most of it was jokes about how programmers are these lonely fat neckbeards that see 3 minutes of sunlight a day. I actually like to spend time with people. I have a decent amount of friends.

It's actually quite fun to write this. You don't usually write this amount of text in any profile description or generally anywhere. After finally finishing the bare minimum for this website to work, it's really relaxing.

Now, I want to show off some of my projects. Most of the "bigger" projects are unfinished or I have stopped working on them. It's just really hard when you have a really big thing to manage.`);
addGridSection("My bigger projects:", [
    createGridCard("empty.html", "KillbY", "An online shooter game where you can build your guns. This is more of a concept than a project, but it is being worked on."),
    createGridCard("empty.html", "Remify", "An online to-do app that improves learning and doing homework with your classmates."),
    createGridCard("empty.html", "Monez", "An innovative Discord economy bot. Discontinued because of a new Discord.js version."),
]);
addArticle("Since I don't publish source code for the big projects, here are some smaller things to try out!");
addGridSection("My smaller projects:", [
    createGridCard("https://github.com/kubgus/QuickLang", "QuickLang", "An easy-to-learn language similar to BrainFuck, but it's made in JavaScript."),
    createGridCard("https://github.com/kubgus/Speed-Read", "Speed Read", "A website for speed reading. I am actually quite proud of this one."),
    createGridCard("https://github.com/kubgus/Node-Projects", "Node Projects", "Some random Node.js stuff I made in like 2 seconds."),
    createGridCard("https://github.com/kubgus/Planet-Generator", "Planet Generator", "A website that generates random planets. It's really inefficient but it works."),
    createGridCard("https://github.com/kubgus/Simple-Meme-Creator", "Simple Meme Creator", "This is not a very serious project. But it exists."),
    createGridCard("https://github.com/kubgus/kubgus.github.io", "kubgus.github.io", "This is where you are right now."),
]);


// Make links clickable
const links = document.getElementsByClassName("clickable-card");
for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", (event) => {

        const element = event.target.tagName == "DIV" || event.target.tagName == "IMG" ? event.target : event.target.parentElement;

        const url = element.parentElement.id;

        window.open(url, '_blank').focus();

    });

}