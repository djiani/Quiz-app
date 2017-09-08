let quiz = {
  name: "The United States",
  questions: [
    {
      text: "What is the biggest state?",
      answers: ["New York", "Texas", "Alaska", "Rhode Island"],
      correct: 2
    }
    {
      text: "What is the most populated state in the US?",
      answers: ["New York", "Texas", "Florida", "California"],
      correct: 3
    }

    {
      text: "What many territory count the US?",
      answers: ["16", "13", "15", "20"],
      correct: 0
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
  $("#question").html(html);
}


$("#question").on("submit", "#theForm", function(e) {
  e.preventDefault();
  let answer = $('input[name="answer"]:checked').val();
  if (answer == quiz.questions[currentQuestion].correct) {
    score++;
    $("#feedback").html("<h3>Correct!</h3>");
  } else {
    $("#feedback").html(`<h3>Sorry, the correct answer was: 
            ${quiz.questions[currentQuestion].answers[quiz.questions[currentQuestion].correct]}</h3>`);
  }
  currentQuestion++;
  if (currentQuestion === quiz.questions.length) {
    // finished
  } else {
    displayQuestion(currentQuestion);
  }
})

displayQuestion(currentQuestion);
