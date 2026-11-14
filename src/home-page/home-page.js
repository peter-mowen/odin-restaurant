import { Page } from "../components/page/page.js"
import { reviews } from "./reviews.js";

export class HomePage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('home-page');

        const title = document.createElement('h2');
        title.textContent = "Home";
        content.appendChild(title);

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

        const hoursOfOperation = document.createElement('ul');
        const daysToHours = {
            'Monday'    : '11AM - 9PM',
            'Tuesday'   : '11AM - 9PM',
            'Wednesday' : '11AM - 9PM',
            'Thursday'  : '11AM - 9PM',
            'Friday'    : '11AM - 9PM',
            'Saturday'  : '9AM - 9PM',
            'Sunday'    : '9AM - 9PM'
        }

        for (let day in daysToHours) {
            const dailyHours = document.createElement('li');
            dailyHours.textContent = `${day}: ${daysToHours[day]}`;
            hoursOfOperation.appendChild(dailyHours);
        }

        hoursContainer.appendChild(hoursOfOperation);

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
