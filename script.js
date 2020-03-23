const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('fela')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('fela')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('fela')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('fela')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('fela')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('Rétt')
  } else {
    element.classList.add('Rangt')
  }
}

function clearStatusClass(element) {
  element.classList.remove('Rétt')
  element.classList.remove('Rangt')
}

const questions = [
  {
    question: 'Hvaða hlut geturu ekki notað nema hann sé brotin?',
    answers: [
      { text: 'Egg', correct: true },
      { text: 'Eyrnalokk', correct: false }
    ]
  },
  {
    question: 'Hvað heytir kvendýr selsins?',
    answers: [
      { text: 'Murta', correct: false },
      { text: 'Surta', correct: false },
      { text: 'Urta', correct: true },
      { text: 'Turta', correct: false }
    ]
  },
  {
    question: 'Hvað heitir höfuðborg Grikklands?',
    answers: [
      { text: 'Arna', correct: false },
      { text: 'Dísa', correct: false },
      { text: 'Sara', correct: false },
      { text: 'Aþena', correct: true }
    ]
  },
  { question: 'Hvaða dýr er best?',
    answers: [
      { text: 'köttur', correct: true },
      { text: 'hundur', correct: true }
    ]
  },
  {
    question: 'Að hvaða dýri varð "litli ljóti andarunginn?',
    answers: [
      { text: 'Önd', correct: false },
      { text: 'Svan', correct: true }
    ]
  }
]
