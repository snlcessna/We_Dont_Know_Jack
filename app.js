'use strict';

//functions=====================================================================
function Question(question, correct, incorrect1, incorrect2, incorrect3, cat) {
  this.question = question;
  this.correct = correct;
  this.incorrect1 = incorrect1;
  this.incorrect2 = incorrect2;
  this.incorrect3 = incorrect3;
  this.cat = cat;
  cat.push(this);
}

//arrays========================================================================
var codeCat = [];

//variables=====================================================================
//questions
var codeQeustion1 = new Question('What are the CSS values for the display property', 'Inline, Block, Inline-block, None', 'Inline, Block, Hidden, Visible', 'Visible, Invisible, Inline, Block', 'Block, Inline, Inline-block, Hidden', 'codeCat');
