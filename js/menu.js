/* ==========================================================
                    LUXURY WOOL
                     MENU JS
========================================================== */


/*
    Seleccionamos los elementos
    que vamos a controlar.
*/


const menuButton = document.querySelector(".header__menu");

const closeButton = document.querySelector(".menu__close");

const sideMenu = document.querySelector(".side-menu");

const overlay = document.querySelector(".menu-overlay");





/*
    Abrir menú
*/


menuButton.addEventListener("click", () => {


    sideMenu.classList.add("active");


    overlay.classList.add("active");


});







/*
    Cerrar menú
*/


closeButton.addEventListener("click", () => {


    sideMenu.classList.remove("active");


    overlay.classList.remove("active");


});







/*
    Cerrar haciendo click
    fuera del menú
*/


overlay.addEventListener("click", () => {


    sideMenu.classList.remove("active");


    overlay.classList.remove("active");


});