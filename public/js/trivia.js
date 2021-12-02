var myQuestions = [
    {
      question: "What year was HTML invented?",
      answers: {
        a: '1982',
        b: '1993',
        c: '2001'
      },
      correctAnswer: 'b'
    },
    {
      question: "What Is The Most Popular Browser?",
      answers: {
        a: 'Google Chrome',
        b: 'FireFox',
        c: 'Internet Explorer'
      },
      correctAnswer: 'a'
    },
    {
        question: "Which Is The Most Expensive Phone?",
        answers: {
          a: 'Apple Iphone 13',
          b: 'Samsung Galaxy Z',
          c: 'Razr (2nd Gene)'
        },
        correctAnswer: 'b'
    },
    {
        question: "How Many Students Attend Okaland??",
        answers: {
          a: '30,400',
          b: '18,200',
          c: '15,100'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is the Inventer Of HTML?",
        answers: {
          a: 'Tim Berners-Lee',
          b: 'Bill Gates',
          c: 'Steve Jobs'
        },
        correctAnswer: 'a'
    }
  ];
  
  var questionContainer = document.getElementById('question');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuestion(myQuestions, questionContainer, resultsContainer, submitButton);
  
  function generateQuestion(questions, questionContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, questionContainer){
      var output = [];
      var answers;
      for(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }

        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );

      }
      questionContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, questionContainer, resultsContainer){
      var answerContainers = questionContainer.querySelectorAll('.answers');
      var userAnswer = '';
      var numCorrect = 0;
      for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          answerContainers[i].style.color = '#ff895d';
        }else{
          answerContainers[i].style.color = 'transparent';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    showQuestions(questions, questionContainer);
    
    submitButton.onclick = function(){
      showResults(questions, questionContainer, resultsContainer);
    }
  
  }