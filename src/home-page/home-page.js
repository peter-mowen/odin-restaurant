import { Page } from "../page/page.js"

export class HomePage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('home-page');
        const title = document.createElement('h1');
        title.textContent = "Little Jack's Pie Shop";
        content.appendChild(title);
    }
};
