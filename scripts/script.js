"use strict"

const button = document.getElementById('burger-menu');
const links = document.getElementById('main-nav-list');

button.addEventListener('click', function() {
    links.classList.toggle('show');
})