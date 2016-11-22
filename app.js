/*

http://sciencequestionswithsurprisinganswers.org/category/space/

1. Create array of objects with keys: question, a1, a2, a3, a4
1.1. By clicking submitButton replace the html with the next questions
2. Create array with correct answers e.g.: q1a3, q2a1 etc
3. Create array of user answers
4. Compare user answers with correct answers and calculate number
of correct answers



*/

//STATE
var state = {
  items: [
    {
      q: "Where is the edge of the universe?",
      a0: "Under the sea",
      a1: "Space spreads out infinitely in all directions",
      a2: "At the edge of the Solar system",
      a3: "What is universe?"
    },
    {
      q: "What keeps space empty?",
      a0: "Cosmic rays",
      a1: "Dark energy",
      a2: "Space is not empty",
      a3: "The Higgs field"
    },
    {
      q: "What is the range of weapons if used in space?",
      a0: "Infinite range",
      a1: "Energy multiplied by wheight and Mayer's ratio",
      a2: "0",
      a3: "Weapons are banned in space"
    },
    {
      q: "What is the color of the sun?",
      a0: "Blue",
      a1: "Yellow",
      a2: "White",
      a3: "Sun has no color"
    },
    {
      q: "How often does the sun's magnetic field flip?",
      a0: "Never",
      a1: "Every 11 years",
      a2: "Randomly",
      a3: "Once in a light year"
    },
    {
      q: "How long can a human in outer space last without a spacesuit before exploding?",
      a0: "Humans don't explode in space",
      a1: "In about 9-12 seconds",
      a2: "Instantly",
      a3: "They get getting crashed by high preassure instead"
    },
    {
      q: "How does a supernova completely destroy a star?",
      a0: "Just like a regular bomb",
      a1: "By creating a black hole",
      a2: "What is supernova?",
      a3: "When star explodes in supernova, it's core survives"
    },
    {
      q: "How does a black hole give off light?",
      a0: "Black hole doesn't give off any light",
      a1: "It is reflecting the light of the closest stars",
      a2: "By emitting radiation",
      a3: "It's a mystery"
    },
    {
      q: "How do space ships make artificial gravity?",
      a0: "It is impossible",
      a1: "Through acceleration by rotating about its axis",
      a2: "It all depends on the size of the ship",
      a3: "By accumulating dark matter"
    },
    {
      q: "Which space movie has the most accurate physics?",
      a0: "Star Wars",
      a1: "Star Trek",
      a2: "Armageddon",
      a3: "2001: A Space Odyssey"
    }
  ],
  answers: ['1', '2', '0', '2', '1', '0', '3', '0', '1', '3'],
  progress: {
    now: 0
  },
  userAns: [],
  userScore: 0,
  ansHTML: []
};

//MODIFY STATE

function changeQuestion() {
  state.progress.now++;
};

function getUserAns(target) {
  var userAns = $(target).val();
  state.userAns.push(userAns);
};

function countScore() {
  var score = 0;
  for(i = 0; i < state.items.length; i++){
    if(state.userAns[i] == state.answers[i]){
      score++;
    };
  };
  state.userScore = score;
};

function checkProgress() {
  return state.progress.now == state.items.length - 1;
};

function createAnsHTML() {
  for(i = 0; i < state.items.length; i++){
    var q = "<b>Q: </b>" + state.items[i].q;
    var aNum = "a" + state.answers[i];
    var a = "<b>A: </b>" + state.items[i][aNum];
    var string = "<p>" + q + "<br>" + a + "</p>";
    state.ansHTML.push(string);
  };
};

//RENDER

function start(target1, target2){
  $(target1).removeClass("hidden");
  $(target2).addClass("hidden");
  nextQuestion("#question");
  nextAnswer();
};

function nextQuestion(target){
  var progress = state.progress.now;
  var qString = state.items[progress].q;
  $(target).text(qString);
};

function nextAnswer(){
  var progress = state.progress.now;
  for(i=0; i<4; i++){
    var target = "#aText" + i;
    var aVal = "a" + i;
    $(target).text(state.items[progress][aVal]);
  };
  $('input').prop('checked', false);
};

function proceedCheck(){
  var x = $('input:checked').prop('checked');
  return x;
};

function showError(){
  $("#error").removeClass("eHide");
  setTimeout(hideError, 1000);
};

function hideError(){
  $("#error").addClass("eHide");
};

function showResults() {
  $("#results").removeClass("hidden");
  $("#questionCard, #submit, #progress, #hidden").addClass("hidden");
  createAnsHTML();
  $("#correctAns").append(state.ansHTML);
};

function insertScore() {
  var string = state.userScore + "/10";
  $("#score").text(string);
};

function updateProgress() {
  var string = state.progress.now + 1 + "/10";
  $("#progress").text(string);
};


//EVENT LISTENERS
$(document).ready(function() {
  var $parent = $("#wrapper");

  $parent.on('click', '#start', function(event) {
    var target1 = "#questionCard, #submit, #progress, #line";
    var target2 = "#start";
    start(target1, target2);
    updateProgress();
  });

  $parent.on('click', '#submit', function(event) {
    if(checkProgress()) {
      getUserAns('input:checked');
      showResults();
      countScore();
      insertScore();
    } else {
      if(proceedCheck()){
        var target = "#question";
        getUserAns('input:checked');
        changeQuestion();
        nextQuestion(target);
        nextAnswer();
        updateProgress();
      } else {
        showError();
      };
    };
  });
});
