/* 
Projet n°2:
Ecrivez un programme pour ouvrir et fermer un cadenas.
Vous vous servirez des images suivantes :
1. Cadenas fermé
https://cdn-icons-png.flaticon.com/512/841/841097.png
2. Cadenas ouvert
https://cdn-icons-png.flaticon.com/512/880/880779.png

Indice :
Vous devrez écrire 2 fonctions et utiliser 2 évènements.
*/

// Préparation des fonctions à exécuter ultérieurement (via un event)
function open () {
  $('#lock').attr('src', 'https://cdn-icons-png.flaticon.com/512/880/880779.png');
}

function close () {
  $('#lock').attr('src', 'https://cdn-icons-png.flaticon.com/512/841/841097.png');
}

// Déclenchement de l'event click (rattaché à 2 boutons distincts) et exécution consecutive des 2 fonctions
$('#open-btn').click(open);
$('#close-btn').click(close);
