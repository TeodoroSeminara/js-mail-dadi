// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// ‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

// const { forwardRef } = require("react");

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Buon lavoro e buon divertimento! 🧙‍♂️

// const partyInvite = ["mario.rossi@gmail.com", "luca.bianchi@gmail.com", "giulia.verdi@gmail.com", "andrea.neri@gmail.com", "sara.romano@gmail.com", "marco.ferrari@gmail.com"];
// const insertEmail = prompt("Inserisci la tua email");
// console.log("Email accettate nel party", partyInvite);
// let correct = false;

// for (let i = 0; i < partyInvite.length; i++) {

//     if (insertEmail === partyInvite[i]) {

//         correct = true;
//     }

// }

// if (correct) {
//     console.log("Benveuto, entra pure")

// } else {
//     console.log("Non sei in lista, va via!")
// }



//2 Secondo esercizio 

const playerScore = Math.floor(Math.random() * 6) + 1;
const pcScore = Math.floor(Math.random() * 6) + 1;

console.log("L'umano lancia", playerScore, "La macchina lancia", pcScore);


if (playerScore < pcScore) {
    console.log(`Ha vinto la macchina, con il punteggio di ${pcScore}`  );

} else if (playerScore === pcScore) {

    console.log(`Parità peccato, con il punteggio di ${pcScore} e ${playerScore} `);
    

} else {
    console.log(`Ha vinto l'umano, con il punteggio di ${playerScore}`);
}