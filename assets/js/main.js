// La pagina espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
console.log("ciao Ale");

//genera 5 numeri casualmente es. da 1 a 10
var correctNumber = []
var number = ""
for (let i = 0; i < 5; i++) {
	do {
		number = random(1, 10+1);
	} while (correctNumber.includes(number));
	correctNumber.push(number);
}
console.log(correctNumber);
//stampa i 5 numeri sul html e avvia un timer di 30s o 3 per comodita
//chiedi tramite prompt di inserire tutti i numeri trasmessi in precedenza
//controllo che i numeri siano corretti
//stampare numeri iniziali, i numeri scritti e infine quali erano corretti o e quali no


function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}