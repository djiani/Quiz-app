let quiz = {
  name: "Afican Cup of Nations",
  questions: [
    {
      text: "Which country has won the Africa Cup of Nations the most times?",
      imgUrl: "image/can_1.jpg",
      answers: ["Egypt", "Ivory Coast", "Ghana", "Cameroon"],
      correct: 0,
      description: "Egypt won the Cup of Nations 7 times: 1957, 1959, 1986, 1998, 2006, 2008 and 2010"
    },

    {
      text: "When was the first tournament?",
      imgUrl: "image/can_1.jpg",
      answers: ["1951", "1957", "1965", "1971"],
      correct: 1,
      description: "There were only three participating nations: Egypt, Sudan and Ethiopia."
    },

    {
      text: "Who has scored the most goals in Africa Cup of Nations history?",
      imgUrl: "image/can_1.jpg",
      answers: ["Roger Milla", "Frédéric Kanouté", "Didier Drogba", " Samuel Eto’o"],
      correct: 3,
      description:"Eto’o scored 18 goals in the African Cup of Nations, which he won in 2000 and 2002"
    },

    {
      text: "Which country did Avram Grant lead to an Africa Cup of Nations final?",
      imgUrl: "image/can_1.jpg",
      answers: ["Cameroon", "Ivory Coast", "Angola", "Ghana"],
      correct: 3,
      description: "Grant has been in charge of Ghana since 2014. His team lost to Ivory Coast in the 2015 final."
    },

    {
      text: "How many times has Didier Drogba won the tournament?",
      imgUrl: "image/can_1.jpg",
      answers: ["None", "one", "twice", "Three"],
      correct: 0,
      description:"Drogba played in the 2006 and 2012 finals, which Ivory Coast lost on penalties. They won the tournament in 2015 but he had retired from international football the year before."
    },

    {
      text: "Which two Premier League players were sent home from the 2004 tournament for indiscipline?",
      imgUrl: "image/can_1.jpg",
      answers: ["Yakubu and Celestine Babayaro", "Aliou Cissé and El Hadji Diouf", "Geremi Njitap and Eric Djemba-Djemba", "Joseph Yobo and Isaac Okoronkwo"],
      correct: 0,
      description:"'They did not respect the rules of the camp,' said the general secretary of the Nigerian Football Association."
    },

    {
      text: "Which of these countries has never qualified for the tournament?",
      imgUrl: "image/can_1.jpg",
      answers: ["Somalia", "Namibia", "Benin", "Cape Verde"],
      correct: 0, 
      description: ""
    },

    {
      text: "How many different countries have won this continental tournament?",
      imgUrl: "image/can_1.jpg",
      answers: ["10", "12", "14", "16"],
      correct: 2,
      description:"14 different teams have won the African Cup of Nations."
    },

    {
      text: "Where did the 2015 African Cup of Nations take place?",
      imgUrl: "image/can_1.jpg",
      answers: ["Equatorial Guinea", "Ghana", "Cameroon", "Morocco"],
      correct: 0,
      description:"Morocco were due to host the event but due to fears about Ebola they refused to do so meaning Equatorial Guinea stepped in to hold the event instead."
    },

    {
      text: "which squad at the 2014 tournament contains two players from the same Premier League club?",
      imgUrl: "image/can_1.jpg",
      answers: ["Ivory Coast", "Algeria", "Egypt", "Senegal"],
      correct: 1,
      description: "Riyad Mahrez and Islam Silimani of leicester City"
    }
  ]
}

let score = 0;
let currentQuestion = 0;
let OnSubmitFlag = false;

function displayQuestion() {
  let html =`
    <h3>${quiz.questions[currentQuestion].text}</h3>
    <div>
      <div class="imageQuestion">
          <img src="image/question_mark.jpg" alt="question-mark" class="image">
      </div>
      <div class="answerForm">
        <form class="theform">`

  for (let i=0; i<quiz.questions[currentQuestion].answers.length; i++) {
    if (quiz.questions[currentQuestion].correct){
      html += `<span class="correctAnswer"><input type="radio" name="answer" value=${i}> 
          ${quiz.questions[currentQuestion].answers[i]}<br></span>`
    }else{
      html += `<span><input type="radio" name="answer" value=${i} > 
          ${quiz.questions[currentQuestion].answers[i]}<br></span>`
    }
    
  }
  html += `<button id ="theSubmit">Submit</button>
        </form>
      </div>
    </div>`
  $(".question").html(html);
}

