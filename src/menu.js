import './style.css';
import Nan from './nan.jpg';
import Mhg from './mhg.jpg';
import Shrimp from './shrimp.jpg';
import Tea from './tealeaf.jpg';

function menu() {

    const body = document.querySelector('body');
    const div = document.querySelector('div');
    
    const main = document.createElement('div');
    main.setAttribute('id', 'menuMain');

    // Home tab, Menu tab, Contact Us tab
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'tab1');

    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'tab2');
    menu.style.backgroundColor = '#30475E';
    menu.style.color = 'white';

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
    const menuBody = document.createElement('div');
    menuBody.classList.add('menuBody');

    const dish1 = document.createElement('div');
    const dish1Text = document.createElement('p');
    dish1Text.textContent = "Nan Gyi Thoke";
    dish1.classList.add('menuItem');
    const nanDish = new Image();
    nanDish.src = Nan;
    dish1.appendChild(nanDish);
    dish1.appendChild(dish1Text);

    const dish2 = document.createElement('div');
    const dish2Text = document.createElement('p');
    dish2Text.textContent = "Mohinga";
    dish2.classList.add('menuItem')
    const mhgDish = new Image();
    mhgDish.src = Mhg;
    dish2.appendChild(mhgDish);
    dish2.appendChild(dish2Text);

    const dish3 = document.createElement('div');
    const dish3Text = document.createElement('p');
    dish3Text.textContent = "Myanmar Shrimp Curry";
    dish3.classList.add('menuItem');
    const shrimpDish = new Image();
    shrimpDish.src = Shrimp;
    dish3.appendChild(shrimpDish);
    dish3.appendChild(dish3Text);

    const dish4 = document.createElement('div');
    const dish4Text = document.createElement('p');
    dish4Text.textContent = "Laphet Thoke - Tea leaf salad";
    dish4.classList.add('menuItem');
    const teaDish = new Image();
    teaDish.src = Tea;
    dish4.appendChild(teaDish);
    dish4.appendChild(dish4Text);
    // Middle Content

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    bottom.textContent = "Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved"

    menuBody.appendChild(dish1);
    menuBody.appendChild(dish2);
    menuBody.appendChild(dish3);
    menuBody.appendChild(dish4);
    main.appendChild(menuBody);
    main.appendChild(name);
    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(contact);
    main.appendChild(bottom);
    div.appendChild(main);
}

export {menu};