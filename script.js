var startBtn = document.getElementById("start-button");
var sectionLeft = document.getElementById("section-left");
var answerBtnArray = document.querySelectorAll(".answerBtn");
var buttonContainer = document.getElementById("buttonContainer");
var questions = document.getElementById("questions");
var mainContainer = document.querySelector(".trivia");
var timerElement = document.getElementById("timer-count");

var winCounter = 0;
var lossCounter = 0;

var timer;
var timerCount;

// counter to hold the current question
var currQuestionIndex = 0;

// Trivia questions
var triviaQuestions = [
  {
    question: "In The Matrix, what color pill does Neo take?",
    choices: ["a. red", "b. blue", "c. black", "d. green"],
    answer: "a. red",
  },
  {
    question:
      "In what movie did Tom Hanks score his for Academy Award nomination?",
    choices: ["a. Forrest Gump", "b. Big", "c. Greyhound", "d. Toy Story"],
    answer: "b. Big",
  },
  {
    question: "Which one of these films was directed by Quentin Tarantino",
    choices: ["a. Speed", "b. The Grudge", "c. Castaway", "d. Reservoir Dogs"],
    answer: "d. Reservoir Dogs",
  },
  {
    question:
      "What movie did Steven Spielberg win his first Oscar for Best Director",
    choices: ["a. Jurrasic Park", "b. Jaws", "c. Schindler's List", "d. E.T."],
    answer: "c. Schindler's List",
  },
  {
    question:
      "What famous L.A. landmark is heavily featured in Rebel Without a Cause?",
    choices: [
      "a. the Hollywood sign",
      "b. Griffith Observatory",
      "c. Rodeo Drive",
      "d. Pink's Hotdogs",
    ],
    answer: "b. Griffith Observatory",
  },
  {
    question: "What Hollywood movie star plays themself in Zombieland?",
    choices: [
      "a. Bill Murray",
      "b. Woody Harrelson",
      "c. Emma Stone",
      "d. Rosario Dawson",
    ],
    answer: "a. Bill Murray",
  },
  {
    question:
      "In Risky Business, what Bob Segar song did Tom Cruise famously lip-sync to in his underwear",
    choices: [
      "a. Night Moves",
      "b. Shame on the Moon",
      "c. Like a Rock",
      "d. Old Time Rock and Roll",
    ],
    answer: "d. Old Time Rock and Roll",
  },
  {
    question: "What is the name of Quint's shark-hunting boat in Jaws?",
    choices: [
      "a. The Orca",
      "b. Gone Fishin'",
      "c. Lost at Sea",
      "d. Shark Fin",
    ],
    answer: "a. The Orca",
  },
  {
    question: "What is the first movie ever to be rated PG-13?",
    choices: ["a. Dirty Dancing", "b. Red Dawn", "c. Batman", "d. Lionheart"],
    answer: "b. Red Dawn",
  },
  {
    question:
      "What Martin Scorsese movie holds the all-time record for F-bombs?",
    choices: [
      "a. The Departed",
      "b. The Irishman",
      "c. Goodfellas",
      "d. The Wolf of Wall Street",
    ],
    answer: "d. The Wolf of Wall Street",
  },
];

// start button calls this function
function startGame() {
  win = false;
  timerCount = 30;
  mainContainer.setAttribute("style", "display: block");
  showNextQuestion();
}

// function to bring up question to user
function showNextQuestion() {
  questions.textContent = triviaQuestions[currQuestionIndex].question;
  for (var i = 0; i < 4; i++) {
    answerBtnArray[i].textContent =
      triviaQuestions[currQuestionIndex].choices[i];
  }
}

// function to determine if user selected correct answer
function gradeUserChoice(event) {
  if (event.target.matches("button")) {
    console.log("event.target.textContent is", event.target.textContent);
    winCounter++
    // check if the user selected right
    // run the winGame function
    // else run the lossGame function
    // in either case
  } else {
    timerCount -=3
  }

  // if the target of the event was not a button, don't do anything.
  // ...
}

// function is called when page loads
function init() {
  getWins();
  getLosses();
}

// Function to start and stop timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        // clearInterval(timer);
        winGame();
      }
    }
    if (timerCount >= 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startTimer);
buttonContainer.addEventListener("click", gradeUserChoice);
