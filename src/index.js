import {home} from './home';
import {menu} from './menu';
import {contact} from './contact';

const div = document.querySelector('#content');
// When the page loaded for the first time
home();

let hm = document.querySelector('#tab1');
hm.addEventListener('click', () => {
    switchTab(1);
});

let mn = document.querySelector('#tab2');
mn.addEventListener('click', () => {
    switchTab(2);
});

let ct = document.querySelector('#tab3');
ct.addEventListener('click', () => {
    switchTab(3);
});
// When the page loaded for the first time

// Tab Switching
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
        case 3:
            div.removeChild(div.firstChild);
            contact();
            break;
    };
    // Adding event listener again after switching the tabs
    hm = document.querySelector('#tab1');
    hm.addEventListener('click', () => {
        switchTab(1);
    });
    
    mn = document.querySelector('#tab2');
    mn.addEventListener('click', () => {
        switchTab(2);
    });

    ct = document.querySelector('#tab3');
    ct.addEventListener('click', () => {
        switchTab(3);
    });
    // Adding event listener again after switching the tabs
}