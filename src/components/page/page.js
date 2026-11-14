import "./page.css"

export class Page {
    // private
    #content;

    // public
    constructor() {
        if (new.target === Page) {
            throw new Error("Page is an abstract class");
        }

        this.#content = document.createElement('div');
        this.#content.classList.add('page-content');
        this.hide();
    }

    get content() {
        return this.#content;
    }

    hide() {
        this.#content.classList.add('is-hidden');
    }

    show() {
        this.#content.classList.remove('is-hidden');
    }
}
