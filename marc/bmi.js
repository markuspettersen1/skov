/*
The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)

BMI = weight (kg) / (height * height (m))

Underweight < 18.5
Normal (healthy weight) 18.5 - 25
Overweight 25 - 30
Obesity > 30
*/

// Bootstrap form validation script
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          calculateBMI(); // < IMPORTANT! Function is called directly after succesful validation!
          event.preventDefault();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// global variables
var input, bmi, msg;

// eventhandling
msg = document.getElementById('msg');

// No need for the button action anymore, since Bootstrap form validation takes over ;-)!
//button = document.getElementById('submit');
//button.addEventListener('click', calculateBMI);

function calculateBMI() {
  'use strict';
  /* eslint-disable no-console */ //<temporarily enable or disable eslint check for console
  // all logic goes here...
  //console.log('Function executed!');
  // preventing form submission
  event.preventDefault();
  // get form input
  input = document.getElementsByTagName('input');
  //console.log(input); // is array
  let w = input[0].value; //local variable let
  let h = input[1].value;
  console.log('User input: ' + w + ', ' + h);
  // calculate BMI
  bmi = (w / (h * h)).toFixed(2);
  // test beregningen
  console.log(bmi);
  // output til brugeren:
  if (bmi < 18.5) {
    msg.innerHTML = 'Underweight (BMI: ' + bmi + ')';
    msg.className = 'alert-light p-4';
  } else if (bmi <= 25) {
    msg.innerHTML = 'Normal weight (BMI: ' + bmi + ')';
    msg.className = 'alert-success p-4';
  } else if (bmi <= 30) {
    msg.innerHTML = 'Overweight (BMI: ' + bmi + ')';
    msg.className = 'alert-warning p-4';
  } else {
    msg.innerHTML = 'Obesity (BMI: ' + bmi + ')';
    msg.className = 'alert-danger p-4';
  }
}
