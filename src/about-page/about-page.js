import { Page } from "../page/page.js"

export class AboutPage extends Page{
    constructor() {
        super();
        this.content.classList.add('about-page');

        const title = document.createElement('h2');
        title.textContent = "About";

        const aboutContentContainer = document.createElement('div');

        const aboutContent = [
            `Welcome to Little Jack's Pie Shop, where good food and good company
            come together over a freshly baked pie.`,
            `Little Jack's serves traditional British-inspired comfort food
            alongside a few house specialties. From hearty savory pies to sweet
            desserts, everything on our menu is made to be enjoyed around the
            table with family and friends.`,
            `Our story began with a simple idea: there's something special about
            a good pie. A flaky crust, a hearty filling, and a recipe worth
            coming back for can turn an ordinary meal into something memorable.`,
            `Whether you're stopping in for lunch, joining us for dinner, or
            saving room for one of our desserts, we're happy to have you at our
            table.`
        ];

        for (const paragraph of aboutContent) {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = paragraph;
            aboutContentContainer.appendChild(paragraphElement);
        }

        this.content.append(title, aboutContentContainer);
    }
};
