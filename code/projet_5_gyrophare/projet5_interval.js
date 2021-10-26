/* 
Projet n°5:
-----------
Créez un programme permettant d'allumer un "gyrophare".
Implémenter un bouton et un élément HTML dont le comportemement rappellera un vrai gyrophare.

Indice :
- Vous devrez créer 2 fonctions (la 1ère contient une condition et la seconde utilisera un setInterval).
- Pas besoin d'image mais juste un effet sur une balise classique
*/

// Préparation de la fonction pour gérer le changement de couleur
function changeColor() 
{
  if ($('div').css('color') == 'rgb(255, 0, 0)') // Si l'état de base est vérifié / peut impliquer un Mode Setter par ricochet
  {
    $('div').css('color', 'rgb(0, 0, 255)'); // Si la vérification de base est vraie, changer la couleur de base
  }
  else // Sinon
  {
    $('div').css('color', 'rgb(255, 0, 0)'); // Le programme va appliquer de nouveau la couleur rouge sur la Div
  }
}

// Préparation de la fonction pour faire clignoter le gyrophare
function clignoter() 
{
  setInterval(changeColor, 500); // setInterval ou setTimeout attendent 2 paramètres : (instructions + le délai en millisecondes) exemple : setTimeout(mafonction, 5000)
  // setInterval va se comporter comme une boucle implicite tant qu'il n'y aura pas d'instructions pour l'arrêter
}

// Déclenchement de l'événement (event) au clic ET exécution de la fonction "clignoter"
$('button').click(clignoter);

