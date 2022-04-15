import './style.css';

function menu() {

    const body = document.querySelector('body');
    const div = document.querySelector('div');
    
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    // Home tab, Menu tab, Contact Us tab
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'tab1');
    home.style.backgroundColor = '#30475E';
    home.style.color = 'white';

    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'tab2');

    const contact = document.createElement('div');
    contact.textContent = 'Contact Us';
    contact.setAttribute('id', 'tab3');
    // Home tab, Menu tab, Contact Us tab

    // Restaurant Name
    const name = document.createElement('div');
    name.textContent = 'Little Myanmar Town';
    name.classList.add('name');
    // Restaurant Name

    // Middle Content
    
    // Middle Content

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    bottom.textContent = "Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved"

    main.appendChild(name);
    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(contact);
    main.appendChild(bottom);
    div.appendChild(main);
}

export {menu};