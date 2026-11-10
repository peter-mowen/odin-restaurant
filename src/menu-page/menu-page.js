import { Page } from "./../page/page.js"

export class MenuPage extends Page{
    constructor() {
        super();
        let content = super._content;
        content.classList.add('home-page');
        content.textContent = "Checkout all of the delicious pies!";
        super.hide();
    }

    render() {
        return super._content;
    }
};
