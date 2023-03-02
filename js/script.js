/* 
Struttura HTML con un input per l'utente e un bottone di verifica
Collego il campo di input e il bottone di verifica e a due diverse variabili
Aggiungo un evento di click al bottone
quando clicco:
Creo una variabile da associare al valore inserito dall'utente nel campo di input, per comodità
Creo una condizione IF in cui eseguo la mia funzione.

Genero una funzione con un nome e un parametro tra parentesi
Creo un ciclo for per verificare se la parola è un palindromo (trovare formula perchè da solo sto qui fino al mese prossimo)
Se la condizione è negativa allora il valore "ritornato" sarà falso e non soddisferà la condizione if del mio evento click
Se la condizione è soddisfatta allora il valore ritornato sarà vero e soddisferà la condizione if del mio evento click

Se il parametro inserito nella funzione è vero allora stampo il messaggio adeguato*/



let inputEl = document.getElementById("user-generated-word");
let recapEl = document.getElementById("recap");


recapEl.addEventListener("click", function(){

    let parola = inputEl.value;

    if (palindroma(parola)) {

        console.log("parola palindroma");

    } else {

        console.log("parola non palindroma");

    }
});



function palindroma(word) {

    for (let i = 0; i < word.length / 2; i++) {

      if (word[i] !== word[word.length - 1 - i]) {
        
        return false;//posso scriverlo cosi?

      }

    }

    return true;//necessario mettere true? chiedere

  }
