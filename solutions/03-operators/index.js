// Exercice 1: opérateurs arithmétiques
const calculate = (a, b) => {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: b !== 0 ? a / b : "Division par zéro impossible",
    remainder: b !== 0 ? a % b : "Division par zéro impossible"
  };
};

// Test de la fonction
console.log("Exercice 1:");
console.log("calculate(10, 5):", calculate(10, 5));
console.log("calculate(10, 0):", calculate(10, 0));

// Exercice 2: opérateurs de comparaison
const compareNumbers = (a, b) => {
  return {
    isGreater: a > b,
    isLess: a < b,
    isEqual: a == b,
    isStrictlyEqual: a === b
  };
};

// Test de la fonction
console.log("\nExercice 2:");
console.log("compareNumbers(5, 5):", compareNumbers(5, 5));
console.log("compareNumbers(5, '5'):", compareNumbers(5, "5"));

// Exercice 3: opérateurs logiques
const checkAge = age => age >= 18 && age <= 65;

const isValidUser = user => {
  return user.age >= 18 && user.hasValidEmail && user.isActive;
};

// Test des fonctions
console.log("\nExercice 3:");
console.log("checkAge(20):", checkAge(20));
console.log("checkAge(70):", checkAge(70));

const user1 = { age: 20, hasValidEmail: true, isActive: true };
const user2 = { age: 17, hasValidEmail: true, isActive: true };
console.log("isValidUser(user1):", isValidUser(user1));
console.log("isValidUser(user2):", isValidUser(user2));

// Exercice 4: opérateurs d'affectation
const updateCounter = initial => {
  let counter = initial;
  counter++;
  counter *= 2;
  return counter;
};

const calculateTotal = prices => {
  let total = 0;
  for (let price of prices) {
    total += price * 1.2; // Ajout de 20% de TVA
  }
  return total;
};

// Test des fonctions
console.log("\nExercice 4:");
console.log("updateCounter(5):", updateCounter(5));
console.log("calculateTotal([10, 20, 30]):", calculateTotal([10, 20, 30])); 