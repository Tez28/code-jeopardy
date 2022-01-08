// declare variables
var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var questionsEl = document.querySelector("#questions")
var inititalsEl = document.querySelector("#initials")

// time variables

//seconds starting-left
var secondsLeft = 75;

// hold time for interval
var holdTimer = 0;

//input penalty time
var penalty = 15;




var questions = [
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
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
    {
        Title: "Question 1",
        choices: ["A", "B", "C", "D" ],
        answer: "A"
    },
]
// add event listener for start quiz

function startQuiz () {
    console.log("Quiz Started")
    var startEl = document.querySelector(".start")
    startEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")

}


startButton.onclick = startQuiz

//trigger timer on start button
startButton.addEventListener("click", function (){

    if(holdTimer === 0) {
        holdTimer = setInterval(function(){
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;

            if(secondsLeft <= 0) {
                clearInterval(holdTimer);
                quizDone();
                timeEl,textContent = "Time is up! Check score";
            }
        }, 1000);
    }
})