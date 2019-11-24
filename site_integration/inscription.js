function randomBg() {
    let tab = new Array();
    let contenu = document.getElementById("nom");
    contenu.value = "";

    for (let i = 0; i < 6; i++) {
        if (i !== 3)
            tab[i] = "background" + (i + 1) + ".jpg";

        else
            tab[i] = "background" + (i + 1) + ".png";
    }

    let bg = Math.floor(Math.random() * tab.length);

    document.body.style.backgroundImage = "url(" + tab[bg] + ")";
}

function viderChamps() {
    let tabChamps = new Array();

    tabChamps[0] = document.getElementById("nom");
    tabChamps[1] = document.getElementById("prenom");
    tabChamps[2] = document.getElementById("code");
    tabChamps[3] = document.getElementById("tel");

    for (champ of tabChamps)
        champ.value = "";
}