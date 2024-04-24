

    maBaliseDiv=document.getElementById("jeu")
    console.log(maBaliseDiv)
    // affiche ce qui est contenu dans la balise

    let jeu=document.getElementById("jeu")
    jeu.addEventListener("click", function () {
        let body=document.querySelector("body")
        // On change la couleur de fond de la page
        body.style.backgroudColor= "red" 
    });

    let monBouton = document.getElementById("monBouton");
    monBouton.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le bouton")
        let body=document.querySelector("body")
       if (body.style.background=== "purple") {
        body.style.background="red"
       }else {
        body.style.background="purple"
       }
    });
