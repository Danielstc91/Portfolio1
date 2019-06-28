// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const lgHeader = document.querySelector('.lg-heading');
const smHeader = document.querySelector('.sm-heading');
const icons = document.querySelector('.icons');

//Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        //Close Menu Button, and show New menu items
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        lgHeader.classList.add('show');
        smHeader.classList.add('show');
        icons.classList.add('show');


        //Show each menu sub item
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {

        //add "Close or Show" class to object
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        lgHeader.classList.remove('show');
        smHeader.classList.remove('show');
        icons.classList.remove('show');

        //add show and close class to each Nav Item
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}