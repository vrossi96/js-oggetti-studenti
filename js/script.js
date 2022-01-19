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
const inputName = document.getElementById('name');
const inputLastname = document.getElementById('lastname');
const inputAge = document.getElementById('age');
const inputButton = document.getElementById('refresh');



//!Creare un oggetto con proprietà nome, cognome e età.
// Ho un object con 3 proprietà
const classe = [
   { nome: 'Mario', cognome: 'Bros', eta: 20, },
   { nome: 'Luigi', cognome: 'Bros', eta: 20, },
   { nome: 'Pinco', cognome: 'Pallo', eta: 75, },
];

//Stampa in console tutto l'oggetto
console.table(classe);
console.log(classe[0]);
console.log(classe[1]);


// Creo nuovo oggetto da pushare in seguito
const newUser = {
   nome: 'nome',
   cognome: 'cognome', 
   eta: 'età',
};

// Chiedo i dati per nome cognome ed età
inputButton.addEventListener('click', function() {
   const newName = inputName.value;
   const newLastname = inputLastname.value;
   const newAge = inputAge.value;
   newUser.nome = newName;
   newUser.cognome = newLastname;
   newUser.eta = newAge;
   // Riassegno i valori dell'oggetto
   console.log(newUser);
   
   // Inserisco l'oggetto nell'array
   classe.push(newUser);
   console.table(classe);
   //!Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
   // Per ogni array nell array classe
   for (let i = 0; i < classe.length; i++){
      //* console.table(classe[i]);
      // Prendo ogni valore nell'array 
      for (let key in classe[i]) {
         if (!(key === 'eta')) {
            // Ad ogni ciclo viene creato un p
            let info = document.createElement('p');
            // Stampa il valore della key nell array (i)
            let valore = classe[i][key];
            
            info.innerText = key + ': ' + valore;
            container.appendChild(info);
         }
      }
   }
})





