window.onload = function() {
    let btn = document.querySelector("button[type='button']"); // représente le bouton secondaire (dernier) de la page correspondante
    let autoFillBtn = document.getElementById("auto-fill");
    var showPassSpan = document.getElementById("toggle-pass");

    // Remplir automatiquement les champs lors de l'enregistrement (Beta test)
    autoFill(autoFillBtn);

    // Afficher/cacher le mot de passe
    togglePass(showPassSpan);
    
    // Rédiriger l'utilisateur vers la page de connexion/enregistrement
    btn.addEventListener("click", function()
    {
        btn.textContent == "Nouveau compte" ?  window.location.href = "/register" : window.location.href = "/login";
    });
}

function autoFill(controlleur) {
    if(controlleur != undefined) // le bouton n'existe pas dans la page de connexion
    {
        controlleur.addEventListener("click", function() {
           document.getElementById("nom").value = "Test";
           document.getElementById("courriel").value = "test@exemple.ca"; 
           document.getElementById("password").value = "Pass123";
        });
    }
}

function togglePass(controlleur) {
    if(controlleur != undefined)
    {
        passInput = document.getElementById("password");
        controlleur.addEventListener("click", function() {
            if(passInput.type == "password" && passInput.value.length > 0)
            {
                passInput.type = "text";
                controlleur.textContent = "Cacher le mot de passe";
            }
            else {
                passInput.type = "password";
                controlleur.textContent = "Afficher le mot de passe";
            }
        });
    }
}