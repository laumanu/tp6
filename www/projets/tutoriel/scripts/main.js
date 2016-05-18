
 (function(){
     "use strict";
     var monTitre = document.querySelector('h1');
monTitre.textContent = 'Bonjour tous le monde';


var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
    
    if(localStorage.getItem('nom')==="null" || isEmpty(monNom)){
       
        
       if(!localStorage.getItem('nom')) localStorage.setItem('nom','inconnu');
        
    }
    else{
          localStorage.setItem('nom',monNom); 
            
        }
    
    monTitre.textContent = 'Mozilla est cool, ' + localStorage.getItem('nom', monNom);
    
 
}



monBouton.onclick = function() {
  définirNomUtilisateur();
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
 })();