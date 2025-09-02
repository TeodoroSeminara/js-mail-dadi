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