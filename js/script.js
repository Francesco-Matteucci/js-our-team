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

//Stampo in console le informazioni di ogni membro del team
for (const member of teamMembers) {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
}


//Recupero l'elemento dal DOM
const teamContainer = document.getElementById('team-container');

//Stampo le informazioni di ogni membro del team, sul DOM, inserendo l'effettiva immagine, in delle card
for (const member of teamMembers) {

    // Creo il div per la card
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    // Creo l'elemento immagine per la card
    const memberImage = document.createElement('img');
    memberImage.src = `img/${member.foto}`;
    memberImage.alt = `${member.nome}`;
    memberImage.classList.add('card-img-top');

    // Creo il div per il corpo della card
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');

    // Creo l'elemento per il nome
    const cardText = document.createElement('h5');
    cardText.classList.add('card-title');
    cardText.textContent = member.nome;

    // Creo l'elemento per il ruolo 
    const cardRole = document.createElement('p');
    cardRole.classList.add('card-text');
    cardRole.textContent = member.ruolo;

    // Appendo il testo e il ruolo al body della card
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardRole);

    // Appendo l'immagine e il corpo della card al div card
    card.appendChild(memberImage);
    card.appendChild(cardBody);

    // Stampo nel DOM la card sul container principale
    teamContainer.appendChild(card);
}