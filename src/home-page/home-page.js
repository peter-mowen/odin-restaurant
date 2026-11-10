import { Page } from "../page/page.js"

export class HomePage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('home-page');
        content.textContent = "Welcome to Little Jack's Pie Shop!";
    }
};
