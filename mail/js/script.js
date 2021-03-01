// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Chiedo la mail all'utente

var userMail = prompt('Scrivi qui la tua mail!');

// creo una lista di mail a cui deve corrispondere la mail utente

var mailList = ['dr.no@gmail.com', 'mario.rossi@hotmail.com', 'gorthan9606@gmail.com', 'sandro61@libero.it' ];

// controllo la corrispondenza con la lista
var mailValida;

for (var i = 0; i < mailList.length; i++) {
  if (userMail == mailList[i]) {
    mailValida = userMail;
  }
}


if (mailValida == userMail) {
  console.log('Accesso consentito!');
} else {
  console.log('Accesso negato!');
}
