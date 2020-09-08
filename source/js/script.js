

let menu = document.getElementsByClassName('main-nav')[0];
let btnMenu = document.getElementsByClassName('header__toggle')[0];

menu.classList.remove("header__main-nav--nojs");
menu.classList.add("visually-hidden");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("visually-hidden");
  btnMenu.classList.toggle("header__toggle--close");
}
