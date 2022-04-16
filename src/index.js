import {home} from './home';
import {menu} from './menu';

const div = document.querySelector('#content');
home();

let hm = document.querySelector('#tab1');
hm.addEventListener('click', () => {
    switchTab(1);
    alert('Home');
});

let mn = document.querySelector('#tab2');
mn.addEventListener('click', () => {
    switchTab(2);
    alert('Menu');
});

function switchTab(tab) {
    switch(tab) {
        case 1:
            div.removeChild(div.firstChild);
            home();
            break;
        case 2:
            div.removeChild(div.firstChild);
            menu();
            break;
    };
    hm = document.querySelector('#tab1');
        hm.addEventListener('click', () => {
            switchTab(1);
            alert('Home');
        });
    
    mn = document.querySelector('#tab2');
        mn.addEventListener('click', () => {
            switchTab(2);
            alert('Menu');
        });
}