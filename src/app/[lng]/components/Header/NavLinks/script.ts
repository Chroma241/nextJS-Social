const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');


toggleMenuBtn?.addEventListener('click', toggleNav);

function toggleNav(){
    toggleMenu?.classList.toggle('-translate-y-full');

    if(toggleMenu?.classList.contains("-translate-y-full")){
        toggleMenuBtn?.setAttribute('aria-expanded', 'false');
    }else{
        toggleMenuBtn?.setAttribute('aria-expanded', 'true');
    }
}