function  displayFeedback(question, score){
  let htmlfd = `<span>Question: ${question+1}/10</span>
        <span>score: ${score}</span>
        <button id="next">Next </button>`
  $(".feedback").html(htmlfd);
}

function displayResult(){
  console.log("Results!!");
}

function correctAnswer(index){
  $(`span:nth-child(${parseInt(index)+1})`).css("border-color", "green");
}

function wrongAnswer(index){
  $(`span:nth-child(${parseInt(index)+1})`).css("border-color", "red");
}

function displayDescription(answer){
  let htmlDesc = "";
  if(answer !=""){
   htmlDesc = `
    <h3 class = "displayAnswer"> ${answer}</h3>
    <p>${quiz.questions[currentQuestion].description}</p>`;
  }
  $(".description").html(htmlDesc);
}


function showNextButton(){
  $("#next").show(1000);
  $("#heSubmit").hide(1000);

}

function showSubmitButton(){
  $("#next").hide(1000);
  $("#theSubmit").show(1000);

}

$(".question").on("click", "#theSubmit", function(e) {
  e.preventDefault();
  OnSubmitFlag = true;
  //console.log("submit button");
  let answer = $('input[name="answer"]:checked').val();
  console.log(answer);
  if(answer == undefined){
    alert("Please, select your answer and click submit");
  }
  else{
    if (answer == quiz.questions[currentQuestion].correct) {
      score++;
      correctAnswer(quiz.questions[currentQuestion].correct);
      displayFeedback(currentQuestion, score);
      displayDescription("Correct");
      $(".image").attr("src", "image/happy.gif");
    }else{
      wrongAnswer(answer);
      correctAnswer(quiz.questions[currentQuestion].correct);
      displayDescription("Sorry!, Wrong answer");
      displayFeedback(currentQuestion, score);
      $(".image").attr("src", "image/giphy.gif");
    }
    showNextButton();
  } 
})

$(".feedback").on("click", "#next", function(e){
  console.log("display next question!");
  if(OnSubmitFlag){
    OnSubmitFlag = false;
    currentQuestion++;
    if (currentQuestion === quiz.questions.length) {
      $("div.results").removeClass("js-resultsHidden");
      let resulthtml= "";
      if (score > 7){
        resulthtml = `
        <h1>You answered ${score} questions correctly</h1><b
        <h2>Congratulation you pass the test!!!</h2>`;

      }
      else{
        resulthtml = `
        <h1>You answered ${score} questions correctly</h1>
        <h2>Sorry, you did not pass the test!!!</h2>
        <p>Click on the button below to take the quiz again!</p>`;
        $("div.startQuiz").removeClass("js-startQuizHidden");
        score = 0;
        currentQuestion = 0;
        
      }
      console.log(resulthtml);
      $(".results").html(resulthtml);
      $("div.results").addClass("js-results");
      HiddenQuestion();
   
    } 
    else 
    {
      displayQuestion();
      displayDescription("");
      displayFeedback(currentQuestion, score);
      showSubmitButton();
    }  

  }
  else
  {
    alert("Please, Enter first your answer and "+
      "click submit to validate your answer!"+
      "Your can used the hint button to get some help!");
  }

});

//listen to start button!!!
$("#start").click(function(event){  //listen to the start button to restard the quiz
  startQuiz();
  alert("start test!!");
});


//dispaly question, feedback, and description section
function showQuestion(){
  $("div.question").removeClass("js-questionHidden");
  $("div.feedback").removeClass("js-feedbackHidden");
  $("div.description").removeClass("js-descriptionHidden");
}

//hidden question section and feedback section// dont really need this function
function HiddenQuestion(){
  $("div.question").addClass("js-questionHidden");
  $("div.feedback").addClass("js-feedbackHidden");
  $("div.description").addClass("js-descriptionHidden");
}

function startQuiz(){
  $("div.startQuiz").addClass("js-startQuizHidden");
  $("div.results").addClass("js-resultsHidden");
  showQuestion();
  displayQuestion();
  displayFeedback(currentQuestion, score);
}



$(function(){
  $("#start").click(function(event){
    startQuiz();
  })
});
//displayQuestion();
