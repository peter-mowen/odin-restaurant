import { Page } from "../page/page.js"

export class HomePage extends Page{
    constructor() {
        super();
        let content = this.content;
        content.classList.add('home-page');

        const title = document.createElement('h1');
        title.textContent = "Little Jack's Pie Shop";
        content.appendChild(title);

        const reviewContainer = document.createElement('div');
        const review = document.createElement('div');
        const customer = document.createElement('div');

        review.textContent =
            `Little Jack's Curds and Whey Pie is absolutely delightful! Creamy,
            comforting, and served with the flakiest crust I've ever tasted.
            I was enjoying it in the garden when a rather unpleasant spider
            stopped by—but that's hardly the pie shop's fault. I'll definitely
            be back!`;

        customer.textContent = "Little Miss Muffet";

        reviewContainer.appendChild(review);
        reviewContainer.appendChild(customer);

        content.appendChild(reviewContainer);

        const hoursContainer = document.createElement('div');
        const hoursTitle = document.createElement('h2');
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

        const locationTitle = document.createElement('h2');
        locationTitle.textContent = "Location";
        locationContainer.appendChild(locationTitle)

        const locationAddress = document.createElement('div');
        locationAddress.textContent =
            '12 Plum Corner Lane, Mells, Somerset BA11 3XX, England';
        locationContainer.appendChild(locationAddress);

        content.appendChild(locationContainer);
    }
};
