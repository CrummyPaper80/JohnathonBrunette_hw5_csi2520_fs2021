var myQuestions = [
    {
      question: "When did Garry's Mod come out?",
      answers: {
        a: '2006',
        b: '2012',
        c: '2004'
      },
      correctAnswer: 'a'
    },
    {
      question: "When did Freddie Mercury die?",
      answers: {
        a: '1991',
        b: '2000',
        c: '1986'
      },
      correctAnswer: 'a'
    },
    {
        question: "Which Is The Most Expensive Phone?",
        answers: {
          a: 'Apple Iphone 13',
          b: 'Samsung Galaxy Fold Z',
          c: 'Razr (2nd Gene)'
        },
        correctAnswer: 'b'
    },
    {
        question: "Whats the worst department at Oakland?",
        answers: {
          a: 'None',
          b: 'CSI',
          c: 'Math'
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
          answerContainers[i].style.color = 'rgb(0,0,255)';
        }else{
          answerContainers[i].style.color = 'rgb(255,0,0';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    showQuestions(questions, questionContainer);
    
    submitButton.onclick = function(){
      showResults(questions, questionContainer, resultsContainer);
    }
  
  }