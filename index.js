var readlineSync = require("readline-sync");
var score = 0;
console.log("Hello! ");
console.log();

var userAnswer = readlineSync.question("Please type your name ");
console.log("WELCOME, " + userAnswer + "!");
console.log();

console.log("This is a short fun quiz to see 'How well do you know ME.");
console.log();

console.log("[Type only the option markers, for example a,b,c or d as an answer and press enter.]");
console.log("-------------------------------------")
console.log();

console.log("Let's START...");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("well , That's Correct!");
    score = score + 1;
  } else {
    console.log("Oops! Try harder!")
  };
  console.log();
};

var myQues1 = {
  question: "which is my pet name ? (a) Lucky (b) Mamun (c) Mun (d) All of above ",
  answer: "d"
};
var myQues2 = {
  question: "Which is my favourite street food? (a) pani puri (b) pav bhaji (c) masala dosa (d) roll ",
  answer: "c"
};
var myQues3 = {
  question: "What was my current fav webseries ? (a) Mirzapur (b) GOT (c) The Reunion (d) Mere Humsafar",
  answer: "d"
};
var myQues4 = {
  question: "who's voice is my favourite? (a) Arijeet (b) Neha kakkar (c) Avicii (d) Charlie puth",
  answer: "a"
};
var myQues5 = {
  question: "What is my favourite color? (a)blue (b)white (c) black (d) ALL ",
  answer: "c"
};

var myQuiz = [myQues1, myQues2, myQues3, myQues4, myQues5]

for (var i = 0; i < myQuiz.length; i++) {
  var playQuiz = myQuiz[i];
  play(playQuiz.question, playQuiz.answer)
};

console.log("You scored " + score + " out of 5! ");
console.log();

var rating = {
  0: "You don't know me at all!",
  1: "You know little about me",
  2: "We should talk more, I guess",
  3: "hmm..We are good friends",
  4: "BFF... yeahhh hey!we are more than besties.",
  5: "SOULMATESSS...❤️ WE ARE!!!"
};

for (var i = 0; i < 1; i++) {
  console.log(rating[score])
};