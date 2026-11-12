import { Page } from "./../page/page.js"
import { menu } from "./menu-data.js";

export class MenuPage extends Page{
    constructor() {
        super();

        this.content.classList.add('menu-page');
        const title = document.createElement('h1');
        title.textContent = "Menu";
        this.content.appendChild(title);

        for (let course in menu) {
            const courseContainer = document.createElement('div');
            const courseTitle = document.createElement('h2');
            courseTitle.textContent = course;
            courseContainer.appendChild(courseTitle);

            for (const menuItem of menu[course]) {
                const menuItemDiv = document.createElement('div');
                const menuItemTitle = document.createElement('h3');
                const menuItemDescription = document.createElement('div');

                menuItemTitle.textContent = menuItem.name;
                menuItemDescription.textContent = menuItem.description;

                menuItemDiv.append(menuItemTitle, menuItemDescription);
                courseContainer.appendChild(menuItemDiv)
            }

            this.content.appendChild(courseContainer);
        }
    }
};
