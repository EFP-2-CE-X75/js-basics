# Exercices sur les fonctions

## Exercice 1: déclaration de fonctions

1. Créez une fonction `greet` qui prend un paramètre `name` et retourne "Hello, [name]!"
2. Créez une fonction `calculateArea` qui prend deux paramètres `width` et `height` et retourne l'aire d'un rectangle
3. Créez une fonction `isEven` qui prend un nombre et retourne `true` si le nombre est pair, `false` sinon

## Exercice 2: paramètres et valeurs par défaut

1. Créez une fonction `createUser` qui prend trois paramètres:
   - `name` (obligatoire)
   - `age` (optionnel, valeur par défaut: 18)
   - `isActive` (optionnel, valeur par défaut: true)
2. La fonction doit retourner un objet avec ces propriétés

## Exercice 3: portée des fonctions

1. Créez une variable `globalVar` avec la valeur "global"
2. Créez une fonction `testScope` qui:
   - Déclare une variable `localVar` avec la valeur "local"
   - Affiche la valeur de `globalVar`
   - Affiche la valeur de `localVar`
3. Appelez la fonction et observez les résultats

## Exercice 4: fonctions pures

1. Créez une fonction pure `add` qui prend deux nombres et retourne leur somme
2. Créez une fonction pure `multiply` qui prend deux nombres et retourne leur produit
3. Créez une fonction pure `getFullName` qui prend `firstName` et `lastName` et retourne le nom complet
