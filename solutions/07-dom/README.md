# Solutions des exercices sur le DOM

## Exercice 1: Sélection d'éléments

```javascript
// Sélection de la div parente
const contentDiv = document.querySelector('.content');

// Sélection de tous les paragraphes dans la div
const paragraphs = contentDiv.querySelectorAll('p');

// Sélection du paragraphe spécial
const specialParagraph = document.querySelector('.special');

// Sélection du premier paragraphe
const firstParagraph = contentDiv.querySelector('p');
```

Points clés:

- `querySelector` retourne le premier élément correspondant
- `querySelectorAll` retourne une NodeList de tous les éléments correspondants
- Les sélecteurs peuvent être combinés (ex: `.content p`)

## Exercice 2: Manipulation du contenu

```javascript
// Sélection des éléments
const changeMeParagraph = document.getElementById('change-me');
const changeButton = document.querySelector('#ex2 button');
const ex2Result = document.querySelector('#ex2 .result');

// Ajout d'un écouteur d'événement
changeButton.addEventListener('click', () => {
    // Modification du texte
    changeMeParagraph.textContent = 'Le texte a été modifié!';
    
    // Affichage du résultat
    ex2Result.innerHTML = `
        <p>Nouveau contenu: ${changeMeParagraph.textContent}</p>
    `;
});
```

Points clés:

- `textContent` pour modifier le texte brut
- `innerHTML` pour insérer du HTML
- Les template literals pour la concaténation de chaînes

## Exercice 3: Manipulation des classes

```javascript
// Sélection des éléments
const toggleParagraph = document.querySelector('.toggle-me');
const toggleButton = document.querySelector('#ex3 button');
const ex3Result = document.querySelector('#ex3 .result');

// Ajout d'un écouteur d'événement
toggleButton.addEventListener('click', () => {
    // Toggle de la classe
    toggleParagraph.classList.toggle('highlight');
    
    // Affichage du statut
    ex3Result.innerHTML = `
        <p>La classe highlight est ${toggleParagraph.classList.contains('highlight') ? 'présente' : 'absente'}</p>
    `;
});
```

Points clés:

- `classList` pour manipuler les classes
- `toggle()` pour alterner l'état d'une classe
- `contains()` pour vérifier la présence d'une classe

## Exercice 4: Création d'éléments

```javascript
// Sélection des éléments
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector('#ex4 button');
const ex4Result = document.querySelector('#ex4 .result');
let itemCount = 0;

// Ajout d'un écouteur d'événement
addButton.addEventListener('click', () => {
    // Création d'un nouvel élément
    const newItem = document.createElement('li');
    
    // Configuration de l'élément
    itemCount++;
    newItem.textContent = `Élément ${itemCount}`;
    
    // Ajout au DOM
    listContainer.appendChild(newItem);
    
    // Mise à jour du compteur
    ex4Result.innerHTML = `
        <p>Nombre total d'éléments: ${itemCount}</p>
    `;
});
```

Points clés:

- `createElement()` pour créer un nouvel élément
- `appendChild()` pour ajouter un élément au DOM
- Gestion d'un compteur pour suivre le nombre d'éléments
