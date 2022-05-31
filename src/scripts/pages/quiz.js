const sendButton = document.querySelector('button#send-button');
const restartButton = document.querySelector('button#close-button');

// Evento para escutar o click do botão de enviar
sendButton.addEventListener('click', function() {
  // Id das respostas corretas
  const correctAnswers = [
    '01-04', 
    '02-03',
    '03-03',
    '04-03',
    '05-04',
    '06-03',
    '07-01', 
    '08-03'
  ];
  const correctAnswersByUser = [];
  const scoreToWin = 8;
  let totalScoreFromUser = 0;

  const questions = [
    document.getElementsByName('question-01'),
    document.getElementsByName('question-02'),
    document.getElementsByName('question-03'),
    document.getElementsByName('question-04'),
    document.getElementsByName('question-05'),
    document.getElementsByName('question-06'),
    document.getElementsByName('question-07'),
    document.getElementsByName('question-08')
  ];
  const questionsAnswer = [];

  // Selecionar apenas as questões selecionadas.
  for (let counter = 0; counter < 8; counter++) {
    for (let subCounter = 0; subCounter < 4; subCounter++) {
      let currentItem = questions[counter][subCounter];

      if (currentItem.checked) {
        questionsAnswer.push(currentItem);
      }
    }
  }

  if (questionsAnswer.length < correctAnswers.length) {
    return alert('Preencha todos os campos!');
  }

  // Definir quais as questões foram acertadas ou não
  questionsAnswer.forEach((question, index) => {
    if (question.id == correctAnswers[index]) {
      correctAnswersByUser.push(true);
    } else {
      correctAnswersByUser.push(false);
    }
  });

  // Calcular a pontuação
  correctAnswersByUser.forEach(isCorrect => {
    if (isCorrect) {
      totalScoreFromUser++;
    }
  });

  const totalProgress = (totalScoreFromUser / scoreToWin) * 100;
  const modal = document.querySelector('div#modal');
  const header = document.querySelector('div#modal header');
  const progressBar = document.querySelector('div#modal span');

  // Atualizar o visual do modal com o score
  modal.className = '';
  progressBar.style.width = totalProgress+'%';
  progressBar.innerHTML = totalProgress+'%';
  header.innerHTML = totalScoreFromUser+' de '+scoreToWin;
});

restartButton.addEventListener('click', function() {
  modal.className = 'hidden';
});