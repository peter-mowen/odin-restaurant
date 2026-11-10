import { AboutPage } from "./about-page/about-page.js";
import { HomePage } from "./home-page/home-page.js"
import { MenuPage } from "./menu-page/menu-page.js";

const homePage = new HomePage;
const menuPage = new MenuPage;
const aboutPage = new AboutPage;

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

const buttons = [homeBtn, menuBtn, aboutBtn];

buttons.forEach(
    button => { button.addEventListener('click', handleNavigationButton); }
);

function handleNavigationButton(event) {
    currentPage.hide();

    switch (this.id) {
        case "about-btn":
            currentPage = aboutPage;
            break;
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
content.appendChild(homePage.content);
content.appendChild(menuPage.content);
content.appendChild(aboutPage.content);
homePage.show();

let currentPage = homePage;
