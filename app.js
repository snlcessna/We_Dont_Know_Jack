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
  if(document.getElementById('nav-bar')){
    var child = document.getElementById('nav-bar');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //remove game set up form -JZ (this should move to event that starts game)
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

//variables=====================================================================
//other -JZ
var playEl = document.getElementById('play-area');

//arrays -JZ
var allCats = ['codeCat', 'cat2', 'cat2', 'cat4', 'cat 5', 'cat6', 'cat7'];
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

var codeQuestion6 = new Question('In Javascript, what is the result of: 1 - - 1;', '2', '11', 'undefined', 'codeCat');

var codeQuestion7 = new Question('In Javascript, what is the result of: var foo = \'foo\';   foo.split(\'\');', '[\"f\", \"o\", \"o\"]', 'f,o,o', 'undefined', 'TypeError', 'codeCat');

var codeQuestion8 = new Question('What does CSS stand for?', 'Cascading Style Sheets', 'Computer Styling System', 'Code System Sheet', 'Colors Styles Sizes', 'codeCat');

var codeQuestion9 = new Question ('Which of the following is not true of Javascript?', 'It\'s a compiled language', 'Is an implementation of the ECMAScript Specification', 'Is Object Oriented', 'Is dynamically typed', 'codeCat');

var codeQuestion10 = new Question('In Javascript, hoising affects which of the following?', 'Variable declarations', 'Variable initializations', 'All lines of code', 'None of the Above', 'codeCat');



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
function addToScoreBoard (object){
  var newTRow = document.createElement('tr');
  tbody.appendChild(newTRow);
  var playerData = document.createElement('td');
  newTRow.appendChild(playerData);
  playerData.textContent = object.name;
  var scoreData = document.createElement('td');
  newTRow.appendChild(scoreData);
  scoreData.textContent = object.score;
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
//test code
var player1 = {
  name: 'Jessica',
  score: 100000
};
var player2 = {
  name: 'James',
  score: 200000
};
var player3 = {
  name: 'Larry',
  score: 500000
};
var playersAndScores = [player1, player3, player2];
writeScoresToPage(playersAndScores);
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
  var game = new CurrentGame(numPlayers, gamelength, username1, username2);
  var player1 = new Users(username1);
  var player2 = new Users(username2);

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
  this.scores = [];
  this.highScore = 0;
}

//Display Category Options -JW

function displayCategories() {
  //check for set up form and remove
  if(document.getElementById('setupform')){
    var child = document.getElementById('setupform');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //check for previous question element and remove -JZ
  if(document.getElementById('question-div')){
    var child = document.getElementById('question-div');
    var parent = child.parentNode;
    parent.removeChild(child);
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

//Record Current Category and load questions
var categoryButton = document.getElementById('category');
categoryButton.addEventListener('submit', startQuestions);

function startQuestions(event) {
  event.preventDefault();
  var catChosen = event.target.catOption.value;
  console.log(catChosen);
  var catIndex = allCats.indexOf(catChosen);
  console.log(catIndex);
  console.log(cats[catIndex]);
  printQuestion(cats[catIndex]);
}
