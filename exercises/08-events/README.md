# Exercices sur les événements

## Exercice 1: Attachement d'écouteurs d'événements

Utiliser les différentes méthodes pour attacher des écouteurs d'événements.

1. Attacher un écouteur d'événement "click" au bouton avec l'id "btn1" en utilisant la propriété `onclick`
2. Attacher un écouteur d'événement "click" au bouton avec l'id "btn2" en utilisant `addEventListener`
3. Attacher un écouteur d'événement "mouseover" au bouton avec l'id "btn3" qui affiche un message dans la console
4. Attacher un écouteur d'événement "keydown" à l'input avec l'id "input1" qui affiche la touche pressée dans la console

## Exercice 2: Gestion des événements

Manipuler les objets événements et leurs propriétés.

1. Attacher un écouteur "click" au bouton avec l'id "btn4" qui affiche dans la console :
   - Le type d'événement
   - La position X et Y de la souris
   - L'élément cible de l'événement
2. Attacher un écouteur "keyup" à l'input avec l'id "input2" qui affiche dans la console :
   - La touche pressée
   - La valeur actuelle de l'input
3. Attacher un écouteur "submit" au formulaire avec l'id "form1" qui empêche l'envoi par défaut et affiche les données du formulaire dans la console

## Exercice 3: Événements et DOM

Combiner les événements avec la manipulation du DOM.

1. Attacher un écouteur "click" au bouton avec l'id "btn5" qui :
   - Crée un nouveau paragraphe
   - Ajoute le texte "Nouveau paragraphe créé au clic"
   - L'ajoute à la div avec l'id "content1"
2. Attacher un écouteur "input" à l'input avec l'id "input3" qui :
   - Récupère la valeur de l'input
   - Met à jour le texte d'un paragraphe avec l'id "output1"
3. Attacher un écouteur "click" au bouton avec l'id "btn6" qui :
   - Bascule la classe "active" sur un élément avec l'id "toggle1"
   - Affiche dans la console si l'élément a la classe "active"

## Exercice 4: Événements avancés

Utiliser des concepts plus avancés de gestion d'événements.

1. Attacher un écouteur "click" au bouton avec l'id "btn7" qui :
   - Crée une liste non ordonnée
   - Ajoute 3 éléments de liste avec des numéros
   - L'ajoute à la div avec l'id "content2"
   - Supprime l'ancienne liste si elle existe
2. Attacher un écouteur "click" au bouton avec l'id "btn8" qui :
   - Arrête la propagation de l'événement
   - Empêche le comportement par défaut
   - Affiche un message dans la console
3. Attacher un écouteur "click" à la div avec l'id "container1" qui :
   - Utilise la délégation d'événements pour gérer les clics sur les boutons à l'intérieur
   - Affiche dans la console quel bouton a été cliqué
