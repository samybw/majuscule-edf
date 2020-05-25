
var phrase = process.argv[2];
var i = 0
resultat = "";
while (i < phrase.length) {

    if ( i % 2 == 0 ){
       resultat += phrase[i].toLowerCase();
    }else{ 
     resultat += phrase[i].toUpperCase();
    }
    i++
    
}
console.log(resultat);













/*for (let i = 0; i < phrase.length; i++){
    if ( i % 2 == 0 ){
        console.log(phrase[i].toLowerCase());
    }else{ 
     console.log(phrase[i].toUpperCase());
    }
}*/
/*var i = 0
while (i < phrase.length) {
    if ( i % 2 == 0 ){
        console.log(phrase[i].toLowerCase());
    }else{ 
     console.log(phrase[i].toUpperCase());
    }
    i++
}*/


