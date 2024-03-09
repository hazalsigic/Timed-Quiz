//Variables
var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var startDisplay = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions")
var displayedQuestion = document.querySelector("#question-title");
var choicesScreen = document.querySelector("#choices");
var  feedbackScreen = document.querySelector("#feedback");
var finalScoreScreen = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials")
var questionIndex = 0;
var score = 0;
var currentTime;



//creating the timer
var timerInterval = setInterval(function() {
    currentTime--; 
    timeDisplay.textContent = currentTime;

    if (currentTime <= 0) {
        clearInterval(timerInterval);
    }
}, 1000);


//function to start the timer and display questions when start button clicked
function startTimer() {
    currentTime = 75; 
    timeDisplay.textContent = currentTime;
    timerInterval;
}

startButton.addEventListener("click",function(){
    startDisplay.classList.add("hide");
    questionScreen.classList.remove("hide");
    startTimer();
    displayQuestion(questionIndex);
})

//funtion to generate questions
function displayQuestion(questionIndex) {
    var question = quizQuestions[questionIndex];
    var answer = question.answer

    displayedQuestion.textContent = question.question;
    choicesScreen.innerHTML = "";

    question.choices.forEach((choice) => {
        var button = document.createElement("button");
        button.textContent = choice;
        choicesScreen.appendChild(button);
        button.classList.add("choice-button");



        button.addEventListener("click", function() {
            checkAnswer(choice, answer);
        });
    });
}

//function to check if the answer is correct or not
function checkAnswer(choice, answer) {
    questionIndex++;
    console.log(choice)
    if (choice === answer) {
        score++;
        document.getElementById("feedback").classList.remove("hide");
        feedbackScreen.textContent = "Correct!";   
    } else {
        currentTime -= 5;
        document.getElementById("feedback").classList.remove("hide");
        feedbackScreen.textContent = "Wrong!";
        if (currentTime <= 0) {
        endQuiz();
        }
    }
    if (questionIndex < quizQuestions.length) {
        displayQuestion(questionIndex);
    } else {
        endQuiz();
    }
}

//end of quiz and saving the score
function endQuiz () {
    clearInterval(timerInterval);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    finalScoreScreen.textContent = score;

    submitButton.addEventListener("click", function() {
        var userInitials = initialsInput.value;
        var scoreTable = JSON.parse(localStorage.getItem("score-table"));
        scoreTable.push({ userInitials, score: score });
        localStorage.setItem("score-table", JSON.stringify(scoreTable));
        window.location.href = "highscores.html";
    })
}