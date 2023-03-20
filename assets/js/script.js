const menu = document.querySelector('#menu');
menu.addEventListener('click', abrirMenu);

const close = document.querySelector('#close');
close.addEventListener('click', fechaMenu);

function fechaMenu() {
    let menuArea = document.querySelector('.bg-menu');

    if (menuArea.style.display == 'flex') {
        menuArea.style.display = 'none';
    }
}

function abrirMenu() {
    let menuArea = document.querySelector('.bg-menu');

    if (menuArea.style.display == 'none') {
        menuArea.style.display = 'flex';
    } else {
        menuArea.style.display = 'none';
    }

}    