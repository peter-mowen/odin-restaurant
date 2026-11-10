import { Page } from "../page/page.js"

export class HomePage extends Page{
    constructor() {
        super();
        let content = super._content;
        content.classList.add('home-page');
        content.textContent = "Welcome to Little Jack's Pie Shop!";
        super.hide();
    }

    render() {
        return super._content;
    }
};
