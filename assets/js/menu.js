let bgMenu      = document.querySelector('.bg_menu');
let menuBar     = document.querySelector('.navbar__menu');
let buttonMenu  = document.querySelector('.button-menu');
let links       = document.querySelectorAll('.navbar__link');

bgMenu.style.display = "none";

buttonMenu.addEventListener('click', openMenu);
bgMenu.addEventListener('click', closeMenu);

function openMenu () {
    bgMenu.style.display = "";
    menuBar.classList.add('navbar__menu--active');
}
function closeMenu () {
    bgMenu.style.display = "none"
    menuBar.classList.remove('navbar__menu--active');
}


links.forEach(link => {
    console.log(link.textContent)

    switch(link.textContent){
        case "Characters":
            link.href = "index.html";
            break
        case "More Webs":
            link.href = "more_webs.html"
            break
        case "Information":
            link.href = "information.html"
            break
        case "API Dragon Ball":
            link.href = "https://dragon-ballz-super-api.site/"
            break
        default:
            link.href = "index.html"
    }
});

document.querySelector('.navbar__brand').href = "/index.html"