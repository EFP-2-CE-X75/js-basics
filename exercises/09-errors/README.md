# Exercices sur la gestion des erreurs

## Exercice 1: Try...Catch de base

1. Créez une fonction `parseJSON` qui prend une chaîne JSON en paramètre
2. Utilisez `try...catch` pour gérer les erreurs de parsing
3. Si le parsing réussit, retournez l'objet parsé
4. Si le parsing échoue, retournez un objet d'erreur avec un message approprié

## Exercice 2: Types d'erreurs

1. Créez une fonction `validateUser` qui prend un objet utilisateur en paramètre
2. Vérifiez que l'objet a les propriétés requises (nom, email, age)
3. Lancez des erreurs spécifiques selon le type de problème :
   - `TypeError` si l'âge n'est pas un nombre
   - `RangeError` si l'âge est négatif
   - `Error` personnalisée si le nom ou l'email est manquant

## Exercice 3: Gestion asynchrone

1. Créez une fonction `fetchUserData` qui simule une requête asynchrone
2. Utilisez `Promise` pour gérer le succès et l'échec
3. En cas d'échec, rejetez la promesse avec une erreur appropriée
4. Créez une fonction `getUserData` qui utilise `async/await` pour appeler `fetchUserData`
5. Gérez les erreurs avec `try...catch`

## Exercice 4: Erreurs personnalisées

1. Créez une classe `ValidationError` qui étend `Error`
2. Ajoutez des propriétés spécifiques (champ, valeur)
3. Créez une fonction `validateForm` qui utilise cette classe d'erreur
4. Testez la fonction avec des données valides et invalides
5. Affichez les détails de l'erreur dans la console
