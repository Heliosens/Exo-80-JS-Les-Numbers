

//exo 1
let isInt = document.getElementById('is-integer');

if(Number.isInteger(isInt)){
    isInt.innerHTML += " est un nombre entier."
}
else {
    isInt.innerHTML += " n'est pas un nombre entier."
}

//exo 2
let isNn = document.getElementById('is-nan');
console.log(isNn);
if(isNaN(parseInt(isNn.innerHTML))){
    isNn.innerHTML += " est NaN ( Not a Number )";
}
else {
    isNn.innerHTML += " est un nombre.";
}

//exo 3
let parseF = document.getElementById('parse-float');
let result = parseFloat(parseF.innerHTML);

result = result * 46;
parseF.innerHTML += " " + result;

// exo 4
let parsInt = document.getElementById('parse-int');
let result2 = Math.trunc(parseInt(parsInt.innerHTML) / 46) ;

parsInt.innerHTML += " " + result2;

// exo 5
let fix = document.getElementById('to-fixed');
fix.innerHTML = parseFloat(fix.innerHTML).toFixed(2).toString();
