import Link from "./Link.js";

export default class SocialNewsProgram {
    #links = [];

    addLink() {
        let addLinkDefault = () => {
            let title = prompt("Enter the url title:", "");
            let url = prompt("Enter the url url:", "");
            let author = prompt("Enter the url author:", "");

            let newLink = new Link(title, url, author);
            this.#links.push(newLink);
        }

        let addLinkWithParams = (title, url, author) => {
            let newLink = new Link(title, url, author);
            this.#links.push(newLink);
        }

        switch(arguments.length) {
            case 3: {
                addLinkWithParams(arguments[0], arguments[1], arguments[2]);
                break;
            }
            default: {
                addLinkDefault();
            }
        }
    };

    removeLink() {
        let input;

        input = prompt("Enter the number of the url to be removed:", "");

        /*let number;

        do {
            number = parseInt(prompt("Enter the number of the url to be removed:", ""));
        } while (isNaN(number) || number < 1 || number > this.#links.length);

        this.#links.splice(number - 1, 1);*/
    };

    showLinks() {
        let output = "";

        this.#links.forEach((link, index) => {
            output += `${index + 1}: ${link.toString()}\n`;
        });

        alert(output);
    };

    showMenu() {
        return prompt(`Choose an option:
    1: Show links
    2: Add a link
    3: Remove a link
    0: Quit`, "");
    }
}