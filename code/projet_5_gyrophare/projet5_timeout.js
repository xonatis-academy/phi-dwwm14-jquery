/* 
Projet n°5: (Méthode avec setTimeout)
-----------
Créez un programme permettant d'allumer un "gyrophare".
Implémenter un bouton et un élément HTML dont le comportemement rappellera un vrai gyrophare.

Indice :
- Vous devrez créer 2 fonctions (la 1ère contient une condition et la seconde utilisera un setInterval).
- Pas besoin d'image mais juste un effet sur une balise classique
*/

// Préparation de la fonction "clignoter" (contenant la condition pour changer les couleurs)
function clignoter()
{
  if ($('div').css('color') == 'rgb(255, 0, 0)')
  {
    $('div').css('color', 'rgb(0, 0, 255');
  }
  else
  {
    $('div').css('color', 'rgb(255, 0, 0)');
  }

  setTimeout(clignoter, 500); // Boucle implicite
}

// Déclenchement de l'événement (event) au clic ET exécution de la fonction "clignoter"
$('button').click(clignoter);