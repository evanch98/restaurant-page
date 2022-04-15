import './style.css';

function home() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.setAttribute('id', 'content');
    div.textContent = "Hello, World!";

    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'tab1');
    home.style.backgroundColor = '#30475E';

    div.appendChild(home);
    body.appendChild(div);
}

export {home};