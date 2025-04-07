// Exercice 1: déclaration de variables
const name = "Alice";
let age = 25;
const PI = 3.14159;
const isAdult = age >= 18;

// Affichage des résultats
console.log("Exercice 1:");
console.log("name:", name, "type:", typeof name);
console.log("age:", age, "type:", typeof age);
console.log("PI:", PI, "type:", typeof PI);
console.log("isAdult:", isAdult, "type:", typeof isAdult);

// Exercice 2: types de variables
const user = {
  name: "Bob",
  age: 30,
  isActive: true,
  hobbies: ["reading", "sports", "music"]
};

// Affichage des types
console.log("\nExercice 2:");
console.log("user.name type:", typeof user.name);
console.log("user.age type:", typeof user.age);
console.log("user.isActive type:", typeof user.isActive);
console.log("user.hobbies type:", typeof user.hobbies);

// Exercice 3: portée des variables
const global = "I am global";

function testScope() {
  const local = "I am local";
  return {
    local,
    global
  };
}

// Test de la portée
console.log("\nExercice 3:");
const result = testScope();
console.log("local:", result.local);
console.log("global:", result.global);

// Exercice 4: bonnes pratiques
const INTEREST_RATE = 0.02;

const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    }
    return "Insufficient balance";
  }
};

// Test des opérations
console.log("\nExercice 4:");
console.log("Initial balance:", bankAccount.balance);
console.log("After deposit of 500:", bankAccount.deposit(500));
console.log("After withdrawal of 200:", bankAccount.withdraw(200)); 