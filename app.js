let btnMenu = document.querySelector(' .btn-menu');
let menu = document.querySelector('.list-container ');
let containerMenu = document.querySelector('.menu ');
let activador = true;

btnMenu.addEventListener('click ', () => {

    if (activador) {

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    } else {
        activador = false;

        menu.style.feft = "-100%";
        menu.getElementsByClassName.transition = "0.5s";

        activador = true;

    }

});