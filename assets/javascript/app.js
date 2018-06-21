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
    if (startTime === 0) {
      stop();   
    }
  }
  // create a stop function
  function stop() {
    clearInterval(intervalId); 
    // let score = $("#radio");
      if ($(".true1:checked").val()) {
        correctAnswer ++;
      } else {
        wrongAnswer ++;
        console.log(correctAnswer);
      } console.log(wrongAnswer);
      if ($(".true2:checked").val()) {
        correctAnswer ++;
      } else {
        wrongAnswer ++;
        console.log(correctAnswer);
      } console.log(wrongAnswer);
      if ($(".true3:checked").val()) {
        correctAnswer ++;
      } else {
        wrongAnswer ++;
        console.log(correctAnswer);
      } console.log(wrongAnswer);
      if ($(".true4:checked").val()) {
        correctAnswer ++;
      } else {
        wrongAnswer ++;
        console.log(correctAnswer);
      } console.log(wrongAnswer);
      $("#results").append("Correct Answers: " , correctAnswer, "<br>" , "Wrong answers: ", wrongAnswer);
  }


});
