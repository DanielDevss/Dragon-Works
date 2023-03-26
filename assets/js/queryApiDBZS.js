let url = "https://dragon-ballz-super-api.site/api";
let ul  = document.querySelector('.characters');

fetch(url)
.then( response => response.json() )
.then( data => {
    const characters = data.characters;

    characters.forEach(e => {
        //cards
        const card_front = document.createElement("section");
        // const card_back  = document.createElement("section");
        card_front.classList.add("character__cardfront");
        // card_back.classList.add("character__cardback");

        //card--back-------------------------------
        //atributes container

        //title of atributes
        const h4_title_atribute = document.createElement("h4");
        h4_title_atribute.classList.add("character__subtitle");
        h4_title_atribute.textContent = "Atributes";

        const atributes = document.createElement("ul");
        atributes.classList.add("character__atributes");
        
        //ki
        const li_ki = document.createElement("li");
        li_ki.classList.add("character__atributesitem");
        li_ki.innerHTML = `<b>Ki: </b>${e.kiRestoreSpeed}`;

        //health
        const li_health = document.createElement("li");
        li_health.classList.add("character__atributesitem");
        li_health.innerHTML = `<b>Health</b> ${e.health}`

        //skills container
        const skills = document.createElement("ul");
        skills.classList.add("character__skills");
        
        const h4_title_skills = document.createElement("h4");
        h4_title_skills.classList.add("character__subtitle");
        h4_title_skills.textContent = `Skills of ${e.name}`

        //card--front------------------------------
        //bio
        const div_bio = document.createElement("div");
        div_bio.classList.add("character__containerbio");
        const p_bio = document.createElement("p");
        p_bio.classList.add("character__bio");
        p_bio.textContent = e.bio;
        div_bio.appendChild(p_bio);

        //gender and race
        const content_gender_race = document.createElement("div");
        content_gender_race.classList.add("character__container__genderrace");

        const p_genderAndRace = document.createElement("p");
        p_genderAndRace.classList.add("character__genderandrace");
        p_genderAndRace.textContent = `${e.gender} - ${e.race}`;

        content_gender_race.appendChild(p_genderAndRace);

        //nombre
        const h3 = document.createElement("h3");
        h3.classList.add("character__name");
        h3.textContent = e.name;

        //image
        const img = document.createElement("img");
        img.classList.add("character__img");
        img.src = e.img;

        //contenedor
        const li = document.createElement("li");
        li.classList.add("character__item");

        //contenedor ul
        ul.appendChild(li);


        //card_front ----
        card_front.appendChild(img);
        card_front.appendChild(h3);
        card_front.appendChild(content_gender_race);
        card_front.appendChild(div_bio);

        //card_back ----
        atributes.appendChild(h4_title_atribute);
        atributes.appendChild(li_health)
        atributes.appendChild(li_ki);

        skills.appendChild(h4_title_skills);
        e.abilities.forEach( a => {
            const li_skill = document.createElement("li");
            li_skill.classList.add("character__skillsitem");
            li_skill.textContent = a;

            skills.appendChild(li_skill);
        });
        card_front.appendChild(skills);
        card_front.appendChild(atributes);

        //añadiendo a li
        li.appendChild(card_front);
        // li.appendChild(card_back);

        // console.log(e)

    });

});