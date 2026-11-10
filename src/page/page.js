import "./page.css"

export class Page {
    // private
    #content;

    get _content() {
        return this.#content;
    }

    // public
    constructor() {
        if (new.target === Page) {
            throw new Error("Page is an abstract class");
        }

        this.#content = document.createElement('div');
        this.#content.classList.add('page-content');
    }

    render() {
        throw new Error("Subclass must implement the content getter");
    }

    hide() {
        console.log("Hiding content");
        this.#content.classList.add('is-hidden');
    }

    show() {
        this.#content.classList.remove('is-hidden');
    }
}
