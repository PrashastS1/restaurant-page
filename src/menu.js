function createMenuPage(){
    const content = document.getElementById('content');

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');

    const headline = document.createElement('h1');
    headline.textContent='Our Menu';

    const createMenuItem = (name,description)=>{
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = description;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        return menuItem;
    }

    menuWrapper.appendChild(headline);
    menuWrapper.appendChild(createMenuItem('Classic Burger', 'A juicy beef patty with fresh lettuce, tomato, and our secret sauce.'));
    menuWrapper.appendChild(createMenuItem('Margherita Pizza', 'Classic pizza with fresh tomatoes, mozzarella, and basil.'));
    menuWrapper.appendChild(createMenuItem('Caesar Salad', 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing.'));

    content.appendChild(menuWrapper);
}

export default createMenuPage;