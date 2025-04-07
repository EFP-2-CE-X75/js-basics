// Exercice 1: déclaration de fonctions
function greet(name) {
  return `Hello, ${name}!`;
}

const calculateArea = (width, height) => {
  return width * height;
};

const isEven = number => number % 2 === 0;

// Test des fonctions
console.log("Exercice 1:");
console.log("greet('Alice'):", greet("Alice"));
console.log("calculateArea(5, 3):", calculateArea(5, 3));
console.log("isEven(4):", isEven(4));
console.log("isEven(5):", isEven(5));

// Exercice 2: paramètres et valeurs par défaut
const createUser = (name, age = 18, isActive = true) => {
  return {
    name,
    age,
    isActive
  };
};

// Test de la fonction
console.log("\nExercice 2:");
console.log("createUser('Bob'):", createUser("Bob"));
console.log("createUser('Charlie', 25, false):", createUser("Charlie", 25, false));

// Exercice 3: portée des fonctions
const globalVar = "global";

function testScope() {
  const localVar = "local";
  console.log("\nExercice 3:");
  console.log("globalVar dans la fonction:", globalVar);
  console.log("localVar dans la fonction:", localVar);
}

testScope();
console.log("globalVar en dehors de la fonction:", globalVar);
// console.log(localVar); // Erreur: localVar n'est pas définie

// Exercice 4: fonctions pures
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Test des fonctions pures
console.log("\nExercice 4:");
console.log("add(2, 3):", add(2, 3));
console.log("multiply(4, 5):", multiply(4, 5));
console.log("getFullName('John', 'Doe'):", getFullName("John", "Doe")); 