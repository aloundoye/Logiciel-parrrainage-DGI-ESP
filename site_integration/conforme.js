function conforme() {
    let tabChamps = new Array();
    let nonVide = true;
    let i = 0;
    tabChamps[0] = document.getElementById("nom").value;
    tabChamps[1] = document.getElementById("prenom").value;
    tabChamps[2] = document.getElementById("code").value;
    tabChamps[3] = document.getElementById("tel").value;
    while (nonVide == true && i <= 3) {
        if (tabChamps[i] === "")
            nonVide = false;
        i++;
    }
    let ok = (isNaN(Number(tabChamps[0])) &&
        isNaN(Number(tabChamps[1])) &&
        !isNaN(Number(tabChamps[3])) &&
        tabChamps[2].length == 10 &&
        tabChamps[3].length == 9);

    if (ok && nonVide) {
        alert("Vos informations ont bien été prises en compte");
        return true;
    } else {
        alert("Erreur : Vos informations ne sont pas conformes");
        return false;
    }
}