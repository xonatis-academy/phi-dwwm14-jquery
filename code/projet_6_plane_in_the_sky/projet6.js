/* 
Projet n°6:
----------
Créez un programme permettant d'afficher un avion dans le ciel (animation).
Vous utiliserez les ressources suivantes :
1. Image (à transposer sur l'arrière-plan)
https://cdn-icons-png.flaticon.com/512/1058/1058318.png
2. Gif (pour l'arrière-plan de votre page)
https://media2.giphy.com/media/4N1FZFE5AGO3qrUGkw/giphy.gif?cid=790b76111b79298379b682ed11ce96fbab9baf0149f49045&rid=giphy.gif&ct=g

Indice:
- Vous pouvez créer 1 seule fonction.
- Utilisez un événement du CLAVIER.
Pour vous aider à implémenter votre évenement clavier, voici le lien d'un site
https://keycode.info/
*/

// Préparation de la fonction "deplacer" et de la condition concernant les touches à presser
function deplacer(event) // event ou e nommé ainsi par convention, permettre au navigateur de renseigner des informations sur ce qui s'est passé
{
  var touche = event.which; // Pour savoir quelle touche a été pressée
  var image = $('img'); // Variable pour sélectionner l'image

  // Condition
  // Touche "ArrowLeft" (Voir les keycodes sur le site https://keycode.info)
  if (touche == 37) {
    // Position de l'élément, on fait une SOUSTRACTION de 5px en partant du bord gauche de l'écran et on déplace l'élément vers la droite 
    image.css('left', '-=5px'); 
  }
  // Touche "ArrowUp"
  else if (touche == 38) {
    // Position de l'élément, on fait une SOUSTRACTION de 5px en partant de la bordure haute de l'écran et on déplace l'élément vers le HAUT
    image.css('top', '-=5px'); 
  }
  // Touche "ArrowRight"
  else if (touche == 39) {
    // Position de l'élément, on fait une ADDITION de 5px en partant du bord gauche de l'écran et on déplace l'élément vers la droite
    image.css('left', '+=5px'); 
  }
  // Touche "ArrowDown"
  else if (touche == 40) 
  {
    // Position de l'élément, on fait une ADDITION de 5px en partant de la bordure haute de l'écran et on déplace l'élément vers le BAS
    image.css('top', '+=5px'); 
  }
}

// Déclenchement de l'événement (event) du clavier ET exécution de la fonction "deplacer"
$(document).keydown(deplacer);
