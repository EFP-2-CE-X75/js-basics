// Exercice 1: Boucle for

// 1.1 Créer un tableau de nombres de 1 à 10
const numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log("Tableau de 1 à 10:", numbers);

// 1.2 Afficher les nombres pairs de 0 à 20
console.log("\nNombres pairs de 0 à 20:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 1.3 Calculer la factorielle d'un nombre
const n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`\nFactorielle de ${n}:`, factorial);

// Exercice 2: Boucle while

// 2.1 Compte à rebours de 10 à 0
console.log("\nCompte à rebours:");
let count = 10;
while (count >= 0) {
  console.log(count);
  count--;
}

// 2.2 Trouver le premier nombre divisible par 7
let num = 1;
while (num % 7 !== 0) {
  num++;
}
console.log("\nPremier nombre divisible par 7:", num);

// 2.3 Calculer la somme des chiffres d'un nombre
const number = 12345;
let sum = 0;
let temp = number;
while (temp > 0) {
  sum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(`\nSomme des chiffres de ${number}:`, sum);

// Exercice 3: Boucle for...of et for...in

// 3.1 Parcourir un tableau de fruits
const fruits = ['pomme', 'banane', 'orange'];
console.log("\nFruits:");
for (const fruit of fruits) {
  console.log(fruit);
}

// 3.2 Parcourir un objet utilisateur
const user = {
  name: 'Alice',
  age: 30,
  city: 'Paris'
};
console.log("\nPropriétés de l'utilisateur:");
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// 3.3 Calculer la moyenne des notes
const grades = [15, 12, 18, 10, 14];
let total = 0;
for (const grade of grades) {
  total += grade;
}
const average = total / grades.length;
console.log("\nMoyenne des notes:", average);

// Exercice 4: Instructions de contrôle

// 4.1 Rechercher un élément dans un tableau
const fruitsList = ['pomme', 'banane', 'orange', 'kiwi'];
const fruitToFind = 'orange';
let found = false;

console.log("\nRecherche de fruit:");
for (const fruit of fruitsList) {
  console.log(`Vérification de: ${fruit}`);
  if (fruit === fruitToFind) {
    console.log(`Trouvé: ${fruit}`);
    found = true;
    break;
  }
}
if (!found) {
  console.log("Fruit non trouvé");
}

// 4.2 Traiter uniquement les nombres positifs
const mixedNumbers = [5, -3, 8, -1, 10, -7, 2];
console.log("\nNombres positifs uniquement:");
for (const num of mixedNumbers) {
  if (num < 0) {
    continue;
  }
  console.log(`Traitement de: ${num}`);
}

// 4.3 Recherche dans une liste de contacts
const contacts = [
  { name: 'Alice', phone: '0123456789' },
  { name: 'Bob', phone: '0987654321' },
  { name: 'Charlie', phone: '0112233445' }
];
const contactToFind = 'Bob';

console.log("\nRecherche de contact:");
for (const contact of contacts) {
  console.log(`Vérification de: ${contact.name}`);
  if (contact.name === contactToFind) {
    console.log(`Contact trouvé: ${contact.name} - ${contact.phone}`);
    break;
  }
} 