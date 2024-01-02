import Link from "./Link.js";

export default class SocialNewsProgram {
    #links = [
        new Link("aa", "ab", "ac"),
        new Link("ba", "bb", "bc"),
        new Link("ca", "cb", "cc"),
    ];

    addLink() {
        let site = prompt("Enter site:", "");
        let link = prompt("Enter link:", "");
        let author = prompt("Enter author:", "");

        let newLink = new Link(site, link, author);
        this.#links.push(newLink);
    };

    removeLink() {
        let index;

        do {
            index = parseInt(prompt("Enter index:", ""));
        } while (isNaN(index) || index < 0 || index > this.#links.length - 1);

        this.#links.splice(index, 1);
    };

    showLinks() {
        let output = "";

        this.#links.forEach((link, index) => {
            output += `${index + 1}: ${link.getInfo()}\n`;
        });

        alert(output);
    };

    showMenu() {
        return prompt(`Choose an option:
    1: Show links
    2: Add a link
    3: Remove a link
    0: Quit`);
    }
}