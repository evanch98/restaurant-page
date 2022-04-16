import './style.css';

function contact() {

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

    const contact = document.createElement('div');
    contact.textContent = 'Contact Us';
    contact.setAttribute('id', 'tab3');
    contact.style.backgroundColor = '#30475E';
    contact.style.color = 'white';
    // Home tab, Menu tab, Contact Us tab

    // Restaurant Name
    const name = document.createElement('div');
    name.textContent = 'Little Myanmar Town';
    name.classList.add('name');
    // Restaurant Name

    // Middle Content
    const contactBody = document.createElement('div');
    contactBody.classList.add('contactBody');

    // Booking
    const booking = document.createElement('div');
    booking.classList.add('contactItem');
    const bookingTitle = document.createElement('h1');
    bookingTitle.textContent = "MAKE A BOOKING";
    const bookingTel = document.createElement('p');
    bookingTel.textContent = "+1-202-555-0152";
    booking.appendChild(bookingTitle);
    booking.appendChild(bookingTel);
    // booking

    // Opening
    const opening = document.createElement('div');
    opening.classList.add('contactItem');
    const openingTitle = document.createElement('h1');
    openingTitle.textContent = "OPENING TIME";
    const openingTime = document.createElement('p');
    openingTime.innerHTML = "Sunday: Closed <br> Thursday - Saturday: 12:00 pm - 2:00 pm <br> Monday - Saturday: 6:00 pm - 8:45 pm";
    opening.appendChild(openingTitle);
    opening.appendChild(openingTime);
    // Opening
    
    // Address
    const address = document.createElement('div');
    address.classList.add('contactItem');
    const addressTitle = document.createElement('h1');
    addressTitle.textContent = "ADDRESS";
    const addressText = document.createElement('p');
    addressText.textContent = "Kelley A. Fleming 196 Woodside Circle Mobile, FL";
    address.appendChild(addressTitle);
    address.appendChild(addressText);
    // Address
    // Middle Content

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    bottom.textContent = "Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved"

    contactBody.appendChild(booking);
    contactBody.appendChild(opening);
    contactBody.appendChild(address);
    main.appendChild(contactBody);
    main.appendChild(name);
    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(contact);
    main.appendChild(bottom);
    div.appendChild(main);
}

export {contact};