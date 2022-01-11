// declare variables

var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var nextBtn = document.getElementById("#next-btn")
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers")
var inititalsEl = document.querySelector("#initials");
var questionsTi = document.querySelector(".question-title");

var finalScore = document.getElementById(".final-score");

var checkAnswer = document.getElementById("checkAnswer")

var holdTimer;
var time = 75;
var penalty = 15;
var scoreEl = 0;
var correctAns = 0;
var secondsLeft = "";
var questionIndex = 0;



const questions = [
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 2",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 3",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 4",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 5",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 6",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 7",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 8",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 9",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 10",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
]


// add event listener for start quiz
//trigger timer on start button

function startQuiz () {
    console.log("Quiz Started");
    var startEl = document.querySelector(".start");
    startEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    questionIndex = 0;
    holdTimer = setInterval(clocktime, 1000);
    timeEl.textContent = time
    initiateQuest();

}
function clocktime() {
    time --;
    timeEl.textContent = time
    if (time <= 0) {
        timeEl.textContent = time;
        endQuiz();
    }

}

// present questions title and choices
function initiateQuest() {
    var currentQuestion = questions[questionIndex]
    questionsTi.textContent = currentQuestion.Title;
    choicesEl.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "classChoices")
        choiceBtn.setAttribute("value", currentQuestion.choices[i])
        choiceBtn.textContent = i+ 1 + ": " + currentQuestion.choices[i]
        choiceBtn.onclick = nextQuestion
        choicesEl.appendChild(choiceBtn)
    }

}
// checks answers for correct or incorrect
function nextQuestion() {
    console.log("inside next question")
    if ( this.value === questions[questionIndex].answer) {
        // add 1pt for correct
        correctAns++;
        // inform tester correct
        checkAnswer.textContent = "Your Correct!";
    } else {
        // if wrong answer selected inform and subtract time
        time -= 15;
        timeEl.textContent = time;
        checkAnswer.textContent = "Incorrect";
    }

    questionIndex++;
    // this repeats sequence for all questions
    if (questionIndex === questions.length) {
        endQuiz();
    }else {
        // once final question reached end quiz
        initiateQuest();
    }

}

startButton.onclick = startQuiz;

//ends quiz and takes to final leader board
function endQuiz() {
    console.log ("Quiz has Ended!");
    var endEl = document.getElementById("end-screen");
    questionsEl.setAttribute("class" , "hide");
    endEl.removeAttribute("class");
    clearInterval(holdTimer)
    var finalSc = document.getElementById("final-score");
    finalSc.textContent = ("Your Score is: " + time);

}