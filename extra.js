

    maBaliseDiv=document.getElementByld("jeu")
    console.log(maBaliseDiv)
    // affiche ce qui est contenu dans la balise

    let jeu=document.getElementByld("jeu")
    jeu.addEventListener("click", function () {
        let body=document.querySelector("body")
        // On change la couleur de fond de la page
        body.style.backgroudColor= "red" 
    });

    let monBouton = document.getElementById("monBouton");
    monBouton.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le bouton")
        body.style.backgroudColor= "red"
    });
