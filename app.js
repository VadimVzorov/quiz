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
      a0: "Yes",
      a1: "No",
      a2: "Space doesn't exist",
      a3: "That is silly"
    },
    {
      q: "What keeps space empty?",
      a0: "Yes",
      a1: "No",
      a2: "They can breath only for 5 minutes",
      a3: "They can breath only in certain places in space"
    },
    {
      q: "What is the range of weapons if used in space?",
      a0: "Solar Galaxy",
      a1: "Milky Way",
      a2: "There are no galaxies in space",
      a3: "It is all a dream"
    },
    {
      q: "What is the color of the sun?",
      a0: "Yes",
      a1: "No",
      a2: "They have equal size",
      a3: "There is no such planet"
    },
    {
      q: "How often does the sun's magnetic field flip?",
      a0: "Yes",
      a1: "No",
      a2: "They have equal size",
      a3: "There is no such planet"
    },
    {
      q: "How long can a human in outer space last without a spacesuit before exploding?",
      a0: "Yes",
      a1: "No",
      a2: "Space doesn't exist",
      a3: "That is silly"
    },
    {
      q: "How does a supernova completely destroy a star?",
      a0: "Yes",
      a1: "No",
      a2: "They can breath only for 5 minutes",
      a3: "They can breath only in certain places in space"
    },
    {
      q: "How does a black hole give off light?",
      a0: "Solar Galaxy",
      a1: "Milky Way",
      a2: "There are no galaxies in space",
      a3: "It is all a dream"
    },
    {
      q: "How do space ships make artificial gravity?",
      a0: "Yes",
      a1: "No",
      a2: "They have equal size",
      a3: "There is no such planet"
    },
    {
      q: "How do space ships fly faster than light?",
      a0: "Yes",
      a1: "No",
      a2: "They have equal size",
      a3: "There is no such planet"
    }
  ],
  answers: ['a0', 'a1', 'a2', 'a3', 'a0', 'a1', 'a2', 'a3', 'a0', 'a2'],
  progress: {
    now: 0
  }
};

//MODIFY STATE

function changeQuestion() {
  state.progress.now++;
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
    var target = "#a" + i;
    var aVal = "a" + i;
    $(target).text(state.items[progress][aVal]);
  };
};

//EVENT LISTENERS
$(document).ready(function() {

  var $parent = $("#wrapper");

  $parent.on('click', '#start', function(event) {
    var target1 = "#questionCard, #submit, #progress";
    var target2 = "#start";
    start(target1, target2);
  });

  $(parent).on('click', '#submit', function(event) {
    var target = "#question";
    changeQuestion();
    nextQuestion(target);
    nextAnswer();
  });

});
