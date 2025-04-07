// Exercice 1: if/else
const checkAge = age => {
  if (age >= 18) {
    return "majeur";
  } else {
    return "mineur";
  }
};

const getGrade = note => {
  if (note >= 16) return "A";
  if (note >= 14) return "B";
  if (note >= 12) return "C";
  if (note >= 10) return "D";
  return "E";
};

const isLeapYear = year => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};

// Test des fonctions
console.log("Exercice 1:");
console.log("checkAge(20):", checkAge(20));
console.log("checkAge(15):", checkAge(15));
console.log("getGrade(17):", getGrade(17));
console.log("getGrade(11):", getGrade(11));
console.log("isLeapYear(2020):", isLeapYear(2020));
console.log("isLeapYear(2021):", isLeapYear(2021));

// Exercice 2: switch
const getDayName = dayNumber => {
  switch (dayNumber) {
    case 1:
      return "lundi";
    case 2:
      return "mardi";
    case 3:
      return "mercredi";
    case 4:
      return "jeudi";
    case 5:
      return "vendredi";
    case 6:
      return "samedi";
    case 7:
      return "dimanche";
    default:
      return "jour invalide";
  }
};

const getSeason = month => {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "hiver";
    case 3:
    case 4:
    case 5:
      return "printemps";
    case 6:
    case 7:
    case 8:
      return "été";
    case 9:
    case 10:
    case 11:
      return "automne";
    default:
      return "mois invalide";
  }
};

const calculate = (a, b, operation) => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "division par zéro impossible";
    default:
      return "opération invalide";
  }
};

// Test des fonctions
console.log("\nExercice 2:");
console.log("getDayName(3):", getDayName(3));
console.log("getDayName(8):", getDayName(8));
console.log("getSeason(6):", getSeason(6));
console.log("getSeason(13):", getSeason(13));
console.log("calculate(5, 3, '+'):", calculate(5, 3, "+"));
console.log("calculate(5, 0, '/'):", calculate(5, 0, "/"));

// Exercice 3: opérateurs logiques
const isValidUser = (age, email) => {
  return age >= 18 && email.includes("@");
};

const canVote = (age, nationality, isResident) => {
  return age >= 18 && (nationality === "FR" || isResident);
};

const isValidPassword = password => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  );
};

// Test des fonctions
console.log("\nExercice 3:");
console.log("isValidUser(20, 'test@test.com'):", isValidUser(20, "test@test.com"));
console.log("isValidUser(15, 'test@test.com'):", isValidUser(15, "test@test.com"));
console.log("canVote(20, 'FR', false):", canVote(20, "FR", false));
console.log("canVote(20, 'US', true):", canVote(20, "US", true));
console.log("isValidPassword('Password123'):", isValidPassword("Password123"));
console.log("isValidPassword('pass'):", isValidPassword("pass"));

// Exercice 4: opérateur ternaire
const getDiscount = amount => {
  return amount > 100 ? amount * 0.1 : 0;
};

const formatMessage = (message, maxLength) => {
  return message.length > maxLength
    ? message.slice(0, maxLength) + "..."
    : message;
};

const getStatus = code => {
  return code >= 200 && code < 300
    ? "success"
    : code >= 300 && code < 400
    ? "redirect"
    : "error";
};

// Test des fonctions
console.log("\nExercice 4:");
console.log("getDiscount(150):", getDiscount(150));
console.log("getDiscount(50):", getDiscount(50));
console.log(
  'formatMessage("Hello World", 5):',
  formatMessage("Hello World", 5)
);
console.log(
  'formatMessage("Hi", 5):',
  formatMessage("Hi", 5)
);
console.log("getStatus(200):", getStatus(200));
console.log("getStatus(301):", getStatus(301));
console.log("getStatus(404):", getStatus(404)); 