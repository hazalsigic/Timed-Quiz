var scoreList = document.getElementById("highscores");

//getting scores from local storage
 var scores = JSON.parse(localStorage.getItem("score-table"));

 //creating li for each object coming from local storage
 scores.forEach(function(scoreObj) {
     var li = document.createElement("li");
     li.textContent = scoreObj.userInitials + ": " + scoreObj.score;
     scoreList.appendChild(li);
 });