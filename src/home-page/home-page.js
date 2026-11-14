import { Page } from "../components/page/page.js"
import { reviews } from "./reviews.js";
import { hoursOfOperation } from "./hours.js";
import { PageTitle } from "../components/page-title/page-title.js";

export class HomePage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('home-page');

        const title = new PageTitle("Home");
        content.appendChild(title.render());

        const reviewContainer = document.createElement('div');

        for (const review of reviews) {
            const reviewComments = document.createElement('div');
            const customer = document.createElement('div');
            reviewComments.textContent = review.comments;

            customer.textContent = review.customer;
            reviewContainer.append(reviewComments, customer);
            content.appendChild(reviewContainer);
        }

        const hoursContainer = document.createElement('div');
        const hoursTitle = document.createElement('h3');
        hoursTitle.textContent = "Hours"
        hoursContainer.appendChild(hoursTitle);

        const hoursList = document.createElement('ul');


        for (const day in hoursOfOperation) {
            const dailyHours = document.createElement('li');
            dailyHours.textContent = `${day}: ${hoursOfOperation[day]}`;
            hoursList.appendChild(dailyHours);
        }

        hoursContainer.appendChild(hoursList);

        content.appendChild(hoursContainer);

        const locationContainer = document.createElement('div');

        const locationTitle = document.createElement('h3');
        locationTitle.textContent = "Location";
        locationContainer.appendChild(locationTitle)

        const locationAddress = document.createElement('div');
        locationAddress.textContent =
            '12 Plum Corner Lane, Mells, Somerset BA11 3XX, England';
        locationContainer.appendChild(locationAddress);

        content.appendChild(locationContainer);
    }
};
