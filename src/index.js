import './style.css';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

const clearContent = ()=>{
    const content = document.getElementById('content');
    content.innerHTML="";

};

const homeButton = document.querySelector('nav button:nth-child(1)');
const menuButton = document.querySelector('nav button:nth-child(2)');
const contactButton = document.querySelector('nav button:nth-child(3)');

homeButton.addEventListener('click',()=>{
    clearContent();
    createHomePage();
});

menuButton.addEventListener('click',()=>{
    clearContent();
    createMenuPage();
});

contactButton.addEventListener('click',()=>{
    clearContent();
    createContactPage();
});

createHomePage();