// 3 Schwierigkeitsgrade
// Einfach:	a * b 			Regex: \d+\*\d+
// Mittel:	a * b -+ c		Regex: \d+\*\d+[-+]\d+
// Schwer:	a * b -+ c * d	Regex: \d+\*\d+[-+]\d+\*[1-9]+
// Alle Zahlen werden zufällig generiert
// Nur ganze Zahlen
// 0 - 20

class Frage {
	frageRegex = [
		'/\d+\*\d+/g',
		'/\d+\*\d+[-+]\d+/g',
		'/\d+\*\d+[-+]\d+\*(1[0-9]||20||[2-9])/g'
	];

	frageString = [
		'\d*\d',
		'\d*\d?\d',
		'\d*\d?\d*\d'
	];

	zufallszahlGenerieren(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	schwierigkeitErmitteln(spielstand) {
		// Position des Spielers ermitteln
		// Feld 1-3 = Einfach
		// Feld 4-6 = Mittel
		// Feld 7-9 = Schwer
		if (spielstand < 10) {
			return 3;
		}
		else if (spielstand < 7) {
			return 2;
		}
		else if (spielstand < 4 && spielstand > 0) {
			return 1;
		}
		else {
			prompt("Fehler: Spielstand nicht im Bereicht von 1-9!");
		}
	}

	fragePruefen(frage, schwierigkeit) {
		if(frageRegex[schwierigkeit - 1].test(frage))
			return true;
		return false;
	}

	ergebnisBerechnen(frage) {
		var ergebnis = eval(frage);
		return ergebnis;
	}

	ergebnisPruefen(frage, ergebnis) {
		if (ergebnis == ergebnisBerechnen(frage))
			return true;
		return false;
	}
	
	frageGenerieren(spielstand) {
		let schwierigkeit = this.schwierigkeitErmitteln(spielstand);
		let frage = frageString[schwierigkeit - 1];

		let i = schwierigkeit;
		do {
			frage = frage.replace('\d', this.zufallszahlGenerieren(0, 20));
			i--;
		} while (i != -1);

		if (this.zufallszahlGenerieren(0, 1) == 1){
			frage.replace('?', '+');
		} else {
			frage.replace('?', '-');
		}

		if(fragePruefen(frage, schwierigkeit)){
			return frage;
		}
	}
}