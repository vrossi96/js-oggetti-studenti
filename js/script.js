/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/
// Prendo il container
const container = document.getElementById('container');


//!Creare un oggetto con proprietà nome, cognome e età.
// Ho un object con 3 proprietà
const classe = [
   {
      nome: 'Mario',
      cognome: 'Bros', 
      eta: 20,
   },
   {
      nome: 'Luigi',
      cognome: 'Bros', 
      eta: 20,
   },
   {
      nome: 'Pinco', 
      cognome: 'Pallo', 
      eta: 75,
   },
];

//Stampa in console tutto l'oggetto
console.table(classe);
console.log(classe[0]);
console.log(classe[1]);




//!Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Per ogni array...
/*
for (let i = 0; i < studentsArray.length; i++){
   console.table(studentsArray[i]);
   // Per ogni key in ogni array...
   for (let key in studentsArray[i]){
      // Stampo solo valori che non hanno la proprietà età
      if (!(key === 'eta')) {
         // Ad ogni ciclo viene creato un p
         let info = document.createElement('p');
         // Stampa il valore della key nell array (i)
         let valore = studentsArray[i][key];
         
         info.innerText = key + ': ' + valore;
         container.appendChild(info);
      }
   }
}
*/