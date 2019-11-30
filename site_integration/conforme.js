function conforme() {
    let tabChamps = new Array();
    let nonVide = new Array();
    let ok = new Array();
    let reponse1 = "";
    let reponse2 = "";

    tabChamps[0] = document.getElementById("prenom").value;
    tabChamps[1] = document.getElementById("nom").value;
    tabChamps[2] = document.getElementById("tel").value;

    let i = 0;
    while (i < 3) {
        if (tabChamps[i] === "")
            nonVide[i] = false;

        else
            nonVide[i] = true;
        i++;
    }

    ok[0] = isNaN(Number(tabChamps[0]));
    ok[1] = isNaN(Number(tabChamps[1]));
    ok[2] = !isNaN(Number(tabChamps[2])) && tabChamps[2].length == 9;

    let okay = (ok[0] && ok[1] && ok[2]);
    let nonVides = (nonVide[0] && nonVide[1] && nonVide[2]);

    if (okay && nonVides) {
        alert("Vos informations ont bien été prises en compte");

    } else {
        if (!nonVides) {
            reponse1 += "Aucun champ ne doit être vide !";
        }

        if (!ok[0]) {
            reponse2 += "\n Le prénom saisi doit être une chaîne de carctères !";
            viderChamp("prenom");
        }
        if (!ok[1]) {
            reponse2 += "\n Le nom saisi doit être une chaîne de carctères !";
            viderChamp("nom");
        }

        if (!ok[2]) {
            reponse2 += "\n Le numéro de téléphone saisi doit être une chaîne de 9 chiffres !";
            viderChamp("tel");
        }

        alert(`ERREUR(S) : \n${reponse1} \n ${reponse2}`);

    }
}