# Solutions des exercices sur la gestion des erreurs

## Exercice 1: Try...Catch de base

### Solution 1

```javascript
function parseJSON(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return { success: true, data: parsed };
    } catch (error) {
        return { 
            success: false, 
            error: {
                message: 'Erreur de parsing JSON',
                details: error.message
            }
        };
    }
}
```

- Utilisation de `try...catch` pour gérer les erreurs de parsing JSON
- Retourne un objet structuré avec le statut et les données/erreur
- Permet de gérer proprement les erreurs de syntaxe JSON

## Exercice 2: types d'erreurs

### Solution 2

```javascript
function validateUser(user) {
    if (!user.name || !user.email) {
        throw new Error('Le nom et l\'email sont requis');
    }
    
    if (typeof user.age !== 'number') {
        throw new TypeError('L\'âge doit être un nombre');
    }
    
    if (user.age < 0) {
        throw new RangeError('L\'âge ne peut pas être négatif');
    }
    
    return true;
}
```

- Utilisation de différents types d'erreurs selon le contexte
- `Error` pour les erreurs générales
- `TypeError` pour les erreurs de type
- `RangeError` pour les valeurs hors limites
- Gestion des erreurs avec `instanceof` pour afficher des messages appropriés

## Exercice 3: gestion asynchrone

### Solution 3

```javascript
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() > 0.5;
      if (shouldFail) {
        reject(new Error('Impossible de récupérer les données utilisateur'));
      } else {
        resolve({ name: 'John Doe', age: 30 });
      }
    }, 1000);
  });
}

async function getUserData() {
  try {
    const userData = await fetchUserData();
    return { success: true, data: userData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

- Utilisation de `Promise` pour gérer les opérations asynchrones
- Simulation d'une requête avec `setTimeout`
- Gestion des erreurs avec `try...catch` dans une fonction async
- Retour d'un objet structuré avec le statut et les données/erreur

## Exercice 4: Erreurs personnalisées

### Solution 4

```javascript
class ValidationError extends Error {
  constructor(field, value, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
  }
}

function validateForm(formData) {
  if (!formData.name) {
    throw new ValidationError('name', formData.name, 'Le nom est requis');
  }
  
  if (!formData.email) {
    throw new ValidationError('email', formData.email, 'L\'email est requis');
  }
  
  if (!formData.email.includes('@')) {
    throw new ValidationError('email', formData.email, 'Email invalide');
  }
  
  return true;
}
```

- Création d'une classe d'erreur personnalisée qui étend `Error`
- Ajout de propriétés spécifiques (champ, valeur)
- Utilisation de `instanceof` pour identifier le type d'erreur
- Affichage détaillé des erreurs de validation
