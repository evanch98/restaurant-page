import {home} from './home';
import {menu} from './menu';

const div = document.querySelector('#content');
home();

const hm = document.querySelector('#tab1');
hm.addEventListener('click', () => {
    div.removeChild(div.firstChild);
    home();
    alert('Home');
});

const mn = document.querySelector('#tab2');
mn.addEventListener('click', () => {
    div.removeChild(div.firstChild);
    menu();
    alert('Menu');
});