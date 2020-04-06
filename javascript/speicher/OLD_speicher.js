

var spielstand = 0;
var frage = new Frage();
var fragen;

function weiter(){
    if(spielstand != 10){
        alert("Spielstand: " + spielstand);
        fragen = frage.frageGenerieren(spielstand);
        let eingabe = prompt(fragen);    
        if(frage.ergebnisPruefen(fragen, eingabe))
            {
                 spielstand ++;
                 alert("Richtig!");
            }
        else
            {
                alert("Falsch!");
            }
        
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
    alert("Spielstand wurde auf 1 gesetzt");
}


if (localStorage.getItem("spielstand") == null){
   spielstand = 1;
}
else {
    spielstand = localStorage.getItem("spielstand");
}

naechsterzug.onclick = weiter;
neuesSpiel.onclick = neu;

