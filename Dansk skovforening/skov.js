//Globale

//Event

//Funksjoner

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// globale variabler - synlige for hele skriptet

var questions, score, feedback, button;

score = 0;
button = document.getElementById('start');
button.addEventListener('click', runQuiz);

feedback = document.getElementById('result');

// 2-dimensionel array
questions = [
 ['Hvor mange uger kan det tage for frugt og grønt at nedbrydes i skoven?', 5], // questions[0]
 ['Hvor mange måneder kan det tage for papir og aviser, at nedbrydes i skoven?', 12],
 ['Hvor mange år kan det tage for en alluminiumsdåse at nedbrydes i skoven?', 500],
 ['Hvor mange år kan det tage for en glasflaske at nedbrydes i skoven?', 1000000],
 ['Er det en god ide at smide skrald i skoven? ', 'nej']
     ];

// console.log(questions[0][0]); udgiver How many moons does Earth have? i konsolen.

function runQuiz(){
// loop igennem array questions
for(var i=0; i<questions.length; i++){
 askQuestion(questions[i]); // iterationer med kald til funktionen med parameter variablen i
};  
giveFeedback(); // kalder funktionen feedback, når quizzet er afsluttet
}

function askQuestion(array){ // funktion med argument
//console.log(array[1]);
// lokal variable med nøgleord let
let answer = parseInt(prompt(array[0],'')); //skaber en prompt dialog med mulighed for bruger input
// parseInt forvandler en string til et helt nummer (integer)
if(answer === array[1]){ // i tilfælde af et rigtig svar
     alert('Det er rigtig svaret!');
     score++;
} else { // forkert svar
    alert('Desværre, det rigtige svar er ' + array[1])
}
}  

function giveFeedback(){
feedback.innerHTML = 'You got ' + score + ' out of ' + questions.length + ' questions right!';
button.removeEventListener('click', runQuiz); // quiz er afsluttet og kan ikke startes igen.
}


// Tilmeld
