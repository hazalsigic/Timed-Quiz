var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var startDisplay = document.querySelector("#start-screen");
var questionDisplay = document.querySelector("#questions")
var currentTime;

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
    questionDisplay.classList.remove("hide");
    startTimer();
});


