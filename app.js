'use strict';

//functions=====================================================================
//question constructor -JZ
function Question(question, correct, incorrect1, incorrect2, incorrect3, cat){
  this.question = question;
  this.correct = correct;
  this.incorrect1 = incorrect1;
  this.incorrect2 = incorrect2;
  this.incorrect3 = incorrect3;
  this.cat = cat;
  this.catPush();
}

//category push -JZ
Question.prototype.catPush = function(){
  if(this.cat === 'codeCat'){
    codeCat.push(this);
  }
};

//random number generator -JZ
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
//print to DOM -JZ
function printQuestion(array){
  //generate number -JZ
  var number = randomNumber(0, (array.length - 1));

  //randomize position of answers -JZ
  var answers = [array[number].correct, array[number].incorrect1, array[number].incorrect2, array[number].incorrect3];
  console.log(answers);
  answers.sort(function(a,b){
    return 0.5 - Math.random();
  });

  //remove heaher nav bar -JZ (this should move to event that starts game)
  // if(document.getElementById('nav-bar')){
  //   var child = document.getElementById('nav-bar');
  //   var parent = child.parentNode;
  //   parent.removeChild(child);
  // }

  //remove category set up form -JZ (this should move to event that starts game)
  if(document.getElementById('category')){
    var child = document.getElementById('category');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //check for previous element and remove -JZ
  if(document.getElementById('question-div')){
    var child = document.getElementById('question-div');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //create question/answer div -JZ
  var questionDivEl = document.createElement('div');
  questionDivEl.setAttribute('id', 'question-div');
  playEl.appendChild(questionDivEl);

  //print question -JZ
  var questionEl = document.createElement('p');
  questionEl.setAttribute('id', 'question');
  questionEl.textContent = array[number].question;
  questionDivEl.appendChild(questionEl);

  //print answers -JZ
  for(var i = 0; i < 4; i++){
    var answersEl = document.createElement('p');
    answersEl.textContent = answers[i];
    if(answers[i] === array[number].correct){
      answersEl.setAttribute('id', 'correct');
    } else {
      answersEl.setAttribute('class', 'incorrect');
    }
    questionDivEl.appendChild(answersEl);
  }
}
*/
//variables=====================================================================
//other -JZ
var playEl = document.getElementById('play-area');

//arrays -JZ
var allCats = ['The All-Encompasing World of Code', 'cat2', 'cat2', 'cat4'];
var codeCat = [];
var cat2 = [];
var cat3 = [];
var cat4 = [];
var cats = [codeCat, cat2, cat2, cat4];


//questions -JZ
var codeQuestion1 = new Question('What are the CSS values for the display property?', 'Inline, Block, Inline-block, None', 'Inline, Block, Hidden, Visible', 'Visible, Invisible, Inline, Block', 'Block, Inline, Inline-block, Hidden', 'codeCat');

var codeQuestion2 = new Question('What bullet point styles can you use for unordered lists?', 'None, Disc, Circle, Square', 'Circle, Star, Dot, Square', 'Decimal, Dot, None, Star', 'Oval, Circle, Square, Star', 'codeCat');

var codeQuestion3 = new Question('When using an image for a background, how do you get the image to repeat vertically?', 'repeat-y', 'repeat', 'repeat-x', 'scroll', 'codeCat');

var codeQuestion4 = new Question('What index is the \"4\" in within the following array?  numbers = [7, 1, 8, monkey, 12, 3, 4]', 6, 3, 8, 7, 'codeCat');

var codeQuestion5 = new Question('How do you round a number to the nearest integer?', 'Math.round()', 'Math.floor()', 'Math.integer()', 'Math.ceil()', 'codeCat');

//questions -JW

var codeQuestion6 = new Question('In CSS, which of the following is not a pseudo class?', ':none', ':hover', ':visited', ':default', 'codeCat');

var codeQuestion7 = new Question('In Javascript, what is the result of: var foo = \'foo\';   foo.split(\'\');', '[\"f\", \"o\", \"o\"]', 'f,o,o', 'undefined', 'TypeError', 'codeCat');

var codeQuestion8 = new Question('What does CSS stand for?', 'Cascading Style Sheets', 'Computer Styling System', 'Code System Sheet', 'Colors Styles Sizes', 'codeCat');

var codeQuestion9 = new Question ('Javascript is not:', 'A compiled language', 'An implementation of the ECMAScript Specification', 'Object Oriented', 'Dynamically typed', 'codeCat');

var codeQuestion10 = new Question('In Javascript, hoisting affects which of the following?', 'Variable declarations', 'Variable initializations', 'All lines of code', 'None of the Options Listed', 'codeCat');



//render scores to screen -JW

//functions=====================================================================

//current game object constructor - JW

function CurrentGame(numPlayers, gamelength, username1, username2) {
  this.numPlayers = numPlayers;
  this.gamelength = gamelength;
  this.catergoriesShown = [];
  this.categoriesChosen = [];
  this.questionsShown = [];
  this.questionsCounter = 0;
  this.player1Score = 0;
  this.player2Score = 0;
  this.username1 = username1;
  this.username2 = username2;
}

//function to create scoreboard template, takes an object -JW
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

//function to sort scores, takes an array of objects -JW
function sortScores (array) {
  array.sort(function(a,b){
    return b.score - a.score;
  });
}

//function to print all score data to page, takes an array of objects
function writeScoresToPage(array) {
  if (document.getElementById('tableBody')){
    sortScores(array);
    for (var i = 0; i < array.length; i++) {
      addToScoreBoard(array[i]);
    }
  }
}
//variables -JW
//DOM variables
var tbody = document.getElementById('tableBody');
//Global variables
var players = [];
var player1;
var player2;
var game;

writeScoresToPage(game);
//end of test code




//Start game JW, JZ, LC
var playButton = document.getElementById('setupform');
playButton.addEventListener('submit', handleStart);

function handleStart(event) {
  event.preventDefault();
  var numPlayers = event.target.player.value;
  var gamelength = event.target.gamelength.value;
  var username1 = event.target.username1.value;
  var username2 = event.target.username2.value;
  game = new CurrentGame(numPlayers, gamelength, username1, username2);
  player1 = new Users(username1);
  player2 = new Users(username2);

  saveObjectsToLocalStorage(game);
  saveObjectsToLocalStorage(player1);
  saveObjectsToLocalStorage(player2);

  console.log(numPlayers);
  console.log(gamelength);
  console.log(username1);
  console.log(username2);
  console.log(player1);
  console.log(player2);
  console.log(game);

  displayCategories();
}

function Users(name){
  this.name = name;
  this.currentScore = 0;
  this.scores = [];
  this.highScore = 0;
}

//Display Category Options -JW

function displayCategories() {
  //check for set up form and hide -JZ
  var setUpform = document.getElementById('setupform');
  if(setUpform){
    setUpform.style.display = 'none';
  }

  //check for previous question element and remove -JZ
  var questions = document.getElementById('questions');
  if(questions){
    questions.style.display = 'none';
  }

  //choose 4 ramdom categories to display
  var displayCats = [];
  for (var i = 0; i < 4; i++) {
    var num = randomNumber(0, allCats.length - 1);
    while (displayCats.indexOf(num) !== -1){
      num = randomNumber(0, allCats.length - 1);
    }
    displayCats.push(num);
    console.log(displayCats);
  }
  //wirte categories to form and set value attribute on radio buttons
  var catOptionOne = document.getElementById('catOptionOne');
  catOptionOne.textContent = allCats[displayCats[0]];
  var optionOne = document.getElementById('option1');
  optionOne.setAttribute('value', allCats[displayCats[0]]);

  var catOptionTwo = document.getElementById('catOptionTwo');
  catOptionTwo.textContent = allCats[displayCats[1]];
  var optionTwo = document.getElementById('option2');
  optionTwo.setAttribute('value', allCats[displayCats[1]]);

  var catOptionThree = document.getElementById('catOptionThree');
  catOptionThree.textContent = allCats[displayCats[2]];
  var optionThree = document.getElementById('option3');
  optionThree.setAttribute('value', allCats[displayCats[2]]);

  var catOptionFour = document.getElementById('catOptionFour');
  catOptionFour.textContent = allCats[displayCats[3]];
  var optionFour = document.getElementById('option4');
  optionFour.setAttribute('value', allCats[displayCats[3]]);

  //display category form
  var category = document.getElementById('category');
  category.style.display = 'initial';
};

//add event listener to submit button
var categoryButton = document.getElementById('category');
categoryButton.addEventListener('submit', startQuestions);
//Record Current Category and load questions
function startQuestions(event) {
  event.preventDefault();
  var catChosen = event.target.catOption.value;
  console.log(catChosen);
  var catIndex = allCats.indexOf(catChosen);
  console.log(catIndex);
  console.log(cats[catIndex]);
  //clear checked radio buttons
  var checked = document.getElementsByName("catOption");
  for(var i = 0; i < checked.length; i++) {
     checked[i].checked = false;
   };
  displayQuestions(cats[catIndex]);
}

//Display questions - JW

function displayQuestions(array) {
  //check for set up form and hide -JZ
  var setUpform = document.getElementById('setupform');
  if(setUpform){
    setUpform.style.display = 'none';
  }

  //check for category questions and remove -JZ
  var category = document.getElementById('category');
  if(category){
    category.style.display = 'none';
  }

  //check for previous question element and remove -JZ
  var questions = document.getElementById('questions');
  if(questions){
    questions.style.display = 'none';
  }

  //choose question to display
  //generate number -JZ
  var number = randomNumber(0, (array.length - 1));

  //randomize position of answers -JZ
  var answers = [array[number].correct, array[number].incorrect1, array[number].incorrect2, array[number].incorrect3];
  console.log(answers);
  answers.sort(function(a,b){
    return 0.5 - Math.random();
  });
  console.log(answers);
  //print question -JZ
  var questionEl = document.getElementById('quizQuestion');
  questionEl.textContent = array[number].question;

//function to set value attribut to correct or incorrect
  function setResponseValue (object, element) {
    if(array[number].correct === object){
        element.setAttribute('value', 'correct');
      } else {
        element.setAttribute('value', 'incorrect');
      }
  }

  //wirte Questions to form and set value attribute on radio buttons
  var questionOptionOne = document.getElementById('questionOptionOne');
  questionOptionOne.textContent = answers[0];
  var optionOne = document.getElementById('questionOption1');
  setResponseValue(answers[0], optionOne);

  var questionOptionTwo = document.getElementById('questionOptionTwo');
  questionOptionTwo.textContent = answers[1];
  var optionTwo = document.getElementById('questionOption2');
  setResponseValue(answers[1], optionTwo);

  var questionOptionThree = document.getElementById('questionOptionThree');
  questionOptionThree.textContent = answers[2];
  var optionThree = document.getElementById('questionOption3');
  setResponseValue(answers[2], optionThree);

  var questionOptionFour = document.getElementById('questionOptionFour');
  questionOptionFour.textContent = answers[3];
  var optionFour = document.getElementById('questionOption4');
  setResponseValue(answers[3], optionFour);

  //display category form
  var questionEl = document.getElementById('questions');
  questions.style.display = 'initial';
};

//add event listener to submit question button -JW
var questionButton = document.getElementById('questions');
questionButton.addEventListener('submit', answerQuestion);
//Record Current Category and load questions

function answerQuestion(event) {
  event.preventDefault();
  var answerChosen = event.target.questionOption.value;
  console.log(answerChosen);
  if (answerChosen === 'correct'){
    player1.currentScore += 1000;
    console.log(player1.currentScore);
  }
  game.questionsCounter++;
  console.log(game.questionsCounter);

  var checked = document.getElementsByName("questionOption");
  for(var i = 0; i < checked.length; i++) {
     checked[i].checked = false;
   };

  checkGameLength();
}

function checkGameLength(){
  if (game.gamelength === 'short' && game.questionsCounter === 5){
    //remove page elements
    var setUpform = document.getElementById('setupform');
    if(setUpform){
      setUpform.style.display = 'none';
    }

    //check for category questions and remove -JZ
    var category = document.getElementById('category');
    if(category){
      category.style.display = 'none';
    }

    //check for previous question element and remove -JZ
    var questions = document.getElementById('questions');
    if(questions){
      questions.style.display = 'none';
    }
    //display final scores
    var player1FinalScore = document.getElementById('player1FinalScore');
    player1FinalScore.textContent = player1.currentScore;;
    var scoresDiv = document.getElementById('finalScores');
    scoresDiv.style.display = 'initial';
    players.push(player1);
  }
  else if (game.gamelength === 'long' && game.questionsCounter === 11){

    //remove page elements
    var setUpform = document.getElementById('setupform');
    if(setUpform){
      setUpform.style.display = 'none';
    }

    //check for category questions and remove -JZ
    var category = document.getElementById('category');
    if(category){
      category.style.display = 'none';
    }

    //check for previous question element and remove -JZ
    var questions = document.getElementById('questions');
    if(questions){
      questions.style.display = 'none';
    }

    //display final scores
    var scoresDiv = document.getElementById('finalScores');
    var player1FinalScore = document.getElementById('player1FinalScore');
    console.log(player1.currentScore);
    player1FinalScore.textContent = player1.currentScore;
    scoresDiv.style.display = 'initial';
    players.push(player1);

  }
  else {
    displayCategories();
  }
}

function saveObjectsToLocalStorage(object){
  var dataString = JSON.stringify(object);
  localStorage.object = dataString;
};

//Display player data
function displayPlayerInfo(user){

};
