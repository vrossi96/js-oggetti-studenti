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
// Creo un elemento vuoto


//!Creare un oggetto con proprietà nome, cognome e età.
// Ho un object con 3 proprietà
const classe = {
   student: [
      {nome: 'Mario', cognome: 'Bros', eta: 20,},
      {nome: 'Luigi', cognome: 'Bros', eta: 20,},
      {nome: 'Pinco', cognome: 'Pallo', eta: 75,},
   ]

};

//Stampa in console tutto l'oggetto
const studentsArray = classe.student;
console.log(studentsArray);
console.log(studentsArray[0]);
console.log(studentsArray[1]);





//!Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Per ogni array...
for (let i = 0; i < studentsArray.length; i++){
   // Per ogni key in ogni array...
   for (let key in studentsArray[i]){
      // Stampo solo valori che non hanno la proprietà età
      if (!(key === 'eta')) {
         // Ad ogni ciclo viene creato un p
         let info = document.createElement('p');
         let valore = studentsArray[i][key];
         // Stampa il valore della key nell array (i)
         console.log(valore);
         
         info.innerText = key + ': ' + valore;
         container.appendChild(info);
      }
   }
}