// declare variables

var startButton = document.querySelector(".start-btn")
var timeEl = document.querySelector(".time") 
var choicesEl   = document.querySelector(".choices")

var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers")
var inititalsEl = document.querySelector("#initials");
var questionsTi = document.querySelector(".question-title");
var leaderEl = document.querySelector("#leader")
var submit = document.getElementById("submit");
// var endEl = document.getElementById("end-screen");
var finalScore = document.getElementById("#final-score");

var checkAnswer = document.getElementById("checkAnswer");
var leaderSC = [];

var holdTimer;
var time = 75;
var penalty = 15;
var scoreEl = 0;
var correctAns = 0;
var secondsLeft = "";
var questionIndex = 0;



const questions = [
    {
        Title: "How much did DC Comics pay for the rights to Superman?",
        choices: ["$130", "$10", "$300", "$500" ],
        answer: "$130"
    },
    {
        Title: "When was the 1st Marvel comic published?",
        choices: ["1925", "1947", "1939", "1919" ],
        answer: "1939"
    },
    {
        Title: "In what Country did S.H.I.E.L.D begin operations?",
        choices: ["Egypt", "U.S.A.", "Algeria", "Kuwait" ],
        answer: "Egypt"
    },
    {
        Title: "What did the Comics Code Authority ban the depiction of in the 60's?",
        choices: ["Leprechauns", "Werewolves and Vampires", "Unicorns", "Disco Clowns" ],
        answer: "Werewolves and Vampires"
    },
    {
        Title: "What was the title of Andy Warhols' unapproved Batman movie?",
        choices: ["Adventures of Lex Luthor", "Superman v The Retaliators", "Super Troopers", "Batman Dracula" ],
        answer: "Batman Dracula"
    },
    {
        Title: "When Batman sits on the Mobius Chair and asks it who the Joker is what does he learn?",
        choices: ["No one", "There are 3", "His long lost brother is the Joker", "Donnie Darko is the Joker" ],
        answer: "There are 3"
    },
    {
        Title: "What power did Superman not originally have?",
        choices: ["Flight", "Strength", "X-ray vision", "Superspeed" ],
        answer: "Flight"
    },
    {
        Title: "In what city was Luke Cage raised?",
        choices: ["Charleston", "Brooklyn", "Harlem", "Stockton" ],
        answer: "Harlem"
    },
    {
        Title: "What Acquatic creature can Acquanman not control completely",
        choices: ["Angel Fish", "Baracudas", "Crabs", "Dolphins" ],
        answer: "Dolphins"
    },
    {
        Title: "What super-hero movie should've never been made?",
        choices: ["Green Lantern", "Superman", "Acquaman", "Deadpool" ],
        answer: "Green Lantern"
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
    clearInterval(holdTimer);
    

};

function newSubmit (event){
    event.preventDefault();
    var highScore = document.createElement("li");
    highScore.setAttribute("class" ,"leadlist");
    highScore.innerText = inititalsEl.value;
    leaderEl.appendChild(highScore);
    localStorage.setItem(highScore, JSON.stringify(highScore));

    

}


function showScore() {
    var userScore = JSON.parse(localStorage.getItem(highScore));
}



submit.addEventListener("click", newSubmit);

function style () {
    document.body.style.backgroundImage = "url('/assets/img/Marvel-Vs.-DC.jpg')"

}