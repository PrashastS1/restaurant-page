import RestaurantImage from './assets/restaurant-interior.png';

function createHomePage(){
    const content = document.getElementById('content');
    const headline = document.createElement('h1');
    headline.textContent = 'The Golden Pork';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to The Golden Pork, where every dish is a masterpiece. Our commitment to fresh, locally-sourced ingredients and culinary excellence makes every meal an unforgettable experience. Join us for a taste of perfection.';
    const image = new Image();
    image.src = RestaurantImage;
    image.alt = "A view of the restaurant's beautiful interior";

    content.appendChild(headline);
    content.appendChild(paragraph);
    content.appendChild(image);

}

export default createHomePage;