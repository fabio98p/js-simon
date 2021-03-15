// La pagina espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
console.log("ciao Ale");

//genera 5 numeri casualmente es. da 1 a 10
var randomNumber = [];
var number = "";
for (let i = 0; i < 5; i++) {
	do {
		number = random(1, 10 + 1);
	} while (randomNumber.includes(number));
	randomNumber.push(number);
}
console.log(randomNumber, "randomnumber");
//stampa i 5 numeri sul html e avvia un timer di 30s o 3 per comodita
$(".begin").click(function () {
	$(".random-numbers").html(randomNumber.toString())
	setTimeout(function () {
		$(".random-numbers").html("")
		setTimeout(function () {
			//chiedi tramite prompt di inserire tutti i numeri trasmessi in precedenza e fare il controllo del caso
			//rubato malissimo al progetto campominato
			var playerNumber = []
			var userNumber
			var observer = true

			for (let i = 1; i <= 5 ; i++) {
				observer = true
				//controllo che i numeri siano corretti
				do {
					if (observer) {
						observer = false
						userNumber = parseInt(prompt("scrivi un numero da 1 a 10", "1"));
					}
					else {
						userNumber = parseInt(prompt("hai sbagliato a scrivere, scrivi un altro numero da 1 a 10", "1"));
					}
				} while (playerNumber.includes(userNumber) || isNaN(userNumber) || userNumber < 1 || userNumber >= 10);
				playerNumber.push(userNumber)
			}
			//stampare numeri iniziali, i numeri scritti e infine quali erano corretti o e quali no, in questo caso li distinguo tra rosso e verde
			var risultato = 0
			for (let i = 1; i <= 5 ; i++) {
				if (randomNumber.includes(playerNumber[i-1])) {
					$(".result-numbers").append(`<div class="indovinato">${i},</div>`);
					risultato++
				}else{
					$(".result-numbers").append(`<div class="fallito">${i},</div>`);
				}
			}
			$(".random-numbers").html(randomNumber.toString())
			$(".player-numbers").html(playerNumber.toString())
			$(".result").html(`Hai azzeccato ${risultato} numeri`)
		}, 3000)
	}, 3000)
});



function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}