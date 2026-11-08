import { Page } from "./page.js"

export class HomePage extends Page{
    constructor() {
        super();
    }

    render() {
        console.log("Constructing Home Page");
        let content = super._content;
        content.classList.add('home-page');
        content.textContent = "Welcome to Little Jack's Pie Shop!";
        return content;
    }
};
