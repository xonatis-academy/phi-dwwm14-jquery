/* 
1. Ecrire la fonction qui va calculer les 20% de réduction (attacher cette fonction avec le clic du bouton)
2. Afficher le montant obtenu après la réduction
3. Lorsque le résultat est inférieur ou égal à 50, afficher le résultat en "vert"
4. Lorsque le résultat est supérieur à 50, afficher le résultat en "rouge"
*/

function calculer() 
{
  // On crée la variable (espace qui va contenir une valeur) équivaut à la syntaxe JS : var input = document.getElementById('typing-input);
  var input = $('#typing-input'); // c'est similaire à un contenant ou un vase
  
  // On récupère la valeur entrée dans le champ input par l'utilisateur
  var contenu = input.val(); // c'est le contenu du vase

  // On créé une variable "resultat" qui va contenir l'opération obtenue par multiplication du contenu saisi et du pourcentage de réduction 
  var resultat = contenu * 0.8; 

    // On créé la variable qui va contenir le résultat obtenu suite au calcul de la réduction
  var div = $('#result-div');

  // Affichage HTML avec définition du résultat 
  div.html(resultat);

  // Afficher le résultat en vert si le montant final est inférieur ou égal à 50
/*    
    si (resultat est inferieur ou égal à 50)
    {
    je veux que ma div qui contient mon résultat s'affiche en vert ;
    }
    sinon
    {
        je veux que ma div contenant mon resultat s'affiche en rouge
    }
 */
    if (resultat <= 50)
    {
        div.css('color', 'green');
    }
    else // Afficher le résultat en rouge si le montant final est supérieur à 50
    {
        div.css('color', 'red');
    }  
}

// Création de la variable correspondant au bouton équivaut à la syntaxe JS var ou let = document.getElementById('calcul-btn');
var bouton = $('#calcul-btn');

// On déclenche l'évènement "click" qui va par conséquent exécuter la fonction "calculer"
bouton.click(calculer);

