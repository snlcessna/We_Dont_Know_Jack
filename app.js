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
  } else if (this.cat === 'food') {
    food.push(this);
  } else if (this.cat === 'literature') {
    literature.push(this);
  }else if (this.cat === 'movie') {
    movie.push(this);
  }
};

//random number generator -JZ
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//variables=====================================================================
//other -JZ
var playEl = document.getElementById('play-area');

//arrays -JZ
var allCats = ['The All-Encompasing World of Code', 'Global Cuisine', 'Literature and Philosophy', 'cat4'];
var codeCat = [];
var food = [];
var literature = [];
var movie = [];
var cats = [codeCat, food, literature, movie];

//player objects -JZ and LBC
var highScores = [];

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

//Food Trivia questions

var foodQuestion1 = new Question ('What is the name for a confection that consists primarily of sugar or honey and almond meal?', 'Marzipan', 'Brittle', 'Shortbread', 'Pate a Choux', 'food');

var foodQuestion2 = new Question ('Roquefort is a French blue cheese made from the milk of what animal?', 'Sheep', 'Goat', 'Cow', 'Pig', 'food');

var foodQuestion3 = new Question ('What fast-food franchise has the most worldwide locations?', 'Subway', 'McDonald\'s', 'BurgerKing', 'KFC', 'food');

var foodQuestion4 = new Question ('Dijon mustand originated in the city of Dijon, located in what country?', 'France', 'Switzerland', 'Germany', 'United Kingdom', 'food');

var foodQuestion5 = new Question('What popular soda beverage was originally developed as a mixer for whiskey?', 'Mountain Dew', 'Coca Cola', 'Pepsi', '7 Up', 'food');

var foodQuestion6 = new Question ('What was the original flavor of the filling in Twinkies?', 'Banana Cream', 'Vanilla', 'Cream Cheese', 'White Chocolate', 'food');

var foodQuestion7 = new Question ('What is name of the scale used to measure the spicy heat of peppers?', 'Scoville scale', 'Manhattan Rating', 'Heat Index', 'Burn Level', 'food');

var foodQuestion8 = new Question ('A tandoor is a type of what?', 'Oven', 'Pot', 'Seasoning', 'Cuisine', 'food');

var foodQuestion9 = new Question ('In what year was the blue M&M first introduced?', '1995', '2000', '1992', '1987', 'food');

var foodQuestion10 = new Question ('How many items are in a Baker\'s Dozen?', '13', '12', '16', '9', 'food');

//Literature questions

var litQuestion1 = new Question ('War and Peace, originally published in 1869, is a novel written by which Russian author?', 'Leo Tolstoy', 'Vladimir Nabokov', 'Franz Kafka', 'Mikhail Bulgakov', 'literature');

var litQuestion2 = new Question ('In the children\'s books about a 25 foot tall red dog, what is the name of the dog?', 'Clifford', 'Rover', 'Spike', 'Rex', 'literature');

var litQuestion3 = new Question ('Being and Time is an ontological treatise written by which German philosopher?', 'Martin Heidegger', 'Wilfred Sellars', 'Walter Benjamin', 'Ludwig Wittgenstein', 'literature');

var litQuestion4 = new Question ('Which Irish author wrote the avant-garde comic fiction,Finnegans Wake?', 'James Joyce', 'Oscar Wilde', 'Brian O\'Nolan', 'W.B. Yeats', 'literature');

var litQuestion5 = new Question ('What musical instrument did Sherlock Holmes play?', 'Violin', 'Piano', 'Cello', 'French Horn', 'literature');

var litQuestion6 = new Question ('Cogito ergo sum, "I think, therefore I am", is a Latin phrase by which philospher?', 'Rene Descartes', 'Voltaire', 'Michel Foucault', 'Albert Camus', 'Jean-Paul Sartre', 'literature');

var litQuestion7 = new Question ('Who is the author of the book A Brief History of Time?', 'Stephen Hawking', 'Albert Einstein', 'Nikola Tesla', 'Isaac Newton', 'literature');

var litQuestion8 = new Question ('The Artful Dodger is a character from which novel?', 'Oliver Twist', 'East of Eden', 'The Pickwick Papers', 'Dubliners', 'literature');

var litQuestion9 = new Question ('Jules Verne\'s fictional submarine the Nautilus is captained by which character?', 'Captain Nemo', 'Captian Jack Sparrow', 'Captain Ahab', 'Captain Smollett', 'literature');

var litQuestion10 = new Question ('The Communist Manifesto was written by which two German philosophers?', 'Karl Marx and Friedrich Engels', 'Friedrich Nietzsche and Karl Marx', 'Immanuel Kant and Arthur_Schopenhauer', 'Theodor Adorno and Friedrich Nietzsche', 'literature');

//Movie questions - LC

var movieQuestion1 = new Question ('Who was the director of the Lord of the Rings trilogy?', 'Peter Jackson', 'Percy Jackson', 'Perry Mason', 'Perry Jackson', 'movie');

var movieQuestion2 = new Question ('Which actor turned down the part of "Neo" in the Matrix trilogy?', 'Will Smith', 'Mark Wahlberg', 'Wesley Snipes', 'Kurt Russell', 'movie');

