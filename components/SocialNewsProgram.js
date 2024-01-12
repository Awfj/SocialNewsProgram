import Link from "./Link.js";

export default class SocialNewsProgram {
    #links = [];
    nextId = 0;

    addLink() {
        let addLinkDefault = () => {
            let title = prompt("Enter the url title:", "");
            let url = prompt("Enter the url:", "");
            let author = prompt("Enter the url author:", "");

            url = this.#formatUrl(url);

            let newLink = new Link(this.nextId, title, url, author);
            this.nextId++;
            this.#links.push(newLink);
        }

        let addLinkParameterized = (title, url, author) => {
            url = this.#formatUrl(url);
            let newLink = new Link(this.nextId, title, url, author);
            this.nextId++;
            this.#links.push(newLink);
        }

        switch(arguments.length) {
            case 3: {
                addLinkParameterized(arguments[0], arguments[1], arguments[2]);
                break;
            }
            default: {
                addLinkDefault();
            }
        }
    };

    removeLink(e, title) {
        let index = -1;
        for (let i = 0; i < this.#links.length; i++) {
            if (this.#links[i].title === title) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            return;
        }

        this.#links.splice(index, 1);
        this.showLinks();
    }

    getLinks() {
        return this.#links;
    }

    showLinks() {
        let linksSection = document.querySelector("#links");
        let linksNumber = linksSection.children.length - 1;

        if (linksNumber > 0) {
            for (let i = 0; i < linksNumber; i++) {
                linksSection.removeChild(linksSection.lastElementChild);
            }
        }

        this.#links.forEach(link => this.addLinkElement(link));
    };

    addLinkElement(link) {
        let linksSection = document.querySelector("#links");

        let articleElement = document.createElement("article");
        let titleElement = document.createElement("a");
        let urlElement = document.createElement("p");
        let authorElement = document.createElement("p");
        let deleteButton = document.createElement("button");

        titleElement.innerText = link.title;
        titleElement.href = link.url;
        urlElement.innerText = link.url;
        authorElement.innerText = link.author;

        deleteButton.addEventListener("click", (e) => this.removeLink(e, link.title));
        deleteButton.innerText = "Remove";

        articleElement.appendChild(titleElement);
        articleElement.appendChild(urlElement);
        articleElement.appendChild(authorElement);
        articleElement.appendChild(deleteButton);

        linksSection.appendChild(articleElement);
    }

    toggleLinkForm() {
        let linkForm = document.querySelector("#linkForm");
        let isDisplayed = linkForm.style.display === "block";
        linkForm.style.display = isDisplayed ? "none" : "block";
    }

    submitForm(e) {
        e.preventDefault();

        let linkForm = document.querySelector("#linkForm");
        let inputFields = linkForm.querySelectorAll("input[type='text']");
        let [title, url, author] = inputFields;

        this.addLink(title.value, url.value, author.value);
        this.addLinkElement(this.getLinks().at(-1));

        for (let field of inputFields) {
            field.value = "";
        }
    }

    #formatUrl(url) {
        if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
            url = "https://" + url;
        }
        return url;
    }
}