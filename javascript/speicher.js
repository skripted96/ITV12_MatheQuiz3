"use strict";

function weiter(){
    if(fragen(spielstand)){
        spielstand ++;
    if(spielstand == 10){
        alert("Spiel beendet");
        spielstand = 1;
        }
    }
    localStorage.setItem("spielstand",spielstand);
}

function neu(){
    spielstand = 1;
    localStorage.setItem("Spielstand",spielstand);
}


let spielstand = 0;

if (localStorage.getItem("spielstand") == null){
   spielstand = 1;
}
else {
    spielstand = localStorage.getItem("spielstand");
}

naechsterzug.onclick = weiter;
neuesSpiel.onclick = neu;

