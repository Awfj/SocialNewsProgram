export default class Link {
    constructor(site = "", link = "", author = "") {
        this.site = site;
        this.link = link;
        this.author = author;
    }

    getInfo() {
        return `${this.site}: (${this.link}). Author: ${this.author}`;
    }
}