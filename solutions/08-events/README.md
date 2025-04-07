# Solutions des exercices sur les événements

## Exercice 1: Attachement d'écouteurs d'événements

### 1. Utilisation de onclick

```javascript
document.getElementById('btn1').onclick = function() {
    console.log('Bouton 1 cliqué (onclick)');
};
```

- Utilisation de la méthode historique `onclick`
- Simple mais limitée (un seul gestionnaire possible)

### 2. Utilisation de addEventListener

```javascript
document.getElementById('btn2').addEventListener('click', function() {
    console.log('Bouton 2 cliqué (addEventListener)');
});
```

- Méthode moderne recommandée
- Permet d'ajouter plusieurs gestionnaires
- Plus de contrôle sur la propagation des événements

### 3. Événement mouseover

```javascript
document.getElementById('btn3').addEventListener('mouseover', function() {
    console.log('Souris sur le bouton 3');
});
```

- Démontre l'utilisation d'un événement de souris différent
- Se déclenche quand la souris passe sur l'élément

### 4. Événement keydown

```javascript
document.getElementById('input1').addEventListener('keydown', function(event) {
    console.log('Touche pressée:', event.key);
});
```

- Utilisation d'un événement de clavier
- Accès aux propriétés de l'événement via l'objet `event`

## Exercice 2: Gestion des événements

### 1. Propriétés de l'événement click

```javascript
document.getElementById('btn4').addEventListener('click', function(event) {
    console.log('Type d\'événement:', event.type);
    console.log('Position X:', event.clientX);
    console.log('Position Y:', event.clientY);
    console.log('Élément cible:', event.target);
});
```

- Exploration des propriétés de l'objet événement
- Accès aux coordonnées de la souris
- Identification de l'élément cible

### 2. Événement submit

```javascript
document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Données du formulaire:', Object.fromEntries(formData));
});
```

- Gestion de la soumission d'un formulaire
- Utilisation de `preventDefault()` pour empêcher le comportement par défaut
- Récupération des données du formulaire avec `FormData`

## Exercice 3: Événements et DOM

### 1. Création d'éléments au clic

```javascript
document.getElementById('btn5').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Nouveau paragraphe créé au clic';
    document.getElementById('content1').appendChild(newParagraph);
});
```

- Création dynamique d'éléments
- Manipulation du DOM en réponse à un événement

### 2. Mise à jour du texte en temps réel

```javascript
document.getElementById('input3').addEventListener('input', function() {
    document.getElementById('output1').textContent = this.value;
});
```

- Utilisation de l'événement `input` pour une mise à jour en temps réel
- Modification du contenu d'un élément existant

### 3. Bascule de classe

```javascript
document.getElementById('btn6').addEventListener('click', function() {
    const element = document.getElementById('toggle1');
    element.classList.toggle('active');
    console.log('Classe active:', element.classList.contains('active'));
});
```

- Manipulation des classes CSS
- Utilisation de `classList` pour une gestion moderne des classes

## Exercice 4: Événements avancés

### 1. Création et remplacement de liste

```javascript
document.getElementById('btn7').addEventListener('click', function() {
    const contentDiv = document.getElementById('content2');
    const oldList = contentDiv.querySelector('ul');
    if (oldList) {
        oldList.remove();
    }
    const ul = document.createElement('ul');
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = `Élément ${i}`;
        ul.appendChild(li);
    }
    contentDiv.appendChild(ul);
});
```

- Gestion de la création et suppression d'éléments
- Création d'une structure DOM complexe

### 2. Stop propagation et preventDefault

```javascript
document.getElementById('btn8').addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('Événement stoppé et comportement par défaut empêché');
});
```

- Contrôle de la propagation des événements
- Empêchement du comportement par défaut

### 3. Délégation d'événements

```javascript
document.getElementById('container1').addEventListener('click', function(event) {
    if (event.target.matches('.nested-btn')) {
        console.log('Bouton cliqué:', event.target.textContent);
    }
});
```

- Utilisation de la délégation d'événements
- Gestion efficace des événements sur des éléments dynamiques
