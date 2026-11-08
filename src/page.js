export class Page {
    #content;

    constructor() {
        if (new.target === Page) {
            throw new Error("Page is an abstract class");
        }

        this.#content = document.createElement('div');
    }

    // Private Interface
    get _content() {
        return this.#content;
    }

    // Public Interface
    render() {
        throw new Error("Subclass must implement the content getter");
    }

    // onEnter() // unhide content
    // onExit()  // hide content
}
