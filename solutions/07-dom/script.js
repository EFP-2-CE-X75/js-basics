// Exercice 1: Sélection d'éléments
const contentDiv = document.querySelector('.content');
const paragraphs = contentDiv.querySelectorAll('p');
const specialParagraph = document.querySelector('.special');
const firstParagraph = contentDiv.querySelector('p');

// Affichage des résultats de la sélection
const ex1Result = document.querySelector('#ex1 .result');
ex1Result.innerHTML = `
    <p>Nombre de paragraphes: ${paragraphs.length}</p>
    <p>Texte du paragraphe spécial: ${specialParagraph.textContent}</p>
    <p>Premier paragraphe: ${firstParagraph.textContent}</p>
`;

// Exercice 2: Manipulation du contenu
const changeMeParagraph = document.getElementById('change-me');
const ex2Result = document.querySelector('#ex2 .result');

// Création et insertion d'un nouveau paragraphe
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Nouveau paragraphe ajouté';
changeMeParagraph.after(newParagraph);

// Modification du contenu existant
changeMeParagraph.textContent = 'Contenu modifié';

// Affichage des résultats
ex2Result.innerHTML = `
    <p>Paragraphe original: ${changeMeParagraph.textContent}</p>
    <p>Nouveau paragraphe: ${newParagraph.textContent}</p>
`;

// Exercice 3: Manipulation des classes
const ex3Result = document.querySelector('#ex3 .result');

// Création et stylisation d'un nouveau paragraphe
const styledParagraph = document.createElement('p');
styledParagraph.textContent = 'Paragraphe à styliser';
styledParagraph.classList.add('highlight');

// Insertion dans le DOM
const contentDivEx3 = document.querySelector('#ex3 .content');
contentDivEx3.appendChild(styledParagraph);

// Affichage du résultat
ex3Result.innerHTML = `
    <p>La classe highlight est ${styledParagraph.classList.contains('highlight') ? 'présente' : 'absente'}</p>
`;

// Exercice 4: Création d'éléments
const listContainer = document.getElementById('list-container');
const ex4Result = document.querySelector('#ex4 .result');

// Création de la liste
const ul = document.createElement('ul');
ul.id = 'maListe';

// Création et ajout des éléments de liste
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
}

// Insertion de la liste dans le conteneur
listContainer.appendChild(ul);

// Affichage du nombre d'éléments
const items = ul.querySelectorAll('li');
ex4Result.innerHTML = `
    <p>Nombre total d'éléments: ${items.length}</p>
`; 