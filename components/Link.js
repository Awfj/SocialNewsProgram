export default class Link {
    constructor(title = "", url = "", author = "") {
        this.title = title;
        this.url = url;
        this.author = author;
    }

    toString() {
        return `${this.title}: (${this.url}). Author: ${this.author}`;
    }
}