export class PageTitle {
    #title;
    constructor(titleText) {
        this.#title = titleText;
    }

    render() {
        const titleElement = document.createElement('h2');
        titleElement.textContent = this.#title;
        return titleElement;
    }
}
