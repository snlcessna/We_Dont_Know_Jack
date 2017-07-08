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
}

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
  })

  //check for previous element and remove -JZ
  if(document.getElementById('question-div')){
    var child = document.getElementById('question-div');
    var parent = child.parentNode;
    parent.removeChild(child);
  }

  //create question/answer div -JZ
  var questionDivEl = document.createElement('div');
  questionDivEl.setAttribute('id', 'question-div');
  bodyEl.appendChild(questionDivEl);

  //print question -JZ
  var questionEl = document.createElement('p');
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
var bodyEl = document.getElementById('body');

//arrays -JZ
var allCats = ['codeCat'];
var codeCat = [];

//questions -JZ
var codeQeustion1 = new Question('What are the CSS values for the display property?', 'Inline, Block, Inline-block, None', 'Inline, Block, Hidden, Visible', 'Visible, Invisible, Inline, Block', 'Block, Inline, Inline-block, Hidden', 'codeCat');

var codeQuestion2 = new Question('What bullet point styles can you use for unordered lists?', 'None, Disc, Circle, Square', 'Circle, Star, Dot, Square', 'Decimal, Dot, None, Star', 'Oval, Circle, Square, Star', 'codeCat');

var codeQuestion3 = new Question('When using an image for a background, how do you get the image to repeat vertically?', 'repeat-y', 'repeat', 'repeat-x', 'scroll', 'codeCat');

var codeQuestion4 = new Question('What index is the \"4\" in within the following array?  numbers = [7, 1, 8, monkey, 12, 3, 4]', 6, 3, 8, 7, 'codeCat');

var codeQuestion5 = new Question('How do you round a number to the nearest integer?', 'Math.round()', 'Math.floor()', 'Math.integer()', 'Math.ceil()', 'codeCat');
