/* ================================SHOW MENU================================ */
const   navMenu = document.getElementById('nav-menu'),
        navClose = document.getElementById('nav-close'),
        navToggle = document.getElementById('nav-toggle');

/* ================================SHOW MENU================================ */
/* VALIDATE IF CONSTANT EXIST */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ================================SHOW MENU MOBILE================================ */
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));