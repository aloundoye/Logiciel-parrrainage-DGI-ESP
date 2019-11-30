function viderChamps() {
    let tabChamps = new Array();

    tabChamps[0] = document.getElementById("prenom");
    tabChamps[1] = document.getElementById("nom");
    tabChamps[2] = document.getElementById("tel");

    for (champ of tabChamps)
        champ.value = "";
}

function viderChamp(nameChamp) {
    let elt = document.getElementById(nameChamp);
    elt.value = "";
}

function viderChamps() {
    let tabChamps = new Array();

    tabChamps[0] = document.getElementById("prenom");
    tabChamps[1] = document.getElementById("nom");
    tabChamps[2] = document.getElementById("tel");

    for (champ of tabChamps)
        champ.value = "";
}

function viderChamp(nameChamp) {
    let elt = document.getElementById(nameChamp);
    elt.value = "";
}