import SocialNewsProgram from "./components/SocialNewsProgram.js";

let program = new SocialNewsProgram();

program.addLink("Hacker News", "https://news.ycombinator.com", "Baptiste");
program.addLink("Reddit", "https://reddit.com", "Thomas");
program.addLink("Boing Boing", "boingboing.net", "Daniel");

let linksSection = document.querySelector("#links");
let linkForm = document.querySelector("#linkForm");
linkForm.addEventListener("submit", check);

let links = program.getLinks();

links.forEach(link => {
    addLinkElement(link.title, link.url, link.author);
});

function addLinkElement(title, url, author) {
    let articleElement = document.createElement("article");
    let titleElement = document.createElement("a");
    let urlElement = document.createElement("p");
    let authorElement = document.createElement("p");

    titleElement.innerText = title;
    titleElement.href = url;
    urlElement.innerText = url;
    authorElement.innerText = author;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(urlElement);
    articleElement.appendChild(authorElement);

    linksSection.appendChild(articleElement);
}

function check(e) {
    e.preventDefault();

    let inputFields = this.querySelectorAll("input[type='text']");
    let [title, url, author] = inputFields;

    addLinkElement(title.value, url.value, author.value);

    for (let field of inputFields) {
        field.value = "";
    }
}

//debugger;

/*let option;

do {
    option = program.showMenu();

    switch (option) {
        case "1":
            program.showLinks();
            break;
        case "2":
            program.addLink();
            break;
        case "3":
            program.removeLink();
            break;
    }

} while (option !== "0" && option !== null);*/

