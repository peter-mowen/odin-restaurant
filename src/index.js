import { HomePage } from "./home-page/home.js"
import { MenuPage } from "./menu-page/menu-page.js";

const homePage = new HomePage;
const menuPage = new MenuPage;

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');

const buttons = [homeBtn, menuBtn];

buttons.forEach(
    button => { button.addEventListener('click', handleNavigationButton); }
);

function handleNavigationButton(event) {
    currentPage.hide();

    switch (this.id) {
        case "menu-btn":
            currentPage = menuPage;
            break;
        case "home-btn":
        default:
            currentPage = homePage;
    }

    currentPage.show();
}

const content = document.querySelector('#content');
content.appendChild(homePage.render());
content.appendChild(menuPage.render());
homePage.show();

let currentPage = homePage;
