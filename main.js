// Remove error if JS is enabled
document.getElementById("enable-javascript").style.display = "none";


// WEBSITE CONTENT
addArticle(`
⌨️ Programmer
🎓 Student
👨‍💼 Entrepeneur

"I publish decent stuff on the internet."`);
addGridSection("Links:", [
    createGridCard("https://github.com/kubgus", "GitHub", "kubgus", "media/thumbnails/github.jpg"),
    createGridCard("https://www.linkedin.com/in/kubgus/", "LinkedIn", "Jakub Guštafik", "media/thumbnails/linkedin.jpg"),
    createGridCard("mailto:business@gustafik.com", "E-mail", "business@gustafik.com", "media/thumbnails/gmail.jpg"),
    createGridCard("https://discord.com/users/643898809193332786/", "Discord", "kubgus", "media/thumbnails/discord.jpg"),
]);
addTitle("About Me:");
addArticle2("My name is Jakub, but you can call me Kubo. I am a student from Slovakia. My big passion is programming. ⌨️ I mostly do web and software development in languages like Javascript, Typescript, C#, and C++. I'm open for business and always looking for new opportunities. You can contact me on LinkedIn or via <a href=\"mailto:business@gustafik.com\" style=\"color:white\">e-mail</a>. I try to improve myself. Money is not my priority, but I always look for clever ways to gain money through business or work. I'm currently registered in a few freelance agencies, but I mostly work on my own projects you can find below. 👇");
addGridSection("Active Projects:", [
    createGridCard("https://heystak.netlify.app/hey", "Heystack!", "An upcoming social media platform for sharing your thoughts and ideas on any topic you can think of.", "", "", "public"),
    createGridCard("https://github.com/kubgus/Bloodline", "", "", "", "", "wysiwyg"),
    createGridCard("https://chrome.google.com/webstore/detail/faux/kffcggckolacihcclnifefneifapjcdl", "Faux", "A free to use browser extension where users can create temporary accounts.", "", "", "person"),
    createGridCard("https://1n574n7.online/", "Instant", "A public chat board that is all about safety and freedom of speech.", "", "", "chat_bubble"),
]);
addGridSection("Other Projects:", [
    createGridCard("https://github.com/kubgus/filefly", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/super-tic-tac-toe", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/magnet-io", "", "", "", "", "code"),
    createGridCard("https://mavelan.itch.io/copycat", "Copycat", "A short puzzle platformer game with a twist.", "", "", "videogame_asset"),
    createGridCard("https://github.com/kubgus/Learning-CPP", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Node-Projects", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Pygorithms", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/KudoEngine", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Discord-Text-to-Speech-Bot", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Planet-Generator", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/Speed-Read", "", "", "", "", "code"),
]);
addGridSection("Template Projects:", [
    createGridCard("https://github.com/kubgus/nuxt-tailwind-template", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/discord-js-14-template", "", "", "", "", "code"),
]);
addTitle("Other Interests:");
addArticle(`🔥 Self Improvement
🌲 Bushcraft
`)
addGridSection("Programming languages:", [
    createGridCard("https://en.wikipedia.org/wiki/C%2B%2B", "C++", "This is my most recent language. There's still a lot of things I have to learn, but I would say I know most of what C++ has to offer.", "media/thumbnails/cpp.jpg"),
    createGridCard("https://docs.microsoft.com/en-us/dotnet/csharp/", "C#", "I basically know all the ins and outs of this language. I really fell in love with C# for its versatility and ease of use.", "media/thumbnails/cs.jpg"),
    createGridCard("https://www.javascript.com/", "Javascript", "I use Javascript for anything web related. Landing pages, web-apps, servers, and more...", "media/thumbnails/javascript.jpg"),
    createGridCard("empty", "HTML & CSS", "These technically aren't programming languages, but I included them because I think they are worth mentioning. I have a lot of experience in both of them.", "media/thumbnails/html.jpg"),
    createGridCard("https://www.python.org/", "Python", "Python was the first programming language I've ever learned and I use it to this day, usually for side projects.", "media/thumbnails/python.jpg"),
]);
addGridSection("Technologies I use:", [
    createGridCard("https://www.nuxtjs.org/", "Nuxt.js", "I use Nuxt.js for Vue.js projects. Currently, I am using it to build Heystack!"),
    createGridCard("https://nodejs.org/en/", "Node.js", "Node is my go-to for backend development. I use it for most of my projects. I use it on my website Instant."),
    createGridCard("https://supabase.io/", "Supabase", "I use Supabase for my projects that require a scalable database. I use it for Heystack!"),
    createGridCard("https://mongodb.com/", "MongoDB", "I use MongoDB when I need a simple database for my projects. I use it for Discord bots."),
    createGridCard("https://aws.amazon.com/", "AWS", "I used AWS for hosting and storing my older projects. I'm fairly familiar with it."),
    createGridCard("https://fonts.google.com/", "Google Fonts", "Google Fonts is my go-to for fonts and icons. I use it for all of my projects."),
]);
addGridSection("Other weird places you can find me:", [
    createGridCard("https://laiq.itch.io/", "Itch.io", "LaIQ", "media/thumbnails/itch.jpg"),
    createGridCard("https://scratch.mit.edu/users/LaIQ79/", "Scratch", "LaIQ79", "media/thumbnails/scratch.jpg"),
]);

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

function addArticle2(content) {
    const template = document.getElementById("article-template");
    const copy = template.content.cloneNode(true);

    if (content)
        copy.children[0].children[0].innerHTML = content;

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


// GIT API
async function getGitInfo(user, repo) {
    var a = [];
    try {
        await $.getJSON(`https://api.github.com/repos/${user}/${repo}`, function (data) {
            a.push(repo);
            a.push(data.description);
        });
    } catch (e) {
        a.push(`This card could not be loaded...`);
        a.push(`Try reloading the page.`);
    }
    return a;
}

function updateWithGit(url, titleP, descriptionP) {
    if (url.startsWith("https://github.com/kubgus/")) {
        user = url.split("/")[3];
        repo = url.split("/")[4];
        getGitInfo(user, repo).then((info) => {
            titleP.innerText = info[0];
            descriptionP.innerText = info[1];
        });
    }
}


// CARD ANIMATION
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('card-animation');
        }
        // else {
        //     entry.target.classList.remove('card-animation');
        // }
    });
});

const viewbox = document.querySelectorAll('.clickable-card');
viewbox.forEach(image => {
    observer.observe(image);
});


// BG PARALLAX EFFECT
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
    };
}

const elem = document.querySelector("#parallax");
let pch = getOffset(document.querySelector(".grid"));
console.log(pch);
document.querySelector("#parallax-container").style.height = `${pch.bottom}px`;
var auto = 0;
let x = ``;
let y = ``;

function moveBackground() {
    auto += 0.006;
    if (auto > 999999) {
        auto = 0
    }
    elem.style.backgroundPosition = `${auto + x}% ${y}%`;
    window.requestAnimationFrame(moveBackground);
}

moveBackground();


let prX = 0;
let prY = 0;
// Add event listener
document.addEventListener("mousemove", (e) => {
    // Magic happens here
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let accX = _mouseX - prX;
    let accY = _mouseY - prY;
    let accM = 0.05;

    prX = _mouseX;
    prY = _mouseY;

    x = 50 + (_mouseX - _w) * 0.001 /*+ accX * accM*/;
    y = 50 + (_mouseY - _h) * 0.01 /*+ accY * accM*/;
    // console.log(x);
});