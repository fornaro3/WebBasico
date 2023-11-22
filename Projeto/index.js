
const questions = [
    { question: 'Qual é a derivada de 3x', options: [6, 3, 1, 12], answer: 3 },
    { question: 'Quanto é 5 * 8 / 10 + 2?', options: [4, 26, 10, 6], answer: 6 },
    { question: 'Quanto é 120 / 2 + 10', options: [120, 10, 70, 60], answer: 70 }
    
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const resultElement = document.getElementById('result');

    questionElement.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = '';

    for (let option of questions[currentQuestion].options) {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', function() {
        checkAnswer(option);
      });
      optionsContainer.appendChild(button);
    }

    resultElement.textContent = '';
  }

  function checkAnswer(selectedOption) {
    const resultElement = document.getElementById('result');
    const optionsContainer = document.getElementById('options-container');

    optionsContainer.innerHTML = ''; 

    if (selectedOption === questions[currentQuestion].answer) {
      score++;
      resultElement.textContent = 'Resposta correta!';
    } else {
      resultElement.textContent = `Resposta incorreta. A resposta correta é ${questions[currentQuestion].answer}.`;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1200); 
    } else {
      resultElement.textContent = `Quiz concluído! Pontuação final: ${score} de ${questions.length}.`;
      document.getElementById('restart-button').style.display = 'block';
    }
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    document.getElementById('restart-button').style.display = 'none';
  }

  loadQuestion();
