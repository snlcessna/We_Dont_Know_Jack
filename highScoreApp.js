'use strict';

var highScores = [];
var tbody = document.getElementById('tableBody');

if(localStorage.currentHighScore){
  var dataString = localStorage.currentHighScore;
  highScores = JSON.parse(dataString);
  writeScoresToPage(highScores);
} else {
  var newTRow = document.createElement('tr');
  tbody.appendChild(newTRow);
  var noNameData = document.createElement('td');
  noNameData.textContent = 'No names yet!';
  newTRow.appendChild(noNameData);
  var noScoreData = document.createElement('td');
  noScoreData.textContent = 'No scores yet!';
  newTRow.appendChild(noScoreData);
}

function writeScoresToPage(array) {
  if (document.getElementById('tableBody')){
    for (var i = 0; i < array.length; i++) {
      addToScoreBoard(array[i]);
    }
  }
}

function addToScoreBoard (playerObject){
  var newTRow = document.createElement('tr');
  tbody.appendChild(newTRow);
  var playerData = document.createElement('td');
  newTRow.appendChild(playerData);
  playerData.textContent = playerObject.name;
  var scoreData = document.createElement('td');
  newTRow.appendChild(scoreData);
  scoreData.textContent = playerObject.currentScore;
}
