var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var questionsEl = document.querySelector("#questions")
var inititalsEl = document.querySelector("#initials")
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