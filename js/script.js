/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
 # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
*/



// Creo un array di oggetti per rappresentare i membri del team
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

// Stampo in console le informazioni di ogni membro del team
for (const member of teamMembers) {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
}

// Recupero l'elemento dal DOM
const carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;

// Genero le slide con un ciclo, creando gli elementi DOM direttamente
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (i === 0) {
        carouselItem.classList.add('active');
    }

    const teamSlide = document.createElement('div');
    teamSlide.classList.add('team-slide');

    const img = document.createElement('img');
    img.src = `img/${member.foto}`;
    img.alt = member.nome;

    const h4 = document.createElement('h4');
    h4.textContent = member.nome;

    const p = document.createElement('p');
    p.textContent = member.ruolo;

    const small = document.createElement('small');
    small.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus fuga recusandae dolorem illum pariatur praesentium, eaque libero dignissimos ad eius fugiat doloribus dolores mollitia aperiam culpa repellendus.";

    // Appendo tutti gli elementi al teamSlide
    teamSlide.appendChild(img);
    teamSlide.appendChild(h4);
    teamSlide.appendChild(p);
    teamSlide.appendChild(small);

    // Appendo il teamSlide alla carouselItem
    carouselItem.appendChild(teamSlide);

    // Appendo la carouselItem alla carouselInner
    carouselInner.appendChild(carouselItem);
}

//! Gestione del carousel

// Recupero gli elementi dal DOM
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');

// Creo una funzione per mostrare le slide..
function showSlide(index) {

    //..con un ciclo for of per dare o togliere la classe active
    for (const item of items) {
        item.classList.remove('active');
    }
    items[index].classList.add('active');
}

// Gestisco con un event click i bottoni, per lo spostamento tra le varie slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});
