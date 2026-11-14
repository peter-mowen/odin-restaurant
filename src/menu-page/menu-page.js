import { PageTitle } from "../components/page-title/page-title.js";
import { Page } from "../components/page/page.js"
import { menu } from "./menu-data.js";

export class MenuPage extends Page{
    constructor() {
        super();

        this.content.classList.add('menu-page');

        const title = new PageTitle("Menu");
        this.content.appendChild(title.render());

        for (let course in menu) {
            const courseContainer = document.createElement('div');
            const courseTitle = document.createElement('h3');
            courseTitle.textContent = course;
            courseContainer.appendChild(courseTitle);

            for (const menuItem of menu[course]) {
                const menuItemDiv = document.createElement('div');
                const menuItemTitle = document.createElement('h4');
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
