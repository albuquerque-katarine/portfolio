/**
 * Menu Mobile
 */

var menu = document.getElementById('header-menu');
var abrir = document.getElementById('header-button-abrir');
var fechar = document.getElementById('header-button-fechar');

fechar.classList.remove('header-button-fechar');

if(window.innerWidth <= 576) {
    
    menu.classList.add('header-menu-inativo');
    menu.classList.remove('header-menu-ativo');

    abrir.classList.add('header-button-abrir');
    fechar.classList.remove('header-button-fechar');
        
    abrir.addEventListener('click',() => {
        
        menu.classList.remove('header-menu-inativo');
        menu.classList.add('header-menu-ativo');
        
        abrir.classList.remove('header-button-abrir');
        fechar.classList.add('header-button-fechar');

    }); 
    
    fechar.addEventListener('click',() => {

        menu.classList.remove('header-menu-ativo');
        menu.classList.add('header-menu-inativo');

        abrir.classList.add('header-button-abrir');
        fechar.classList.remove('header-button-fechar');

    }); 
}
else {
    menu.classList.add('header-menu-ativo');
}
