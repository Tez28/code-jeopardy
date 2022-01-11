// declare variables

var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")
var nextBtn = document.getElementById("#next-btn")
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers")
var inititalsEl = document.querySelector("#initials");
var questionsTi = document.querySelector(".questions-title");

var finalScore = document.getElementById(".final-score");
var answerA = document.getElementById("#btn-A")
var answerB = document.getElementById("#btn-B")
var answerC = document.getElementById("#btn-C")
var answerD = document.getElementById("#btn-D")
var checkAnswer =  document.getElementById("#checkAnswer")

var holdTimer = 0;
var penalty = 15;
var scoreEl = 0;
var correctAns = 0;

// create quiz
var quiz = newQuiz(questions);

//display quiz
initiateQuiz();



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

function startQuiz () {
    console.log("Quiz Started")
    var startEl = document.querySelector(".start")
    startEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    questionIndex = 0;
    holdTimer = 75;

}

//trigger timer on start button
startButton.addEventListener("click", function (){

    
    
    startButton.onclick = startQuiz    
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
    showQuiz();
})

// present questions title and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionsTi.textContent = questions[questionIndex].Title;
    answerA.textContent = questions[questionsIndex].choices[0];
    answerB.textContent = questions[questionsIndex].choices[1];
    answerC.textContent = questions[questionsIndex].choices[2];
    answerD.textContent = questions[questionsIndex].choices[3];

}

// check answer for accuracy
function reviewAnswer(answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // add 1pt for correct
        correctAns++;
        // inform tester correct
        checkAnswer.textContent = "Your Correct!";
    } else {
        // if wrong answer selected inform and subtract time
        hold -= 15;
        timeEl.textContent = holdTimer;
        checkAnswer.textContent = "Incorrect";
    }

    questionIndex++;
    // this repeats sequence for all questions
    if (questionIndex < questions.length) {
        nextQuestion();
    }else {
        // once final question reached end quiz
        endQuiz();
    }
}