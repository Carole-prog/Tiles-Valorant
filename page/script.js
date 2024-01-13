document.addEventListener('DOMContentLoaded', function () {
  var capBoxes = document.getElementsByClassName("cap-box");

  for (var i = 0; i < capBoxes.length; i++) {
    var capBox = capBoxes[i];
    var boutons = capBox.getElementsByTagName("button");

    for (var j = 0; j < boutons.length; j++) {
      var bouton = boutons[j];
      var des = document.getElementsByClassName("Description")[0]; // Accéder au premier élément de la collection

      if (bouton.classList.contains("smoke")) {
        bouton.addEventListener("mouseover", function () {
          var title = document.querySelector('.title');
          title.textContent = "Averse";
          var buttonDescription = document.querySelector('.button-description');
          buttonDescription.textContent = "Créez une nuée de fumée à l'impact pour masquer la vue et réduire la précision des ennemis.";
          // Appliquer les styles CSS à la classe .Description
          des.style.border = "20px solid #ff4666";
          des.style.backgroundColor = "white";

        });

      } else if (bouton.classList.contains("jump")) {
        bouton.addEventListener("mouseover", function () {
          var title = document.querySelector('.title');
          title.textContent = "Courant Ascendant";
          var buttonDescription = document.querySelector('.button-description');
          buttonDescription.textContent = "Permet de vous propulsez instantanément dans les airs.";
          // Appliquer les styles CSS à la classe .Description
          des.style.border = "20px solid #ff4666";
          des.style.backgroundColor = "white";
        });
      } else if (bouton.classList.contains("dash")) {
        bouton.addEventListener("mouseover", function () {
          var title = document.querySelector('.title');
          title.textContent = "Vent Arriere";
          var buttonDescription = document.querySelector('.button-description');
          buttonDescription.textContent = "Activez pour préparer une rafale de vent pendant une durée limitées. Réutilisez la compétence pour vous propulser dans la direction vers laquelle vous vous dirigez. Si vous êtres immobile, vous vous propulsez vers l'avant.";
          // Appliquer les styles CSS à la classe .Description
          des.style.border = "20px solid #ff4666";
          des.style.backgroundColor = "white";
        });
      } else if (bouton.classList.contains("ulti")) {
        bouton.addEventListener("mouseover", function () {
          var title = document.querySelector('.title');
          title.textContent = "Tempete de Lames";
          var buttonDescription = document.querySelector('.button-description');
          buttonDescription.textContent = "Equipez-vous d'un ensemble de couteaux extrêmement précis qui se rechargent lorsque vous éliminez un ennemi. Tirez pour lancer un seul couteau sur votre cible. Utilisez le tir secondaire pour lancer toutes les dagues restantes sur votre cible.";
          // Appliquer les styles CSS à la classe .Description
          des.style.border = "20px solid #ff4666";
          des.style.backgroundColor = "white";
        });
      }
      bouton.addEventListener("mouseout", function () {
        var title = document.querySelector('.title');
        title.textContent = "";
        var buttonDescription = document.querySelector('.button-description');
        buttonDescription.textContent = "";

        // Réinitialiser les styles CSS de la classe .Description
        des.style.border = "";
        des.style.backgroundColor = "";
      });
    }
  }
});
//Quand scroll haut bas image -> droite gauche
//voir si on peut pas l'animer et faire un svg
//Faire des dico ? Perso : [capacités]
//[Personnage(String) : [[Capacités(img),String],[Image Perso]],...]
//Faire des fonctions pour que sa soit plus jolie à voir
