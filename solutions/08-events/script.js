// Exercice 1: Attachement d'écouteurs d'événements

// 1. Utilisation de onclick (méthode historique)
document.getElementById('btn1').onclick = function() {
  console.log('Bouton 1 cliqué (onclick)');
};

// 2. Utilisation de addEventListener (méthode moderne)
document.getElementById('btn2').addEventListener('click', function() {
  console.log('Bouton 2 cliqué (addEventListener)');
});

// 3. Événement mouseover
document.getElementById('btn3').addEventListener('mouseover', function() {
  console.log('Souris sur le bouton 3');
});

// 4. Événement keydown
document.getElementById('input1').addEventListener('keydown', function(event) {
  console.log('Touche pressée:', event.key);
});

// Exercice 2: Gestion des événements

// 1. Propriétés de l'événement click
document.getElementById('btn4').addEventListener('click', function(event) {
  console.log('Type d\'événement:', event.type);
  console.log('Position X:', event.clientX);
  console.log('Position Y:', event.clientY);
  console.log('Élément cible:', event.target);
});

// 2. Événement submit
document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  console.log('Données du formulaire:', Object.fromEntries(formData));
});

// Exercice 3: Événements et DOM

// 1. Création d'éléments au clic
document.getElementById('btn5').addEventListener('click', function() {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Nouveau paragraphe créé au clic';
  document.getElementById('content1').appendChild(newParagraph);
});

// 2. Mise à jour du texte en temps réel
document.getElementById('input3').addEventListener('input', function() {
  document.getElementById('output1').textContent = this.value;
});

// 3. Bascule de classe
document.getElementById('btn6').addEventListener('click', function() {
  const element = document.getElementById('toggle1');
  element.classList.toggle('active');
  console.log('Classe active:', element.classList.contains('active'));
});

// Exercice 4: Événements avancés

// 1. Création et remplacement de liste
document.getElementById('btn7').addEventListener('click', function() {
  const contentDiv = document.getElementById('content2');
  
  // Supprimer l'ancienne liste si elle existe
  const oldList = contentDiv.querySelector('ul');
  if (oldList) {
    oldList.remove();
  }
  
  // Créer une nouvelle liste
  const ul = document.createElement('ul');
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Élément ${i}`;
    ul.appendChild(li);
  }
  
  contentDiv.appendChild(ul);
});

// 2. Stop propagation et preventDefault
document.getElementById('btn8').addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  console.log('Événement stoppé et comportement par défaut empêché');
});

// 3. Délégation d'événements
document.getElementById('container1').addEventListener('click', function(event) {
  if (event.target.matches('.nested-btn')) {
    console.log('Bouton cliqué:', event.target.textContent);
  }
}); 