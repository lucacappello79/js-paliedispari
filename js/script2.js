let selectEl = document.getElementById("odd-or-even")
let inputEl = document.getElementById("user-selected-number")
let recapEl = document.getElementById("recap")
let sum;

recapEl.addEventListener("click", function(){

let userChoice = selectEl.value
let userNumber = inputEl.value
let sum = userNumber + computerNumber();

});



function computerNumber(cNumb) {

  return Math.floor(Math.random() * 5 + 1); //posso scrivere una cosa del genere?

}

function Odd() {

    if (sum % 2 !== 0){

        return false

    } else {

        return true
    } 
}
