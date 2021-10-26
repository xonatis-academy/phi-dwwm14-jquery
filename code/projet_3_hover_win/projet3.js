/* Projet n°3:
-----------
Pour les besoins d'un petit jeu ludique, créez 3 div de couleurs différentes : rouge, vert et jaune.
Ecrivez une fonction permettant à l'utilisateur d'identifier la case jaune.

Indice :
- Vous pouvez créer 1 seule fonction.
- Utilisez un événement de la souris (et informez l'utilisateur de son succès). 
*/

// Préparation de la fonction "alerter"
function alerter() {
  alert('Gagné !');
}

// Déclenchement de l'événement de la souris (exécution de la fonction alerter)
$('#yellow').mouseenter(alerter);