// set up variables

let correctAnswer = 0;
let wrongAnswer = 0;
let startTime = 60;
let intervalId;

$(document).ready(function() {

// set up click events 
$("#start").on("click", run);
$("#submit").on("click",stop);
// create function when start button is clicked  
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  create function to decrease the game time
  function decrement() {
    startTime--;
    console.log(startTime);
    $("#timeLeft").html(startTime);
     //  Once number hits zero...
    if (startTime === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
      
    }
  }
  // create a stop function
  function stop() {
    clearInterval(intervalId); 
    
      if ($(".true").checked) {
        correctAnswer ++;
      } else {
        wrongAnswer ++;
        console.log(correctAnswer);
      } 
    
  }

  

  // create a function and loop to check answers and add to right/wrong variables
  


});
