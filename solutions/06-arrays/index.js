// Exercice 1: Manipulation de base

// 1.1 Création d'un tableau avec notation littérale
const numbers = [1, 2, 3, 4, 5];
console.log("Tableau initial:", numbers);

// 1.2 Ajout d'un élément à la fin
numbers.push(6);
console.log("Après push(6):", numbers);

// 1.3 Retrait du premier élément
const firstElement = numbers.shift();
console.log("Élément retiré:", firstElement);
console.log("Après shift():", numbers);

// 1.4 Insertion d'un élément au début
numbers.unshift(0);
console.log("Après unshift(0):", numbers);

// 1.5 Retrait du dernier élément
const lastElement = numbers.pop();
console.log("Élément retiré:", lastElement);
console.log("Après pop():", numbers);

// Exercice 2: Méthodes fonctionnelles

// 2.1 Doubler les nombres avec map
const originalNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = originalNumbers.map(num => num * 2);
console.log("\nNombres doublés:", doubledNumbers);

// 2.2 Filtrer les nombres pairs
const evenNumbers = originalNumbers.filter(num => num % 2 === 0);
console.log("Nombres pairs:", evenNumbers);

// 2.3 Calculer la somme
const sum = originalNumbers.reduce((acc, num) => acc + num, 0);
console.log("Somme:", sum);

// Exercice 3: Recherche et tri

// 3.1 Trouver l'index d'un élément
const fruits = ['pomme', 'banane', 'orange', 'kiwi'];
const index = fruits.indexOf('orange');
console.log("\nIndex de 'orange':", index);

// 3.2 Trier des nombres
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log("Nombres triés:", sortedNumbers);

// 3.3 Trier des chaînes
const unsortedFruits = ['pomme', 'banane', 'orange', 'kiwi', 'abricot'];
const sortedFruits = [...unsortedFruits].sort();
console.log("Fruits triés:", sortedFruits);

// Exercice 4: Opérations avancées

// 4.1 Aplatir un tableau
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
console.log("\nTableau aplati:", flatArray);

// 4.2 Supprimer les doublons
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log("Tableau sans doublons:", uniqueArray);

// 4.3 Passage par référence
function addElement(arr, element) {
    arr.push(element);
    console.log("Dans la fonction:", arr);
}

const originalArray = [1, 2, 3];
console.log("Avant l'appel:", originalArray);
addElement(originalArray, 4);
console.log("Après l'appel:", originalArray); 