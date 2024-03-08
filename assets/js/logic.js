var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var startDisplay = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions")
var displayedQuestion = document.querySelector("#question-title")
var choicesScreen = document.querySelector("#choices")
var  feedbackScreen = document.querySelector("#feedback")
var currentTime;
var questionIndex = 0;
var score = 0;


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
        //end the quizz
        }
    }
    if (questionIndex < quizQuestions.length) {
        displayQuestion(questionIndex);
    } else {
        //end the quizz
    }
}

