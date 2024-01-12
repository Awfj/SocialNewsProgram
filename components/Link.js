export default class Link {
    constructor(id, title = "", url = "", author = "") {
        this.id = id;
        this.title = title;
        this.url = url;
        this.author = author;
    }

    toString() {
        return `${this.title}: (${this.url}). Author: ${this.author}`;
    }
}