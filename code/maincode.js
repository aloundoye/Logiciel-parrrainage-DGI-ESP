var afficheCode = document.querySelector('#affCode');
var buttongen = document.getElementById('buttongen');
var caracteres =['A','B','C','D', 'E','F','G', 'H', 'I','J', 'K', 'L',
 'M','N','O','P','Q', 'R', 'S', 'T', 'U','V','W','X','Y','Z','1', '2', '3', '4', '5', '6', '7', '8', '9'];

function genereCode(){
    let code ="";
    caracteres = shuffle(caracteres);
    for(let i=0; i<10; i++){
        code += caracteres[i];
    }
    
    afficheCode.value = code;
}

// SHUFLLE FONCTION

function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}
buttongen.addEventListener("click", genereCode);