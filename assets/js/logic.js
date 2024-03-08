var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var startDisplay = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions")
var displayedQuestion = document.querySelector("#question-title")
var choicesScreen = document.querySelector("#choices")
var currentTime;
var questionIndex = 0


//function to start the timer when start button clicked
function startTimer() {
    var currentTime = 75; 
    timeDisplay.textContent = currentTime;
    var timerInterval = setInterval(function() {
        currentTime--; 
        timeDisplay.textContent = currentTime;

        if (currentTime <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startButton.addEventListener("click",function(){
    startDisplay.classList.add("hide");
    questionScreen.classList.remove("hide");
    startTimer();
    displayQuestion(questionIndex);
})

function displayQuestion(questionIndex) {
    var question = quizQuestions[questionIndex];
    displayedQuestion.textContent = question.question;
    choicesScreen.innerHTML = "";

    question.choices.forEach((choice) => {
        var button = document.createElement("button");
        button.textContent = choice;
        choicesScreen.appendChild(button);
        button.classList.add("choice-button");

        button.addEventListener("click", function() {
            checkAnswer(choice, question.answer);
        });
    });
}
