// Exercice 1: création et manipulation d'objets

// 1.1 Création d'un objet user avec notation littérale
const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isActive: true
};

// 1.2 Fonction updateUser avec spread operator
function updateUser(user, updates) {
  return {
    ...user,
    ...updates
  };
}

// 1.3 Fonction getUserInfo avec template literals
function getUserInfo(user) {
  return `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}, Actif: ${user.isActive}`;
}

// Tests Exercice 1
console.log("Exercice 1:");
console.log("User original:", user);
const updatedUser = updateUser(user, { age: 31, isActive: false });
console.log("User mis à jour:", updatedUser);
console.log("Info user:", getUserInfo(user));

// Exercice 2: méthodes d'objets

// 2.1 Objet bankAccount
const bankAccount = {
  _balance: 0, // Convention de nommage pour propriété "privée"
  
  deposit(amount) {
    this._balance += amount;
    return this._balance;
  },
  
  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Solde insuffisant");
    }
    this._balance -= amount;
    return this._balance;
  },
  
  getBalance() {
      return this._balance;
  }
};

// 2.2 Objet car
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
};

// Tests Exercice 2
console.log("\nExercice 2:");
bankAccount.deposit(1000);
console.log("Solde après dépôt:", bankAccount.getBalance());
try {
  bankAccount.withdraw(500);
  console.log("Solde après retrait:", bankAccount.getBalance());
} catch (error) {
  console.error(error.message);
}
console.log("Âge de la voiture:", car.getAge());

// Exercice 3: encapsulation et gestion d'état

// 3.1 Objet student
const student = {
  _grades: [], // Propriété "privée"
  
  get grades() {
    return [...this._grades]; // Retourne une copie pour protéger les données
  },
  
  set grades(newGrades) {
    if (!Array.isArray(newGrades)) {
      throw new Error("Les notes doivent être un tableau");
    }
    if (newGrades.some(grade => typeof grade !== 'number' || grade < 0 || grade > 20)) {
      throw new Error("Les notes doivent être des nombres entre 0 et 20");
    }
    this._grades = newGrades;
  },
  
  get average() {
    if (this._grades.length === 0) return 0;
    return this._grades.reduce((sum, grade) => sum + grade, 0) / this._grades.length;
  }
};

// 3.2 Objet timer
const timer = {
  _elapsedTime: 0,
  _intervalId: null,
  
  start() {
    if (this._intervalId) return;
    this._intervalId = setInterval(() => {
      this._elapsedTime++;
    }, 1000);
  },
  
  pause() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  },
  
  reset() {
    this.pause();
    this._elapsedTime = 0;
  },
  
  get formattedTime() {
    const minutes = Math.floor(this._elapsedTime / 60);
    const seconds = this._elapsedTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
};

// Tests Exercice 3
console.log("\nExercice 3:");
student.grades = [15, 18, 12];
console.log("Notes de l'étudiant:", student.grades);
console.log("Moyenne:", student.average);

timer.start();
setTimeout(() => {
  console.log("Temps écoulé:", timer.formattedTime);
  timer.pause();
  timer.reset();
}, 2000);

// Exercice 4: classes ES6+

// 4.1 Classe User
class User {
  constructor(name, age, email, isActive) {
    this._name = name;
    this._age = age;
    this._email = email;
    this._isActive = isActive;
  }
  
  get name() { return this._name; }
  set name(value) { this._name = value; }
  
  get age() { return this._age; }
  set age(value) { this._age = value; }
  
  get email() { return this._email; }
  set email(value) { this._email = value; }
  
  get isActive() { return this._isActive; }
  set isActive(value) { this._isActive = value; }
  
  getInfo() {
    return `Nom: ${this._name}, Age: ${this._age}, Email: ${this._email}, Actif: ${this._isActive}`;
  }
  
  static createFromObject(obj) {
    return new User(obj.name, obj.age, obj.email, obj.isActive);
  }
}

// 4.2 Classe Account (classe de base)
class Account {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this._createdAt = new Date();
  }
  
  get createdAt() {
    return this._createdAt;
  }
}

// 4.2 Classe BankAccount
class BankAccount extends Account {
  #balance = 0; // Champ privé
  
  constructor(accountNumber, owner, initialBalance = 0) {
    super(accountNumber, owner);
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Le montant doit être positif");
    }
    this.#balance += amount;
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Le montant doit être positif");
    }
    if (amount > this.#balance) {
      throw new Error("Solde insuffisant");
    }
    this.#balance -= amount;
    return this.#balance;
  }
  
  getBalance() {
    return this.#balance;
  }
}

// 4.3 Classe Student
class Student {
  #grades = []; // Champ privé
  
  constructor(name) {
    this.name = name;
  }
  
  get grades() {
    return [...this.#grades]; // Retourne une copie
  }
  
  set grades(newGrades) {
    if (!Array.isArray(newGrades)) {
      throw new Error("Les notes doivent être un tableau");
    }
    if (newGrades.some(grade => typeof grade !== 'number' || grade < 0 || grade > 20)) {
      throw new Error("Les notes doivent être des nombres entre 0 et 20");
    }
    this.#grades = newGrades;
  }
  
  get average() {
    if (this.#grades.length === 0) return 0;
    return this.#grades.reduce((sum, grade) => sum + grade, 0) / this.#grades.length;
  }
  
  addGrade(grade) {
    if (typeof grade !== 'number' || grade < 0 || grade > 20) {
      throw new Error("La note doit être un nombre entre 0 et 20");
    }
    this.#grades.push(grade);
  }
}

// Tests Exercice 4
console.log("\nExercice 4:");
const userInstance = new User("Alice", 25, "alice@example.com", true);
console.log("User instance:", userInstance.getInfo());

const bankAccountInstance = new BankAccount("123456", "Bob", 1000);
console.log("Solde initial:", bankAccountInstance.getBalance());
bankAccountInstance.deposit(500);
console.log("Solde après dépôt:", bankAccountInstance.getBalance());

const studentInstance = new Student("Charlie");
studentInstance.addGrade(15);
studentInstance.addGrade(18);
console.log("Notes de l'étudiant:", studentInstance.grades);
console.log("Moyenne:", studentInstance.average); 