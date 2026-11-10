import { Page } from "../page/page.js"

export class AboutPage extends Page{
    constructor() {
        super();
        let content = super._content;
        content.classList.add('about-page');
        content.textContent = "Little Jack Horner - Pie Chef";
        super.hide();
    }

    render() {
        return super._content;
    }
};
