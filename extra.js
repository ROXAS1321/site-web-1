

    maBaliseDiv=document.getElementByld("jeu")
    console.log(maBaliseDiv)
    // affiche ce qui est contenu dans la balise

    let jeu=document.getElementByld("jeu")
    jeu.addEventListener("click", function () {
        let body=document.querySelector("body")
        // On change la couleur de fond de la page
        body.style.backgroudColor= "red" 
    });
