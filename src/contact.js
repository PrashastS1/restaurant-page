function createContactPage(){
    const content = document.getElementById('content');

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    const headline = document.createElement('h1')
    headline.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = '📞 123-456-7890';

    const address = document.createElement('p');
    address.textContent = '📍 123 Culinary Lane, Foodie City, USA';

    contactWrapper.appendChild(headline);
    contactWrapper.appendChild(phone);
    contactWrapper.appendChild(address);

    content.appendChild(contactWrapper);
}

export default createContactPage;