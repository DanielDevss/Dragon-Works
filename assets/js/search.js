const inpSearch = document.querySelector('#search');
const contenido = document.querySelector('#characters');


inpSearch.addEventListener('keyup', filtrar);

function filtrar() {
    const filter = inpSearch.value.toUpperCase();
    const character = contenido.getElementsByClassName("character__item");
    // const characterName = document.querySelector('.character__name');

    for (let i = 0; i < character.length; i++) {
        // const a = character[i].textContent;
        const a = character[i].textContent;
        if (a.toUpperCase().indexOf(filter) > -1) {
            character[i].style.display = "";
        } else {
            character[i].style.display = "none";
        }
    }

    if(inpSearch.value === null){
        slide.style.display = "none";
    } 
}