var movieQuestion3 = new Question ('In the Star Wars universe, who is Luke Skywalker\'s mother?', 'Padmé Amidala', 'Natalie Portman', 'Padmé Abidala', 'Carrie Fisher', 'movie');

var movieQuestion4 = new Question ('What type of fish is Dory from the 2003 movie \'Finding Nemo', 'Blue Tang Fish', 'Clown Fish', 'Forget-me-not Flounder', 'Marlon', 'movie');

var movieQuestion5 = new Question ('Who directed the horror film Alien?', 'Ridley Scott', 'Francis F. Coppala', 'Steven Spielberg', 'George Lucas', 'movie');

var movieQuestion6 = new Question ('Which famous movie character\'s vanity plate reads OUTATIME?', 'Dr. Emmitt Brown', 'Marty McFly', 'Lorraine Baines', 'George McFly', 'movie');

var movieQuestion7 = new Question ('In which movie does Jim Carey unknowingly star as the main character in his own reality television show?', 'The Truman Show', 'Dumb and Dumber', 'Ace Ventura: Pet Detective', 'The Cable Guy', 'movie');

var movieQuestion8 = new Question ('Which 2004 movie stars Drew Barrymore as a character called Lucy who suffers from short-term memory loss?', '50 First Dates', 'Charlie\'s Angels', 'Firestarter', 'Boys on the Side', 'movie');

var movieQuestion9 = new Question ('Which actress played Winifred in the 1993 movie Hocus Pocus?', 'Bette Midler', 'Kathy Najimi', 'Sarah Jessica Parker', 'Thora Birch', 'movie');

var movieQuestion10 = new Question ('What year was the Christmas movie \'Love Actually\' released?', '2003', '1999', '2005', '2008', 'movie');

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


//function to print all score data to page, takes an array of objects
function writeScoresToPage(array) {
  if (document.getElementById('tableBody')){
    // sortScores(array);
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

//Start game JW, JZ, LC
var playButton = document.getElementById('setupform');
playButton.addEventListener('submit', handleStart);

function handleStart(event) {
  event.preventDefault();

  //check for previous high scores array and set -JZ
  if(localStorage.currentHighScore){
    var dataString = localStorage.currentHighScore;
    highScores = JSON.parse(dataString);
  }

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

  var userName1El = document.getElementById('player1name');
  userName1El.textContent = player1.name;

  var player1scoreEl = document.getElementById('player1score');
  player1scoreEl.textContent = 'Score: ' + game.player1Score;

  var currentQuestionNo = game.questionsCounter + 1;
  var scoreEl = document.getElementById('questionNumber');
  scoreEl.textContent = 'Question Number: ' + currentQuestionNo;

  //display category form
  var category = document.getElementById('category');
  category.style.display = 'initial';

  //display user data
  var userDataEl = document.getElementById('userData1');
  userDataEl.style.display = 'initial';
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

//generate a new random number
//check to see if in our questionsShown array
//if so, generate a new random number
//if not, push random number to questionsShown array - ML
  function randomQuestion() {
    console.log(array[number]);
    while (game.questionsShown.includes(array[number])) {
      number = randomNumber(0, (array.length - 1));
    }
      game.questionsShown.push(array[number]);
      console.log(game.questionsShown);
  }

  randomQuestion();



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
    game.player1Score += 1000;
    console.log(player1.currentScore);
    console.log(player1.name);
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

    //hide user data
    var userDataEl = document.getElementById('userData1');
    userDataEl.style.display = 'none';

    //display final scores
    var player1FinalScore = document.getElementById('player1FinalScore');
    player1FinalScore.textContent = player1.name + ' ' + player1.currentScore;
    var scoresDiv = document.getElementById('finalScores');
    scoresDiv.style.display = 'initial';
    players.push(player1);
    highScores.push(player1);
    setHighScore();
  } else if (game.gamelength === 'long' && game.questionsCounter === 11){

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

    //Hide User Data
    var userDataEl = document.getElementById('userData1');
    userDataEl.style.display = 'none';

    //display final scores
    var scoresDiv = document.getElementById('finalScores');
    var player1FinalScore = document.getElementById('player1FinalScore');
    console.log(player1.currentScore);
    player1FinalScore.textContent = player1.name + ' ' + player1.currentScore;
    scoresDiv.style.display = 'initial';
    players.push(player1);
    highScores.push(player1);
    setHighScore();
  } else {
    displayCategories();
  }
}
//Persist highscore to localStorage = LC JZ
function setHighScore() {
  highScores.sort(function (a,b) {
    var x = a.currentScore;
    var y = b.currentScore;
    return ((x < y) ? 1 : (x > y) ? -1 : 0);
  });

  if (highScores.length > 5) {
    highScores.splice(5, (highScores.length - 5));
  }

  saveHighScore(highScores);
};

function saveHighScore(object) {
  var dataString = JSON.stringify(object);
  localStorage.currentHighScore = dataString;
};

function saveObjectsToLocalStorage(object){
  var dataString = JSON.stringify(object);
  localStorage.object = dataString;
};

//Display player data
function displayPlayerInfo(user){

};
