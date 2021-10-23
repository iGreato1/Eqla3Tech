// Add hoverd class to website sections
let home = document.querySelector('.home');
let sections = document.querySelector('.sections');
let lastNews = document.querySelector('.lastNews');
let contact = document.querySelector('.contact');
let light = document.querySelector('#light');
let dark = document.querySelector('#dark');
let menuMobile = document.querySelector('.menuMobile');
let body = document.querySelector('.body');
let navContainer = document.querySelector('.navContainer');
let mainContainer = document.querySelector('.mainContainer');
let topBar = document.querySelector('.topBar');
home.onclick = function () {
    sections.classList.remove('clicked');
    lastNews.classList.remove('clicked');
    contact.classList.remove('clicked');
    home.classList.add('clicked');
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
sections.onclick = function () {
    home.classList.remove('clicked');
    lastNews.classList.remove('clicked');
    contact.classList.remove('clicked');
    sections.classList.add('clicked');
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
lastNews.onclick = function () {
    home.classList.remove('clicked');
    sections.classList.remove('clicked');
    contact.classList.remove('clicked');
    lastNews.classList.add('clicked');
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
contact.onclick = function () {
    home.classList.remove('clicked');
    sections.classList.remove('clicked');
    lastNews.classList.remove('clicked');
    contact.classList.add('clicked');
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
light.onclick = function () {
    dark.classList.remove('clicked');
    light.classList.add('clicked');
    body.classList.remove('dark');
    navContainer.classList.remove('dark');
    mainContainer.classList.remove('dark');
    body.classList.add('light');
    navContainer.classList.add('light');
    mainContainer.classList.add('light');
};
dark.onclick = function () {
    light.classList.remove('clicked');
    dark.classList.add('clicked');
    body.classList.remove('light');
    navContainer.classList.remove('light');
    mainContainer.classList.remove('light');
    body.classList.add('dark');
    navContainer.classList.add('dark');
    mainContainer.classList.add('dark');
};
menuMobile.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
}