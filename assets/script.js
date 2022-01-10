// declare variables
var secondsLeft = 75;
var currentQue = 0;
var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var nextBtn = document.getElementById("#next-btn")
var questionsEl = document.querySelector("#questions");
var inititalsEl = document.querySelector("#initials");
var questionsTi = document.querySelector(".questions-title");
var createUl = document.createElement("ul");
var finalScore = document.getElementById(".final-score");
var holdTimer = 0;
var penalty = 15;
var scoreEl = 0;
var questionsAns = 0;



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
            timeEl.textContent = + secondsLeft;
            initiateQuest()
            if(secondsLeft <= 0) {
                clearInterval(holdTimer);
                timeEl.textContent = "Time is up! Check score";
            }
        }, 1000);
    }
})

function initiateQuest() {
    document.questionsTi.innerHTML = questions[].Title;
    choicesEl.innerHTML = questions[].choices;


    



};
