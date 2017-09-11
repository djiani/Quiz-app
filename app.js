let quiz = {
  name: "Afican Cup of Nations",
  questions: [
    {
      text: "Which country has won the Africa Cup of Nations the most times?",
      imgUrl: "can_1.jpg",
      answers: ["Egypt", "Ivory Coast", "Ghana", "Cameroon"],
      correct: 0,
      description: "Egypt won the Cup of Nations 7 times: 1957, 1959, 1986, 1998, 2006, 2008 and 2010"
    },

    {
      text: "When was the first tournament?",
      imgUrl: "can_1.jpg",
      answers: ["1951", "1957", "1965", "1971"],
      correct: 1,
      description: "There were only three participating nations: Egypt, Sudan and Ethiopia."
    },

    {
      text: "Who has scored the most goals in Africa Cup of Nations history?",
      imgUrl: "can_1.jpg",
      answers: ["Roger Milla", "Frédéric Kanouté", "Didier Drogba", " Samuel Eto’o"],
      correct: 3,
      description:"Eto’o scored 18 goals in the African Cup of Nations, which he won in 2000 and 2002"
    },

    {
      text: "Which country did Avram Grant lead to an Africa Cup of Nations final?",
      imgUrl: "can_1.jpg",
      answers: ["Cameroon", "Ivory Coast", "Angola", "Ghana"],
      correct: 3,
      description: "Grant has been in charge of Ghana since 2014. His team lost to Ivory Coast in the 2015 final."
    },

    {
      text: "How many times has Didier Drogba won the tournament?",
      imgUrl: "can_1.jpg",
      answers: ["None", "one", "twice", "Three"],
      correct: 0,
      description:"Drogba played in the 2006 and 2012 finals, which Ivory Coast lost on penalties. They won the tournament in 2015 but he had retired from international football the year before."
    },

    {
      text: "Which two Premier League players were sent home from the 2004 tournament for indiscipline?",
      imgUrl: "can_1.jpg",
      answers: ["Yakubu and Celestine Babayaro", "Aliou Cissé and El Hadji Diouf", "Geremi Njitap and Eric Djemba-Djemba", "Joseph Yobo and Isaac Okoronkwo"],
      correct: 0,
      description:"'They did not respect the rules of the camp,' said the general secretary of the Nigerian Football Association."
    },

    {
      text: "Which of these countries has never qualified for the tournament?",
      imgUrl: "can_1.jpg",
      answers: ["Somalia", "Namibia", "Benin", "Cape Verde"],
      correct: 0, 
      description: ""
    },

    {
      text: "How many different countries have won this continental tournament?",
      imgUrl: "can_1.jpg",
      answers: ["10", "12", "14", "16"],
      correct: 2,
      description:"14 different teams have won the African Cup of Nations."
    },

    {
      text: "Where did the 2015 African Cup of Nations take place?",
      imgUrl: "can_1.jpg",
      answers: ["Equatorial Guinea", "Ghana", "Cameroon", "Morocco"],
      correct: 0,
      description:"Morocco were due to host the event but due to fears about Ebola they refused to do so meaning Equatorial Guinea stepped in to hold the event instead."
    }

  ]
}

let score = 0;
let currentQuestion = 0;

function displayQuestion() {
  let html = `
    <h3>${quiz.questions[currentQuestion].text}</h3>
    <form id="theForm">
  `
  for (let i=0; i<quiz.questions[currentQuestion].answers.length; i++) {
    html += `<input type="radio" name="answer" value=${i}> 
          ${quiz.questions[currentQuestion].answers[i]}<br>`
  }
  html += `<button type="submit">Submit</button></form>`
  $(".question").html(html);
}


$(".question").on("submit", ".theForm", function(e) {
  e.preventDefault();
  let answer = $('input[name="answer"]:checked').val();
  if (answer == quiz.questions[currentQuestion].correct) {
    score++;
    $(".feedback").html("<h3>Correct!</h3>");
  } else {
    $(".feedback").html(`<h3>Sorry, the correct answer was: 
            ${quiz.questions[currentQuestion].answers[quiz.questions[currentQuestion].correct]}</h3>`);
  }
  currentQuestion++;
  if (currentQuestion === quiz.questions.length) {
    // finished
  } else {
    displayQuestion();
  }
})

//dispaly question section and feedback section
function showQuestion(){
  $("div.question").removeClass("js-questionHidden");
  $("div.feedback").removeClass("js-feedbackHidden");
}

//hidden question section and feedback section
function HiddenQuestion(){
  $("div.question").addClass("js-questionHidden");
  $("div.feedback").addClass("js-feedbackHidden");
}

function startQuiz(){
  $("div.startQuiz").addClass("js-startQuizHidden");
  showQuestion();
  //displayQuestion();
}



$(function(){
  $("input").click(function(event){
    alert("startQuiz!!");
    startQuiz();
  })
});
//displayQuestion();
