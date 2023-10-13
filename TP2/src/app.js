"use strict";
// const conteneurMenu = document.getElementById('conteneurMenu') as HTMLDivElement;
const btnAjoutTache = document.getElementById('btnAjoutTache');
const conteneurTaches = document.getElementById('conteneurTaches');
const tache = document.getElementById('tache');
tache.focus();
// Permettre d'ajouter une tâche par le bouton ou par la touche "enter"
tache.addEventListener('keypress', (ev) => {
    ev.key == "Enter" ? ajoutTache() : "";
});
btnAjoutTache.addEventListener('click', ajoutTache);
// Créer la tâche
function creationTache() {
    // Création du block principale de la tâche (contenant le texte de la tâche et le bouton de suppression)
    const divTache = document.createElement('div');
    // La valeur entrée par l'usager
    const valeurTache = document.createElement('p');
    valeurTache.innerText = tache.value;
    // Bouton de suppression de la tâche
    const btnSupprimerTache = document.createElement('button');
    btnSupprimerTache.innerText = "Supprimer";
    btnSupprimerTache.addEventListener('click', () => divTache.remove());
    // Ajout des styles
    btnSupprimerTache.classList.add("btnRouge");
    divTache.classList.add("divTache");
    // Ajouter la tâche à la liste des tâches
    divTache.append(valeurTache, btnSupprimerTache);
    return divTache;
}
// Ajoute de la tâche au conteneur des tâches
function ajoutTache() {
    if (tache.value != "") {
        conteneurTaches.append(creationTache());
        tache.value = "";
    }
    tache.focus();
}
