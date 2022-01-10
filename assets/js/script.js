// declare variables
var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var questionsEl = document.querySelector("#questions")
var inititalsEl = document.querySelector("#initials")
var questionsTi = document.querySelector(".questions-title")
var createUl = document.createElement("ul")

// question numer variables
var currentQue = 0;
//seconds starting-left
var secondsLeft = 75;

// hold time for interval
var holdTimer = 0;

//input penalty time
var penalty = 15;

// add score variable
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

            if(secondsLeft <= 0) {
                clearInterval(holdTimer);
                timeEl.textContent = "Time is up! Check score";
            }
        }, 1000);
    }
});

// render question to page
function render (currentQue) {
    questionsEl.innerHTML = "";
    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestions = questions[currentQue].Title;
        var userOptions = questions[currentQue].choices;
        questionsEl.textContent = userQuestions;
    }

    userOptions.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsEl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

}
