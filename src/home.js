import './style.css';
import Img from './home.jpeg';

function home() {
    const myImg = new Image();
    myImg.src = Img;

    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.setAttribute('id', 'content');

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
    const about = document.createElement('div');
    about.textContent = 'Myanmar Cuisine Beyond its boundaries.';
    about.classList.add('about');

    const right = document.createElement('div');
    right.classList.add('right');

    const intro = document.createElement('div');
    intro.textContent = 'At Little Myanmar Town, we are constantly searching for the aromas and flavors of Myanmar. Join us in the world of Little Myanmar Town, share our passion and \
    let us present our country\'s harvest in the most delicious light.';
    intro.classList.add('intro');

    const time = document.createElement('div');
    time.innerHTML = 'Lunch: 12:00 pm - 2:00 pm (Thursday to Saturday) <br>\
    Dinner: 6:00 pm to 8:45 pm (Monday to Saturday)';
    time.classList.add('intro');

    const mid = document.createElement('div');
    mid.classList.add('mid');
    mid.appendChild(myImg);
    // Middle Content

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    bottom.textContent = "Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved"


    right.appendChild(intro);
    right.appendChild(time);
    div.appendChild(name);
    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    div.appendChild(about);
    div.appendChild(mid);
    div.appendChild(right);
    div.appendChild(bottom);
    body.appendChild(div);
}

export {home};