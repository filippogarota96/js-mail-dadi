// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var player = Math.floor(Math.random() * 7);
var computer = Math.floor(Math.random()*7);

if (player > computer) {
  console.log('Player wins!');
} else if (player < computer) {
  console.log('Computer wins!');
} else {
  console.log('Draw!');
}
