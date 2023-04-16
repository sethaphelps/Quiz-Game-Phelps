var startBtn = document.getElementById('start-button');
var pEl = document.querySelector('p.hidden');
var sectionLeft = document.getElementById('section-left');
var startBtn = document.querySelector("start.button")

var winCounter = 0;
var lossCounter = 0;
var win = false;
var timer;
var timerCount;

// Array of trivia questions
var triviaQuestions = ["empty question 1","empty question 2", "empty question 3", "empty question 4"]

// Array of trivia answers
var triviaAnswers = []

// function is called when page loads
function init() {
    getWins();
    getLosses();
}

// start button calls this function

function startGame() {
    win = false;
    timerCount = 30
}

// Function when answer is correct
function winGame() {
    winCounter++
    setWins()
}

// Function when answer is incorrect
function loseGame() {
    lossCounter++
    setLosses()
}

// Function to start and stop timer
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


function myCallbackFunction() {
    console.log('callback ran!');
   // document.getElementById('section-left').replaceChildren();
    //pEl.classList.remove('hidden');
    var myNewPEl = document.createElement('p');
    myNewPEl.classList.add('newPEl');
    myNewPEl.textContent = 'Hello, World!';
    myNewPEl.setAttribute('id', '1234');
    sectionLeft.append(myNewPEl);
}

startBtn.addEventListener('click', myCallbackFunction);
