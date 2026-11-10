import { Page } from "./../page/page.js"

export class MenuPage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('menu-page');
        content.textContent = "Checkout all of the delicious pies!";
    }
};
