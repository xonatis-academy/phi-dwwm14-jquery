/* Projet n°4:
-----------
Implémentation du fameux jeu du "Morpion"
1. Créez le cadre HTML du jeu (table).
Ecrivez un programme permettant à 2 utilisateurs de jouer ensemble et permettant ainsi de les identifier.

Indice :
Vous devrez créer 2 fonctions et 2 événements respectivement.
*/

/* DEFINITION DU JOUEUR
- Les éléments concernés : tous les boutons du tableau
- fonctionnalité : cocher une case (au choix)
- Un événement (click)
*/

// Création de la variable joueur en cours (valeur par défaut)
var joueurEncours = 'X';

// Préparation de la fonction pour cocher les cases (1er click dans le jeu)
function cocher() {
  $(this).html(joueurEncours);
}

// Déclenchement de l'événement (event) click et exécution de la fonction préparée
$('table button').click(cocher);


/* CHANGEMENT DE JOUEUR
- Les éléments concernés : Le bouton id=change-btn
- fonctionnalité : changer de joueur
- Un événement (click)
*/

// Préparation de la fonction pour changer de joueur
function changerJoueur() {
  if (joueurEncours == 'X')
  {
    joueurEncours = 'O';
  }
  else
  {
    joueurEncours = 'X';
  }

}

/* Rappels :
= est utilisé pour l'assignation ou attribution (ex: variables)
== égalité stricte est utilisé pour vérifier/comparer des valeurs
=== égalité stricte également, utilié pour vérifier/comparer des valeurs et des types
*/

// Déclenchement de l'événement (event) click et exécution de la fonction préparée
$('#change-btn').click(changerJoueur);
