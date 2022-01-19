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
const student = {
   nome: 'Mario',
   cognome: 'Bros',
   eta: 20,
}
//Stampa in console tutto l'oggetto
console.log(student);

//Stampa in console i singoli dati dell'oggetto
console.log('Nome: ', student.nome);
console.log('Cognome: ', student.cognome);
console.log('Età: ', student.eta);

//!Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Per ogni proprietà in student
for (let key in student) {
   // Creo un elemento p
   let info = document.createElement('p');
   // Inserisco in p il valore della proprietà di student
   info.innerText = key + ': ' + student[key];
   console.log(`--Stampa ${key} con il for--`)
   console.log(student[key]);
   // Inserisco nel container il p completo
   container.appendChild(info);
}


