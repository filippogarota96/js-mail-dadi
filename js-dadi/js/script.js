// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var player = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random()*6) + 1;

console.log('Player: ' + player);
console.log('Computer: ' + computer);

if (player > computer) {
  console.log('Player wins!');
} else if (player < computer) {
  console.log('Computer wins!');
} else {
  console.log('Draw!');
}
