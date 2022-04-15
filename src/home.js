import './style.css';

function home() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.setAttribute('id', 'content');
    div.textContent = "Hello, World!";

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

    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    body.appendChild(div);
}

export {home};