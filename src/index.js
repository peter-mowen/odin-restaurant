import { HomePage } from "./home.js"

const homePage = new HomePage;
const content = document.querySelector('#content');
content.appendChild(homePage.render());
homePage.show();
