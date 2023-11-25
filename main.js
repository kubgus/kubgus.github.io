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
    createGridCard("https://github.com/kubgus/bloodline", "", "", "", "", "wysiwyg"),
]);
addGridSection("Template Projects:", [
    createGridCard("https://github.com/kubgus/nuxt-tailwind-template", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/discord-js-14-template", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/express-sio-ts-template", "", "", "", "", "code"),
]);
addGridSection("Learning Projects:", [
    createGridCard("https://github.com/kubgus/cpp-cheatsheet", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/learning-htmx", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/learning-nuxt", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/learning-glsl", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/algorithms-in-python", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/snippets-in-node", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/flutter-one", "", "", "", "", "code"),
]);
addGridSection("Fun Projects:", [
    createGridCard("https://github.com/kubgus/bloodline", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/kudo", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/online-game", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/filefly", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/super-tic-tac-toe", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/tick-oat-two", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/magnet-io", "", "", "", "", "code"),
    createGridCard("https://mavelan.itch.io/copycat", "copycat", "A game I made with a friend for a game jam.", "", "", "game"),
    createGridCard("https://github.com/kubgus/discord-tts-bot", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/flashcards", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/planet-generator", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/speed-read", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/tmod-one", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/quicklang", "", "", "", "", "code"),
    createGridCard("https://github.com/kubgus/syntax-jazyk", "", "", "", "", "code"),
]);
addTitle("Other Interests:");
addArticle(`🔥 Self Improvement
🌲 Bushcraft
`)
addGridSection("Programming languages:", [
    createGridCard("https://en.wikipedia.org/wiki/C%2B%2B", "C++", "I currently use C++ for all my non-web projects. I like its versatility, lightweight and flexibility. I know most advanced topics in C++.", "media/thumbnails/cpp.jpg"),
    createGridCard("https://docs.microsoft.com/en-us/dotnet/csharp/", "C#", "I basically know all the ins and outs of this language. I really fell in love with C# for its and ease of use.", "media/thumbnails/cs.jpg"),
    createGridCard("https://www.javascript.com/", "Javascript", "I wouldn't hesitate to call myself very advanced when it comes to Javascript. I have profound knowledge of everything this language has to offer.", "media/thumbnails/javascript.jpg"),
    createGridCard("https://www.typescriptlang.org/", "Typescript", "Typescript belongs to my more recent languages. However, its similarity to JS makes it seamless for me.", "media/thumbnails/typescript.jpg"),
    createGridCard("empty", "HTML & CSS", "These technically aren't programming languages, but I included them because I think they are worth mentioning. I have a lot of experience in both of them.", "media/thumbnails/html.jpg"),
    createGridCard("https://www.python.org/", "Python", "Python was the first programming language I've ever learned. I am still familiar with it, but I sometimes need to go over syntax after a long time.", "media/thumbnails/python.jpg"),
]);
addGridSection("Technologies:", [
    createGridCard("https://www.nuxtjs.org/", "Nuxt.js", " "),
    createGridCard("https://nodejs.org/en/", "Node.js", " "),
    createGridCard("https://htmx.org/", "HTMX", " "),
    createGridCard("https://bun.sh/", "Bun", " "),
    createGridCard("https://tailwindcss.com/", "Tailwind CSS", " "),
    createGridCard("https://fonts.google.com/", "Google Fonts", " "),
    createGridCard("https://socket.io/", "Socket.io", " "),
    createGridCard("https://expressjs.com/", "Express.js", " "),
    createGridCard("https://supabase.io/", "Supabase", " "),
    createGridCard("https://mongodb.com/", "MongoDB", " "),
    createGridCard("https://aws.amazon.com/", "AWS", " "),
]);
addGridSection("Other weird places you can find me:", [
    createGridCard("https://laiq.itch.io/", "Itch.io", "LaIQ", "media/thumbnails/itch.jpg"),
    createGridCard("https://scratch.mit.edu/users/LaIQ79/", "Scratch", "LaIQ79", "media/thumbnails/scratch.jpg"),
    createGridCard("https://patreon.com/user?u=96061849&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link", "Patreon 👀", "Jakub Gustafik", "media/thumbnails/patreon.jpg"),
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